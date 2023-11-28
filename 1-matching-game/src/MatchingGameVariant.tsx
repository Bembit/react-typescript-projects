import React, { useState, useEffect } from 'react';

// Define the structure of each card / button
type Cards = {
	data: string;
	state: BgColorState;
};

// Define the possible background color states for a card
type BgColorState = 'DEFAULT' | 'SELECTED' | 'ERROR';

// Main component
function MatchingGameVariant({ data }: { data: Record<string, string> }) {
	const countries = Object.keys(data);
	const capitals = Object.values(data);

  // Sort items randomly and set initial state to 'DEFAULT'
	const randomizedItems = (): Cards[] => {
	const mergedItems = [...countries, ...capitals];
	return mergedItems.sort(() => Math.random() - 0.5).map((data) => ({
		data,
		state: 'DEFAULT',
	}));
	};

	// State to manage the items in the game
	const [items, setItems] = useState<Cards[]>(randomizedItems);

	// State to keep track of the currently selected item
	const [selected, setSelected] = useState<Cards>();

	// State to track whether buttons should be disabled
	const [disabled, setDisabled] = useState<boolean>(false);

	// Function to get the CSS class name based on the state of the item
	const getItemClassName = (item: Cards): string => {
		if (item.state === 'SELECTED') {
			return 'selected btn';
		} else if (item.state === 'ERROR') {
			return 'error btn';
		} else {
			return 'default btn';
		}
	};

	// Use useEffect to handle the .8-second delay after the second click
	useEffect(() => {
		if (disabled) {
		const timeoutId = setTimeout(() => {
			// Enable buttons and reset the state after .8 seconds
			setDisabled(false);
			setSelected(undefined);
			setItems((items) =>
				items.map((i) => (i.state === 'ERROR' ? { ...i, state: 'DEFAULT' } : i))
			);
		}, 800);

		// Clear the timeout if the component is unmounted
			return () => clearTimeout(timeoutId);
		}
	}, [disabled]);

  const gameOver = items.length === 0;

  // If the game is over, display the game over message and a restart button
  if (gameOver) {
    return (
		<>
			<div className="container">
				Game Over
				<div>
					<button onClick={() => setItems(randomizedItems)}>Restart</button>
				</div>
			</div>
		</>
    );
  }

  // Render the main game content
  return (
		<div className="container">
			<h3>setTimeout variant</h3>
			<p>state resets after .8sec</p>
		{items.map((item) => (
			<button
			key={item.data}
			onClick={() => {
				// If buttons are disabled, do nothing
				if (disabled) {
					return;
				}
				// If no item is selected, mark the clicked item as selected
				if (!selected) {
					setSelected(item);
				// Update the state to mark the clicked item as selected and others as default
					setItems((items) =>
						items.map((i) => (i === item ? { ...i, state: 'SELECTED' } : { ...i, state: 'DEFAULT' }))
					);
				} else {
				// If there is a match, remove both items from the game
					if (selected.data === data[item.data] || data[selected.data] === item.data) {
							setItems((items) =>
							items.filter((i) => !(i.data === selected.data || i.data === item.data))
						);
				} else {
					// If no match, mark both items as 'ERROR' temporarily
						setItems((items) =>
							items.map((i) =>
								i.data === selected.data || i.data === item.data ? { ...i, state: 'ERROR' } : i
							)
					);

					// Disable buttons for .8 seconds
					setDisabled(true);
				}
				// Reset the selected item
				setSelected(undefined);
				}
			}}
			// Apply the appropriate CSS class based on the state of the item
			className={getItemClassName(item)}
			>
				{item.data}
			</button>
		))}
		</div>
	);
}

export default MatchingGameVariant;