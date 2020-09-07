import styled from 'styled-components';

const TerminalInput = styled.input`
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.fgColor} !important;
    color: ${(props) => props.theme.fgColor} !important;
`;

export default TerminalInput;
