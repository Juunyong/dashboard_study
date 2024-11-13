import React from 'react';
import { ButtonIcon } from '../button/Button';
import { BsThreeDots } from 'react-icons/bs';

const Title = ({ childrun }) => {
    return (
        <header className="flex justify-between items-center">
            <h2> {childrun}</h2>
            <ButtonIcon blind="옵션보기" className="bg-gray-100 w-9 h-9">
                <BsThreeDots />
            </ButtonIcon>
        </header>
    );
};

export default Title;
