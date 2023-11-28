import React, { useState } from 'react';

// Define the structure of each card / button
type Cards = {
    data: string;
    state: BgColorState;
};

// Define the possible background color states for a card
type BgColorState = 'DEFAULT' | 'SELECTED' | 'ERROR';

// Main component
function MatchingGame({ data }: { data: Record<string, string>}) {

    const countries = Object.keys(data)
    const capitals = Object.values(data)

    // Sort items randomly and set initial state to 'DEFAULT'
    const randomizedItems = (): Cards[] => {
        const mergedItems = [...countries, ...capitals];
        return mergedItems.sort(() => Math.random() - 0.5).map(data => ({
            data,
            state: 'DEFAULT',
        }));
    }

    // State to manage the items in the game
    const [ items, setItems ] = useState<Cards[]>(randomizedItems);
    
    // State to keep track of the currently selected item
    const [ selected, setSelected ] = useState<Cards>();
    
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

    const gameOver = items.length === 0;
    // If the game is over, display the game over message and a restart button
    if (gameOver) {
        return <><div>Game Over<div><button onClick={() => {setItems(randomizedItems)}}>Restart</button></div></div></>
    }

    // Render the main game content
    return (
        <div className="container">
                <h3>Original</h3>
                <p>user has to click to reset state to default</p>
            {items.map(item =>
                <button key={item.data}

                    onClick={() => {
                        // If no item is selected, mark the clicked item as selected
                        if (!selected) {
                            setSelected(item);
                            // Update the state to mark the clicked item as selected and others as default
                            setItems(items.map((i) => {
                                if (i === item) {
                                    return { ...i, state: 'SELECTED' };
                                } else {
                                    return { ...i, state: 'DEFAULT' };
                                }
                            }));
                        }
                        // If an item is already selected, check for a match
                        else {
                            // If there is a match, remove both items from the game
                            if (selected.data === data[item.data] || data[selected.data] === item.data) {
                                setItems(items.filter((i) => {
                                    return !(i.data === selected.data || i.data === item.data)
                                }));

                            } else {
                            // If no match, mark both items as 'ERROR' temporarily
                                setItems(items.map((i) => {
                                    return i.data === selected.data || i.data === item.data ? { ...i, state: 'ERROR' } : i;
                                }));

                            }
                            // Reset the selected item
                            setSelected(undefined);
                        }
                    }}
                // Apply the appropriate CSS class based on the state of the item
                className={getItemClassName(item)}>

                    {item.data}
                
                </button>
            )}
            
        </div>
    );
}

export default MatchingGame;