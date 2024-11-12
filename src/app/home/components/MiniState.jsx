import Card from '@/components/card/Card';
import IconBox from '@/components/icon/IconBox';
import React from 'react';
import Image from 'next/image';
import FlagImage from '@/components/icon/FlagImage';

const MiniState = ({ name, value, startContent, endContent }) => {
    return (
        <Card>
            <div className="flex items-center  gap-5">
                {startContent && <IconBox className="w-14 h-14 bg-primary-20">{startContent}</IconBox>}

                {/*text*/}
                <div>
                    <span className="text-sm text-primary-70 ">{name}</span>
                    <strong className="block text-lg">{value}</strong>
                </div>
                <div className="flex. gap=2">
                    <span className="secondary text-sm"></span>
                </div>
                {/*국기 */}
                <div className="rounded-full ml-auto w-[50px] h-[50px]">{endContent}</div>
            </div>
        </Card>
    );
};

export default MiniState;
