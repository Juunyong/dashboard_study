'use client';
import React, { useReducer, useState } from 'react';
import { ACTION_TYPE, setCount } from './counterReducer';

const page = () => {
    const [count, dispatch] = useReducer(setCount, { counter: 0, name: 'dd' });
    // const [현재상태, 파견함수 ] = useReducer (상태변경함수, 초기값)
    //const [num, setNum] = useState(0);
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.INCREMENT });
                }}
            >
                ++
            </button>
            <strong>{count.counter}</strong>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.DECREMENT });
                }}
            >
                --
            </button>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.RESET });
                }}
            >
                reset
            </button>
        </div>
    );
};

export default page;
