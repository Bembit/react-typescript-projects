import { Link } from "react-router-dom";
import { GameItem } from "../App";
import { useState, Dispatch, SetStateAction } from "react";

// main shop component rendering all games with buttons to claim them or view more details of each game

// interface for the props
export interface GameProps {
    games: GameItem[];
    claimed: GameItem[];
    setClaimed: Dispatch<SetStateAction<GameItem[]>>;
    isGameClaimed: (gameId: number) => boolean;
};

export default function Shop({ games, claimed, setClaimed }: GameProps) {

    // Function to check if a game is claimed
    const isGameClaimed = (gameId: number) => claimed.some((claimedGame) => claimedGame.id === gameId);

    // Function to claim a game
    const claimGame = (game: GameItem) => {
        // Check if the game is already claimed
        const alreadyClaimed = claimed.find((alreadyClaimed) => alreadyClaimed.id === game.id);

        if(alreadyClaimed) {
            // If the game is already claimed, update the claimed state
            setClaimed(
                claimed.map((item) => 
                    // If the current item's id matches the claimed game's id, replace it with the claimed game
                    item.id === game.id ? { ...alreadyClaimed } : item
                )
            );
            console.log("item already claimed")
        } else {
            // If the game is not already claimed, add it to the claimed state
            setClaimed([ ...claimed, { ...game } ]);
            console.log("item claimed")
        }

    }

    return (
        // if the setClaimed.lenght equals to the lenght of the available games, render a message
        claimed.length === games.length ? <div className="shop"><h1>No more games to buy</h1></div> :

        <div className="shop">
            {/* map through games */}
            {games.map((game) => (
                <div className="game" key={game.id}>
                    <Link to={`/${game.id}`}>
                        <div  style={{
                            backgroundImage: `url(${game.image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '300px',
                            width: '225px',
                        }}>
                    </div>
                    </Link>
                    <div className="card-bottom">
                    <h3>{game.title}</h3>
                    <h4>{game.genre}</h4>
                    <h4>{game.price}</h4>
                    {/* change button to in library once it's claimed */}
                    <button onClick={() => claimGame(game)}>
                        {isGameClaimed(game.id) ? "In Library" : "Claim"}
                    </button>
                    <Link className="btn-info" to={`/${game.id}`}>More info</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}   