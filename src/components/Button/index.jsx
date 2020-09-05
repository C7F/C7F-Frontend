import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import './style.scss';

const TerminalBtn = styled.button`
    border-style: solid;
    border-width: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: 0;
    padding: .65em 2em;
    font-size: 1em;
    font-family: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    z-index: 1;

    color: ${(props) => props.theme.fgColor};
    background-color: ${(props) => props.theme[props.btnType]};
    border: 1px solid ${(props) => props.theme[props.btnType]};
`;

function Button(props) {
    const {
        btnType,
        children,
        className,
        blockLevel,
        type,
    } = props;

    if (type === 'submit') {
        return (
            <button type="submit" className={classNames('terminal-btn', `terminal-btn-${btnType}`, className, { 'btn-block': blockLevel })}>
                {children}
            </button>
        );
    }

    return (
        <TerminalBtn type="button" btnType={btnType} className={classNames(className, { 'btn-block': blockLevel })}>
            {children}
        </TerminalBtn>
    );
}

const propType = {
    btnType: propTypes.oneOf(['default', 'primary', 'error']),
    children: propTypes.node,
    className: propTypes.string,
    blockLevel: propTypes.bool,
    type: propTypes.string,
};

const defaultProps = {
    btnType: 'default',
    children: <></>,
    className: '',
    blockLevel: false,
    type: 'button',
};

Button.propTypes = propType;
Button.defaultProps = defaultProps;

export default Button;
