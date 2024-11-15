import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '@/components/layout/Footer';

const LoginLayout = ({ children }) => {
    return (
        <div id="wrap">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default LoginLayout;