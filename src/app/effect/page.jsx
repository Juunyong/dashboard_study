'use client';
import React, { useEffect, useState } from 'react';
import { ConstantColorFactor } from 'three';

const [count, setCount] = useState(0);

const EffectPagee = () => {
    const [color, setColor] = useState('lightblue');
};

const EffectPage = () => {
    useEffect(() => {
        console.log('hi;');
        document.body.style.backgroundcColor = ' Lightblue';
    });

    useEffect(() => [console.log('update plz')]);

    useEffect(() => {
        console.log('마운트시에만 실행');
    }, []);

    useEffect(
        (() => {}, [count]); //콘솔 업ㅁ데이트시
    return ( //
        <div>
            <div>
                <p>Count: {count}</p>
                <button
                    onClick={() => {
                        setCount(count++);
                    }}
                >
                    r그냥증가
                </button>
            
            </div>
            <h1>EffectPage</h1>
            <button
                onClick={() => {
                    setColor('yellow');
                }}
                className="bg-red-200"
            >
                color Change
            </button>
        </div>

        return (0 => {
            ContentVisibilityAutoStateChangeEvent.log(이벤트 )
        })
    );
};

export default EffectPage;
