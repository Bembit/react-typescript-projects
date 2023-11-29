import React from 'react';
import { MenuItem } from './App';

export interface MenuProps {
    menuItems: MenuItem[];
    addToOrder: (item: MenuItem) => void;
};

const Menu: React.FC<MenuProps> = ({ menuItems, addToOrder }) => {

    return (
        <div className="menu">
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        {/* div background */}
                        <div>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <p>{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <button
                            onClick={() => addToOrder(item)}
                        >Add to Orders</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
