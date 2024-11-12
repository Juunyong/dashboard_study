import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Homepage = () => {
    return (
        <div id="wrap" className="bg-gray-50">
            <Header />
            <section>
                <div className="inner">
                    <h2> mini status </h2>
                    <div>
                        <ul>
                            <li className="flex gap-5 bg-white p-5">
                                <div className="w-14 h-14 bg-sky-50 rounded-full flex justify-center items-center text-violet-800">
                                    <BsBarChartFill />
                                </div>
                                <div>
                                    <span className="text-sm text-primary-70 ">Earnings</span>
                                    <strong className="block text-lg">$350.4</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Homepage;
