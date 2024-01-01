import React, { useState } from 'react';
import { Spell } from '../App';

// issues:

// skill point logic should be moved to app.tsx, at least the base amount of points should be there.

// two skillTree components has to share the total available points to spend.

// should track individual spells. max points is 5 on each. once 5 points reached, color it to red.
// should track points and tiers together.
// should refactor the renderSkills. the whole three should be rendered, but lower tiers should be disabled, unclickable

interface SkillTreeProps {
	treeName: string;
	onSelectSpell: (tier: number, spell: Spell) => void;
	 // Add the spells prop
	spells: Spell[];
}

// tracking spells and their ranks
interface SpellRank extends Spell {
	rank: number;
}

export default function SkillTree({ treeName, onSelectSpell, spells }: SkillTreeProps) {

  	const [points, setPoints] = useState(0);

	// const [selectedSpells, setSelectedSpells] = useState<SpellRank[]>([]);

	// this should be here
	const handleSpellSelect = (tier: number, spell: Spell) => {
		// need a spell max rank of 5, so a rank to be tracked
		if (points < 15) {
			onSelectSpell(tier, spell);
			console.log(spell.name)
			setPoints(points + 1);
			console.log(`Selected ${spell.name} in Tier ${tier}. Tier ${tier} is now ${points + 1} / 5 points`);
		}
	};

	const handleRemovePoint = () => {
		if (points > 0) {
		  setPoints(points - 1);
		  console.log(`Removed 1 point from ${treeName} Tree`);
		}
	};

	const handleRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault();
		handleRemovePoint();
	  };

	const renderSkills = (tier: number) => {
		const tierSpells = spells.filter((spell) => spell.tier === tier);
	  
		return (
		// check each spell. if a spell row!! has 5 points on it, make it selected, green, showing the next tier of spells
		<div className={`skill-row ${points >= tier * 5 && points >= 5 ? 'selected' : ''}`}>
			{tierSpells.map((spell) => (
				<div
					className={`skill ${points >= tier * 5 + parseInt(spell.id) && points >= tier * 5 ? 'selected' : ''}`}
					onContextMenu={handleRightClick}
					key={spell.id}
					onClick={() => handleSpellSelect(tier, spell)}
				>
					<div>
						{spell.name}
					</div>

				</div>
			))}
		  </div>
		);
	  };

	return (
		<div className="skill-tree">
			<h2>{treeName} Tree</h2>
			<p>Total Points: {points}</p>

			{(() => {
				if (points < 5) {
					return renderSkills(1);
				} else if (points < 10) {
					return (
					<>
						{renderSkills(1)}
						{renderSkills(2)}
					</>
					);
				} else {
					return (
					<>
						{renderSkills(1)}
						{renderSkills(2)}
						{renderSkills(3)}
					</>
					);
				} 
			})()}

		</div>
	);
}
