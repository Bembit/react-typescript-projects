import { GameProps } from "./Shop";

// component that renders each claimed game in the library

export default function Library({ claimed, setClaimed, isGameClaimed }: GameProps) {
    if(claimed.length > 0) {
        return (
            <div className="library">
                <h1>My library</h1>
                <div className="shop">
                    {/* map through claimed games */}
                    {claimed.map((game) => (
                        <div className="game" key={game.id}>
                            <div  style={{
                                backgroundImage: `url(${game.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '150px',
                                width: '225px',
                            }}></div>
                            <div className="card-bottom">
                            <h3>{game.title}</h3>
                            <h4>{game.genre}</h4>
                            <h4>{game.price}</h4>
                            {/* remove a game from the claimed games */}
                            <button onClick={() => setClaimed(claimed.filter((claimedGame) => claimedGame.id !== game.id))}>Remove from library</button>                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="library">
            <h1>You have no games in your library</h1>
        </div>
    );
}