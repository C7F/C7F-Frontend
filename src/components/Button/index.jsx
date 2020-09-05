import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

function Button(props) {
    const {
        btnType, children, className, blockLevel,
    } = props;
    return (
        <button type="button" className={classNames('terminal-btn', `terminal-btn-${btnType}`, className, { 'btn-block': blockLevel })}>
            {children}
        </button>
    );
}

const propType = {
    btnType: propTypes.oneOf(['default', 'primary', 'error']),
    children: propTypes.node,
    className: propTypes.string,
    blockLevel: propTypes.bool,
};

const defaultProps = {
    btnType: 'default',
    children: <></>,
    className: '',
    blockLevel: false,
};

Button.propTypes = propType;
Button.defaultProps = defaultProps;

export default Button;
