import styled from "styled-components";

import { shade } from 'polished'

export const Container = styled.button`
background: #0091BD;
height: 56px;
border-radius: 10px;
border: 0;
padding: 0 16px;
color: white;
width: 100%;
margin-top: 16px;
font-weight: bold;

transition: background-color 0.2s;

&:hover {
    background: ${shade(0.2, '#0091BD')}
}
`;
