import React from 'react';
import propTypes from 'prop-types';

import Card from '../Card';

export default function Error(props) {
    const { children } = props;

    if (children === '' || children === <></>) {
        return <></>;
    }

    return (
        <Card className="bg-danger text-light">
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
}

Error.defaultProps = {
    children: <></>,
};

Error.propTypes = {
    children: propTypes.node,
};
