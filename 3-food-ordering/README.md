## React Menu/Order Tasks and Short App Description

The idea is to allow users to add items to an "orders list", modify quantities or remove orders as needed.

### Keywords
Props, useState, handlers, find, filter, map, interface, exports, alerts, confirmation

### Tasks

1. **Use TypeScript**
   - Ensure the project uses TypeScript.

2. **Render Menu and Orders Components in App.js**
    ```javascript
	return (
	<>
		<div className="App">    
			<Menu></Menu>
			<Orders></Orders>
		</div>
	</>
    ```

3.  **Render Menu Items**
	- Render the menu items from the data.js file in the main component's menu side.
	```javascript
	<ul>
		{menuItems.map(item => (
			<li key={item.id}>
	```

4.	**Render Orders Component**
	- Show the Orders component on the right once orders are added by the user.
	```javascript
	if(inOrders.length > 0) {
		return (
			<div className="orders">
				<h2>Orders</h2>
	```

5.	**Display Price and Quantity**
	- Show each item's price and quantity in the orders component.
	- This is a great part for typescript: number and javascripts tofixed string method to argue
	```javascript
	<p>${(order.price * order.quantity).toFixed(2)}</p>
	<p>Quantity: {order.quantity}</p>
	```

6.  **Modify Orders**
	- Allow adding, reducing, and deleting items. Show the total price in dollars with 2 decimals.
	```javascript
	<button onClick={() => addToOrder(order)}>Add more</button>
	<button onClick={() => removeFromOrder(order)}>Remove one</button>
	```

7.	**Clear Orders with Confirmation**
	- Have a button to drop all orders and ask for confirmation.
	```javascript
	const confirmDelete = () => {
	const confirm = window.confirm(`Are you sure you want to delete all items?`);
		if(confirm) {
			dropAll();
		}
	}

	<button onClick={() => confirmDelete()}>Clear order list</button>
	```

8.	**Create Handlers with TypeScript Interfaces**
	- Use TypeScript interfaces for props and create handlers for each action.
	```typescript
	interface OrderProps {
		inOrders: OrderItem[];
		addToOrder: (item: OrderItem) => void;
		removeFromOrder: (item: OrderItem) => void;
		dropAllType: (item: OrderItem) => void;
		dropAll: () => void;
	};
	```



### Potential Extra Features
1. Dynamic Buttons and Price Calculations
- Implement various types of buttons, such as increment, decrement, and delete, to enhance user interaction.
- Perform dynamic price calculations based on quantity changes.

2. Modular Interfaces in Separate Files
-Move TypeScript interfaces to separate files for better organization.

3. Design Improvements
-Enhance the visual design for a more appealing and user-friendly interface.

4. API Integration for Menu Data
-Explore fetching menu data from an external API to make the application dynamic and easily updatable.
-Update the menuItems array to fetch data asynchronously.