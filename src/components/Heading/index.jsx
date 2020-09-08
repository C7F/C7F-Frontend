import styled from 'styled-components';

const color = (props) => props.type || 'fgColor';

export const Heading1 = styled.h1`
    color: ${(props) => props.theme[color(props)]} !important;
`;

export const Heading2 = styled.h2`
    color: ${(props) => props.theme[color(props)]} !important;
`;
