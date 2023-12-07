import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <h3>Game Shop</h3>
            <Link to="/">Shop</Link>
            <Link to="/library">Library</Link>
        </nav>
    );
}