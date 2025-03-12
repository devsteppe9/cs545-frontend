import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/new-post">New Post</Link></li>
                </ul>
            </nav>
        </header>
    );
}