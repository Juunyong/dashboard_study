'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const samplePage = () => {
    const [num, setNum] = useState(0);
    const [name, setName] = useState('winter');
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');

    const menuArr = [{ value: 'menu1' }, { value: 'menu2' }, { value: 'menu3' }];

    const [tab, setTab] = useState(0);
    return (
        <div>
            <div>
                {menuArr.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setTab(index);
                        }}
                        className={classNames(tab === index ? 'bg-blue-200' : '')}
                    >
                        {item.value}
                    </button>
                ))}
            </div>
            <div>
                {tab === 0 && <div>메뉴 1 컨텐츠 </div>}
                {tab === 1 && <div>메뉴 2 컨텐츠 </div>}
                {tab === 2 && <div>메뉴 3 컨텐츠 </div>}
            </div>
            <input
                type="text"
                value={text}
                className="bg-blue-500 mx-10 my-3"
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <div>{text}</div>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? <IoClose /> : <FaBars />}
            </button>
            <div>{num}</div>
            <button
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setNum(num - 1);
                }}
            >
                -
            </button>
            <h2>usestate를 사용해 winter - fall</h2>

            <strong>{name}</strong>
            <hr />
            <button
                onClick={() => {
                    setName(name === 'winter' ? 'fall' : 'winter');
                }}
            >
                change name
            </button>
        </div>
    );
};

export default samplePage;
