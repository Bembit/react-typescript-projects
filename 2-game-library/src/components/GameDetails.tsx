import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GameItem } from '../App';

interface GameDetailsProps {
    games: GameItem[];
}

export default function GameDetails({ games }: GameDetailsProps) {

    const { id } = useParams();

    const game = games.find((game) => game.id.toString() === id);

    if (!game) {
        return <div>Game not found</div>;
    }

    return (
        <div className="game-details">

            <div style={{
                backgroundImage: `url(${game.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '500px',
                width: '500px',
            }}>
            </div>

            <div className="">
                <h3>{game.title}</h3>
                <h4>{game.genre}</h4>
                <p>{game.description}</p>
                <h4>$ {game.price}</h4>
                <button>Claim</button>
                <Link to="/">Back to shop</Link>
            </div>
        </div>
    );

}