import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, className,background='bg-white',round='xl',padding='p-4',hover=false }) {
    return (
        <div
            className={`w-full ${background} rounded-${round} overflow-hdden shadow-md ${padding} ${className}  ${hover?'hover:bg-gray-200 cursor-pointer':''}`}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
