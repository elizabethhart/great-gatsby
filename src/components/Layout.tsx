import React, { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <GlobalStyles />
            <Nav />
            {props.children}
            <Footer />
        </div>
    );
};
