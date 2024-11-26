import { BtnProvider, useBtn } from '@/context/BtnContext';
import classNames from 'classnames';
import { Heart } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

//생성 (create)

const Like = () => {
    return (
        //context 공급 (provider)
        <BtnProvider>
            {/*하트 토글 버튼*/}
            <BtnLike />
            {/* 팔로우버튼 */}
            <BtnFollow />
        </BtnProvider>
    );
};

const BtnLike = () => {
    const { like, toggleLike } = useBtn();
    return (
        <button onClick={toggleLike}>
            <Heart fill={like ? 'red' : ''} />
            Like
        </button>
    );
};
const BtnFollow = () => {
    const { like, toggleLike } = useBtn();
    return (
        <button onClick={toggleLike} className={classNames(like ? 'bg-gray-500' : 'bg-orange-600')}>
            +팔로우
        </button>
    );
};

export default Like;
