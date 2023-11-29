import React from "react";
import { OrderItem } from "./App";

interface OrderProps {
    inOrders: OrderItem[];
    addToOrder: (item: OrderItem) => void;
    removeFromOrder: (item: OrderItem) => void;
    dropAllType: (item: OrderItem) => void;
    dropAll: () => void;
};

function Orders({ inOrders, addToOrder, removeFromOrder, dropAllType, dropAll }: OrderProps) {

    const totalPrice: string = inOrders.reduce((acc, curr) => acc + curr.quantity * curr.price, 0).toFixed(2);
    // const totalPrice: number = Math.round(inOrders.reduce((acc, curr) => acc + curr.quantity * curr.price, 0));

    const confirmDelete = () => {
        const confirm = window.confirm(`Are you sure you want to delete all items?`);
        if(confirm) {
            dropAll();
        }
    }

        if(inOrders.length > 0) {
            return (
                <div className="orders">
                    <h2>Orders</h2>
                        <ul>
                            {inOrders.map(order => (
                                <li key={order.id}>
                                    <div>
                                        <p>{order.name}</p>
                                        <p>${(order.price * order.quantity).toFixed(2)}</p>
                                        <p>Qty: {order.quantity}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => addToOrder(order)}>➕</button>
                                        <button onClick={() => removeFromOrder(order)}>➖</button>
                                        <button onClick={() => dropAllType(order)}>🗑️ {order.name}</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => confirmDelete()}>🗑️ Clear all orders</button>
                        <h3>total: $&nbsp;{totalPrice}</h3>
                </div>
            );
        } else {
            return (
                <div className="orders">
                    <h2>Orders</h2>
                    <p>There are no orders yet.</p>
                </div>
            );
        }

}

export default Orders;