import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GameProps } from './Shop';
import NotFound from './NotFound';

// component to render the details of a game

export default function GameDetails({ games, claimed, setClaimed, isGameClaimed }: GameProps) {

    const { id } = useParams();

    const game = games.find((game) => game.id.toString() === id);

    if (!game) {
        return <NotFound></NotFound>
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
                {/* render an already in library link or don't render anything */}
                {/* I should be able to claim here too, but I spent way to much time tinkering with this little project so no thanks */}
                {isGameClaimed(game.id) ? <Link className="btn-info" to="/library">Already in library</Link> : <></>}
                <Link className="btn-info" to="/">Back to shop</Link>
            </div>
        </div>
    );

}