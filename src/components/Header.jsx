// src/components/Header.js
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>AsiliFlow</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;