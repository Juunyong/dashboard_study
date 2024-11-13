'use client';
import React from 'react';
import styled from 'styled-components';

const Button = () => {
    return <ButtonStyled className="hover:bg-secondary rounded py-1 px-5 text-white bg-primary">Button</ButtonStyled>;
};

const ButtonStyled = styled.button`
    &::before {
        content: 'hi';
    }
`;

export default Button;
