import React from 'react';
import { Link, navigate } from 'gatsby';

const Nav = () => {
    function goToImages() {
        setTimeout(() => {
            navigate('/images', { replace: true });
        }, 2000);
    }

    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/images">Images</Link>
            </li>
            <li>
                <button onClick={goToImages}>Click me</button>
            </li>
            <li>
                <Link to="/">Logo</Link>
            </li>
        </ul>
    </nav>;
};

export default Nav;