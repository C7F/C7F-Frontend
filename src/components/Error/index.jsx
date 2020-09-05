import React from 'react';
import propTypes from 'prop-types';

export default function Error(props) {
    const { children } = props;

    if (children === '' || children === <></>) {
        return <></>;
    }

    return (
        <div className="terminal-alert terminal-alert-error">
            {children}
        </div>
    );
}

Error.defaultProps = {
    children: <></>,
};

Error.propTypes = {
    children: propTypes.node,
};
