import { GameProps } from "./Shop";

export default function Library({ games, claimed, setClaimed }: GameProps) {
    if(claimed.length > 0) {
        return (
            <div className="library">
                <h1>Library</h1>
                <div className="shop">
                    {/* map through games */}
                    {claimed.map((game) => (
                        <div className="game" key={game.id}>
                            
                            <div className="card-bottom">
                            <h3>{game.title}</h3>
                            <h4>{game.genre}</h4>
                            <h4>{game.price}</h4>
                            {/* <p>{game.description}</p> */}
                            
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="library">
            <h1>Library</h1>
            

        </div>
    );
}