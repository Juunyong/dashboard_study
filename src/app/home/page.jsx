import React from 'react';
import { BsBackpack2, BsBarChartFill } from 'react-icons/bs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/card/Card';
import MiniState from './components/MiniState';
import IconBox from '@/components/icon/IconBox';

const Homepage = () => {
    return (
        <div id="wrap" className="bg-gray-50">
            <Header />
            <section>
                <div className="inner">
                    <h2> mini status </h2>
                    <div>
                        <main className="inner">
                            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                <MiniState name="Earnings" value="$350.4" startContent={<BsBarChartFill />} />
                                <MiniState
                                    name="Your Balance"
                                    value="$1000"
                                    startContent={<BsBackpack2 />}
                                    endContent={<FlagImage country="usa" />}
                                />
                                <MiniState name="Earnings" value="$350.4" />
                                <MiniState name="New Tasks" value="154" />
                                <MiniState name="Total Projects" value="$2935.4" />
                                <MiniState />
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Homepage;
