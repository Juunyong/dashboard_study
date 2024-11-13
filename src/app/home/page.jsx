'use client';
import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MiniStateGrid from './components/MiniStateGrid';
import { stateData } from '@/components/data/stateData';
import Button from '@/components/button/Button';
import CheckTable from './components/CheckTable';
import { tableDataCheck } from '@/components/data/tableDataCheck';

const Homepage = () => {
    return (
        <div id="wrap" className="bg-gray-300 px-5">
            <Header />
            <Button>확인</Button>
            <Button bg="gray">취소</Button>
            <main className="inner flex flex-col gap-10">
                <div className="flex gap-4">
                    <button>확인</button>
                    <Button>확인</Button>
                    <Button> 취소</Button>
                </div>
                <MiniStateGrid stateData={stateData} />
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="grow">
                        <CheckTable tableDataCheck={tableDataCheck}></CheckTable>
                    </div>

                    <div className=" grow flex flex-col gap-4 md:flex-row lg:flex-row">
                        <div className="bg-green-200 grow">g</div>

                        <div className="bg-green-200 grow">g</div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Homepage;
