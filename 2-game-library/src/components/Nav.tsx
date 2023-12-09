import { Link } from "react-router-dom";

// take a guess what this component does

export default function Nav() {
    return (
        <nav>
            <h3>Game Shop</h3>
            <Link to="/">Shop</Link>
            <Link to="/library">Library</Link>
            <Link to="/asdfg">404 test</Link>
        </nav>
    );
}