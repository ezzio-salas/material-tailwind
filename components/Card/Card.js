import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, className,background }) {
    return (
        <div
            className={`w-full ${background} rounded-xl overflow-hdden shadow-md p-4 ${className}`}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
