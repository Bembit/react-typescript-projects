# Matching Game Tasks and Short App Description

Players need to match a country to its capital by clicking on the appropriate buttons.

## Tasks

1. **Receive Data Prop**
   - Components should receive a `data` prop in the specified format.
    ```javascript
    <CountryCapitalGame data={{Germany: "Berlin", Hungary: "Budapest", France: "Paris"}}></CountryCapitalGame>
    ```
    ```typescript
    function CountryCapitalGame({ data }: { data: Record<string, string>}) {  };
    ```

2. **Render Buttons for Each Country and Capital**
   - Display a button for each country and each capital.
    ```javascript
    const countries = Object.keys(data)
    const capitals = Object.values(data)
    const items = [...countries, ...capitals]

    return
    {items.map(item =>
        <button className='btn'>{item}</button>
    )}
    ```

3. **Render Randomly Ordered Buttons**
   - Render buttons on the screen in a random order.
    ```typescript
    const shuffle = (array: string[]) => { 
        return array.sort(() => Math.random() - 0.5); 
    };
    ```
    refactored the sort
    ```typescript
        const randomizedItems = (): Cards[] => {
        const mergedItems = [...countries, ...capitals];
        return mergedItems.sort(() => Math.random() - 0.5).map(data => ({
            data,
            state: 'DEFAULT',
        }));
    }
    ```

4. **Change Button Background on Click**
   - Change the background color of a button to blue on click.
    ```javascript
    onClick={() => {
        // do things
    }}
    ```    
    getting into state management
    ```typescript
    const [bgColor, setBgColor] = useState<Record<string, string>>({});
    ```
    change
    ```typescript
        const [items, setItems] = useState<Items[]>([...countries, ...capitals].map((item) => ({
        item,
        state: 'DEFAULT',
    }))
    ```
    and move sort inside usestate so it won't reorder / rerender on every btn click
    ```javascript
    ).sort(() => Math.random() - 0.5) as Items[]
    ```

5. **Handle Matching and Mismatching**
   - Remove both buttons from the DOM if it's a match.
   - Set the background color of both to red if the answer is wrong.
    ```javascript
     else {
        if (selected.data === data[item.data] || data[selected.data] === item.data) {
            setItems(items.filter((i) => {
                        return !(i.data === selected.data || i.data === item.data)
            }));
    ```

    ```javascript
        className={item.state === 'SELECTED' ? 'selected btn' : item.state === 'ERROR' ? 'error btn' : 'default btn'}>
    ```

6. **Refactor**
   - Refactor class selection based on the state.
    ```typescript
        const getItemClassName = (item: Cards): string => {
            if (item.state === 'SELECTED') {
                return 'selected btn';
            } else if (item.state === 'ERROR') {
                return 'error btn';
            } else {
                return 'default btn';
            }
        };

        className={getItemClassName(item)}
    ```

7. **Restore Default Background on Second Wrong Click**
   - Restore the default background color of the wrong pair on a second wrong click.
    ```javascript
    onClick={() => {

        if (!selected) {
            setSelected(item);
            setItems(items.map((i) => {
                if (i === item) {
                    return { ...i, state: 'SELECTED' };
                } else {
                    return { ...i, state: 'DEFAULT' };
                }
            }));
    ```

    ```javascript
        setItems(items.map((i) => {
            return i.data === selected.data || i.data === item.data ? { ...i, state: 'ERROR' } : i;
        }));
    ```

8. **Congratulate on Game Over**
   - Display a congratulatory message when there are no more buttons.
    ```javascript
    if (gameOver) {
        return <><div>Game Over<div><button onClick={() => {setItems(randomizedItems)}}>Restart</button></div></div></>
    }
    // else render game
    return (
        <>
            {items.map(item =>
    ```

9. **Export Component**
   - Export the component as the default export.
    ```javascript
    export default MatchingGame;
    ```

![Cap.](https://media.tenor.com/9icIB76KxhgAAAAC/captain-america-i-can-do-this-all-day.gif)

potential extras:
I really should do this settimeout feature because that would be the only thing resembling anything from a real app.
    -settimeout 1sec background back to default
    -need new bgcolorstate "disabled"
    -getItemClassname add disabled
    -disable all the btns for 1sec when reached 2 selected and wrong items
    -add 3 lives?

10. Added a variant with a useEffect as MatchingGameVariant.tsx
    
    I didn't need a disabled state on types, no additional css classes required, just a boolean useState to check if the buttons should be disabled or not

```javascript
	const [disabled, setDisabled] = useState<boolean>(false);
```
    so now if we click on the wrong button pair, we'll have a .8 sec red bg color, we are unable to select during the timeout, and then it resets back to default

```javascript
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
```