import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/card/Card';
import MiniState from './components/MiniState';

const Homepage = () => {
    return (
        <div id="wrap" className="bg-gray-50">
            <Header />
            <section>
                <div className="inner">
                    <h2> mini status </h2>
                    <div>
                        <ul>
                            <li className="flex gap-5 bg-white p-5 rounded-lg">
                                <div className="w-14 h-14 bg-sky-50 rounded-full flex justify-center items-center text-violet-800">
                                    <BsBarChartFill />
                                </div>
                                <div>
                                    <span className="text-sm text-primary-70 ">Earnings</span>
                                    <strong className="block text-lg">$350.4</strong>
                                </div>
                            </li>
                        </ul>
                        <main className="inner">
                            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                <MiniState name="Earnings" value="$350.4" />
                                <MiniState name="Your Balance" value="$1000" />
                                <MiniState name="Earnings" value="$350.4"  />
                                <MiniState  name="New Tasks" value="154"/>
                                <MiniState name="Total Projects" value="$2935.4" >
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
