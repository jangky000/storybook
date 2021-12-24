import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
label: library-button;
background-color: blue;
`;

export interface ButtonProps{
    type:'primary'|'secondary';
    onClick: ()=>void;
    children: React.ReactNode;
}

const Button = ({ type = 'primary', children, onClick }:ButtonProps) => (
  <StyledButton type="button" onClick={onClick}>{children}</StyledButton>
);

export default Button;
