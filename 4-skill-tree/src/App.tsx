import React, { useState } from 'react';
import SkillTree from './components/SkillTree';
import data from './data'; // Import the data
import './App.css';

export interface Spell {
	id: string;
	name: string;
	tier: number;
	description: string;
}

export default function App() {
	const [attackTree, setAttackTree] = useState<Spell[]>([]); // Update state type to Spell[]
	const [defenseTree, setDefenseTree] = useState<Spell[]>([]); // Update state type to Spell[]
	const [totalPoints, setTotalPoints] = useState(0);

	const handleSelectSpell = (tree: Spell[], setTree: React.Dispatch<React.SetStateAction<Spell[]>>, tier: number, spell: Spell) => {
		setTree((prevTree) => {
			const newTree = [...prevTree];
			newTree[tier - 1] = spell;
			return newTree;
		});
	};

	const handleReset = () => {
		setAttackTree([]);
		setDefenseTree([]);
		setTotalPoints(0);
	};

	return (
		<div className="main">
			<h1>Skill Tree / Talent Calculator</h1>
			<div className="skill-tree-container">
				<SkillTree
					treeName="Attack"
					onSelectSpell={(tier, spell) => handleSelectSpell(attackTree, setAttackTree, tier, spell)}
					// Pass the attack spells from data.js
					spells={data.attack}
				/>
				<SkillTree
					treeName="Defense"
					onSelectSpell={(tier, spell) => handleSelectSpell(defenseTree, setDefenseTree, tier, spell)}
					// Pass the defense spells from data.js
					spells={data.defense}
				/>
			</div>
			{/* <p>Total Points Spent: {totalPoints}</p> */}
			{/* talent reset btn */}
			{/* <button onClick={handleReset}>Reset</button> */}
		</div>
	);
}
