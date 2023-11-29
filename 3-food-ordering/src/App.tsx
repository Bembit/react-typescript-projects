import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Orders from './Orders';
import Data from './data.js';

export interface MenuItem {
	id: string;
	name: string;
	price: number;
	image: string;
};

export interface OrderItem extends MenuItem {
	quantity: number;
};

function App() {

	const menuItems: MenuItem[] = Data.menu;

	const [inOrders, setInOrders] = useState<OrderItem[]>([]);

	const addToOrder = (item: MenuItem) => {
		const alreadyInOrder = inOrders.find((alreadyInOrder) => alreadyInOrder.id === item.id);
		if(alreadyInOrder) {
			setInOrders(
				inOrders.map((check) => 
					check.id === item.id ? { ...alreadyInOrder, quantity: alreadyInOrder.quantity + 1 } : check
				)
			);
		} else {
			setInOrders([ ...inOrders, { ...item, quantity: 1 } ]);
		}
	};

	const removeFromOrder = (item: MenuItem) => {
		const alreadyInOrder = inOrders.find((alreadyInOrder) => alreadyInOrder.id === item.id);
		if(alreadyInOrder?.quantity === 1) {
			setInOrders(inOrders.filter((match) => match.id !== item.id));
		} else {
			setInOrders(
				inOrders.map((order) => 
					order.id === item.id ? { ...order, quantity: order.quantity - 1 } : order
				)
			);
		};
	};

	const dropAllType = (item: MenuItem) => {
		setInOrders(inOrders.filter((match) => match.id !== item.id));
	}

	const dropAll = () => setInOrders([]);

	// dump all items from order

	return (
		<div className="App">
			{/* Pass the menu data as props to MenuComponent */}
			<Menu menuItems={menuItems} addToOrder={addToOrder} />
			<Orders inOrders={inOrders} addToOrder={addToOrder} removeFromOrder={removeFromOrder} dropAllType={dropAllType} dropAll={dropAll} />
		</div>
	);

}

export default App;
