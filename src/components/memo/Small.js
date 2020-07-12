import React, { memo } from 'react';
import propTypes from 'prop-types'

const Small = memo((props) => {
    const { value } = props;

    console.log('me volví a renderizar');
    return (
        <React.Fragment>
            <small>Counter: {value}</small>
        </React.Fragment>
    );
});

Small.propTypes = {
    value: propTypes.number.isRequired
};

export default Small;