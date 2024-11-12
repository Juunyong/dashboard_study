import Card from '@/components/card/Card';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';

const MiniState = () => {
    return (
        <Card>
            <div className="flex items-center "></div>
            <ul>
                <li className="flex gap-5 bg-white p-5 rounded-lg">
                    <div className="w-14 h-14 bg-sky-50 rounded-full flex justify-center items-center text-violet-800">
                        <BsBarChartFill />
                    </div>
                    {/*text*/}
                    <div>
                        <span className="text-sm text-primary-70 ">Earnings</span>
                        <strong className="block text-lg">$350.4</strong>
                    </div>
                </li>
            </ul>
            <div className="flex. gap=2">
                <span className="secondary text-sm"></span>
            </div>
            {/*구기 */}
            <div></div>
        </Card>
    );
};

export default MiniState;
