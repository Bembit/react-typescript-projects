import { Link } from "react-router-dom";
import { GameItem } from "../App";
import { useState, Dispatch, SetStateAction } from "react";

export interface GameProps {
    games: GameItem[];
    claimed: GameItem[];
    setClaimed: Dispatch<SetStateAction<GameItem[]>>;
};

export default function Shop({ games, claimed, setClaimed }: GameProps) {

    // Function to check if a game is claimed
    const isGameClaimed = (gameId: number) => claimed.some((claimedGame) => claimedGame.id === gameId);

    // a button click handler to claim a game
    const claimGame = (game: GameItem) => {

        const alreadyClaimed = claimed.find((alreadyClaimed) => alreadyClaimed.id === game.id);

        if(alreadyClaimed) {
            setClaimed(
                claimed.map((item) => 
                    item.id === game.id ? { ...alreadyClaimed } : item
                )
            );
            console.log("item already claimed")
        } else {
            setClaimed([ ...claimed, { ...game } ]);
            console.log("item claimed")
        }

    }

    return (
        <div className="shop">
            {/* map through games */}
            {games.map((game) => (
                <div className="game" key={game.id}>
                    <Link to={`/${game.id}`}>
                        <div  style={{
                            backgroundImage: `url(${game.image})`,
                            // backgroundImage: `url(${externalImage})`,
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
                    {/* <p>{game.description}</p> */}
                    <button onClick={() => claimGame(game)}>
                            {isGameClaimed(game.id) ? "In Library" : "Claim"}
                        </button>
                    <Link to={`/${game.id}`}>More info</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}   