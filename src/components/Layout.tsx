import React, { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    );
};
