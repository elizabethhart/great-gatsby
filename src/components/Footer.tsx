import React from 'react';

interface FooterProps {
    //
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <p>&copy; Liz's Gatsby Site {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;