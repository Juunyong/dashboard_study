import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MiniStateGrid from './components/MiniStateGrid';
import { stateData } from '@/data/stateData';
import Button from '@/components/button/Button';

const Homepage = () => {
    return (
        <div id="wrap" className="bg-gray-50">
            <Header />

            <main className="inner">
                <Button />
                <MiniStateGrid stateData={stateData} />
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;
