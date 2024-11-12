import Header from '@/components/layout/Header';
import React from 'react';

const layout = () => {
    return (
        <div id="wrap">
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default layout;
