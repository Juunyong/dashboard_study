'use client';
import React, { useEffect, useState } from 'react';
import { ConstantColorFactor } from 'three';

const EffectPage = () => {
    const [color, setColor] = useState('lightblue');

    useEffect(() => {
        console.log('마운트시에만 실행');
        document.body.style.backgroundColor = 'blue';

        return () => {
            document.body.style.backgroundColor = ' ';
        };
    }, []);

    useEffect(() => {
        console.log('업데이트시에만 실행');

        document.body.style.backgroundColor = color;
    }, [color]);

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('2 - 마운트시에만 실행');
    }, []);

    useEffect(() => {
        console.log('2 - 마운트시와 업데이트시에 실행');
    });

    useEffect(() => {
        console.log('2 - 업데이트 시');
        return () => {
            console.log('2 - 언마운트시에만 실행');
        };
    }, [count]);

    const [timer, setTimer] = useState(0);
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
        let interval;

        // setInterval을 사용하여 1초마다 timer 상태값을 변경
        if (isShow) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
            setTimer(0);
        };
    }, [isShow]);

    return (
        <>
            {' '}
            <div>
                {isShow ? (
                    <>
                        <strong>{timer}초</strong>
                        <button
                            onClick={() => {
                                setIsShow(false);
                            }}
                        >
                            hide timer
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setIsShow(true);
                        }}
                    >
                        show timer
                    </button>
                )}
            </div>
            <div>
                <p>Count: {count}</p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    증가
                </button>
            </div>
            <div>
                <h1>EffectPage</h1>
                <button
                    onClick={() => {
                        setColor('green');
                    }}
                    className="bg-red-200 p-3"
                >
                    색상변경
                </button>
            </div>
        </>
    );
};
export default EffectPage;
