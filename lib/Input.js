import React from 'react';
import PropTypes from 'prop-types';

const mtInputColors = {
    blueGray: 'mt-input-blue-gray-500',
    gray: 'mt-input-gray-500',
    brown: 'mt-input-brown-500',
    deepOrange: 'mt-input-deep-orange-500',
    orange: 'mt-input-orange-500',
    amber: 'mt-input-amber-500',
    yellow: 'mt-input-yellow-600',
    lime: 'mt-input-lime-500',
    lightGreen: 'mt-input-light-green-500',
    green: 'mt-input-green-500',
    teal: 'mt-input-teal-500',
    cyan: 'mt-input-cyan-500',
    lightBlue: 'mt-input-light-blue-500',
    blue: 'mt-input-blue-500',
    indigo: 'mt-input-indigo-500',
    deepPurple: 'mt-input-deep-purple-500',
    purple: 'mt-input-purple-500',
    pink: 'mt-input-pink-500',
    red: 'mt-input-red-500',
};

const mtInputOutlineColors = {
    blueGray: 'mt-input-outline-blue-gray-500',
    gray: 'mt-input-outline-gray-500',
    brown: 'mt-input-outline-brown-500',
    deepOrange: 'mt-input-outline-deep-orange-500',
    orange: 'mt-input-outline-orange-500',
    amber: 'mt-input-outline-amber-500',
    yellow: 'mt-input-outline-yellow-600',
    lime: 'mt-input-outline-lime-500',
    lightGreen: 'mt-input-outline-light-green-500',
    green: 'mt-input-outline-green-500',
    teal: 'mt-input-outline-teal-500',
    cyan: 'mt-input-outline-cyan-500',
    lightBlue: 'mt-input-outline-light-blue-500',
    blue: 'mt-input-outline-blue-500',
    indigo: 'mt-input-outline-indigo-500',
    deepPurple: 'mt-input-outline-deep-purple-500',
    purple: 'mt-input-outline-purple-500',
    pink: 'mt-input-outline-pink-500',
    red: 'mt-input-outline-red-500',
};

const borderColors = {
    blueGray: 'border-blue-gray-500',
    gray: 'border-gray-500',
    brown: 'border-brown-500',
    deepOrange: 'border-deep-orange-500',
    orange: 'border-orange-500',
    amber: 'border-amber-500',
    yellow: 'border-yellow-600',
    lime: 'border-lime-500',
    lightGreen: 'border-light-green-500',
    green: 'border-green-500',
    teal: 'border-teal-500',
    cyan: 'border-cyan-500',
    lightBlue: 'border-light-blue-500',
    blue: 'border-blue-500',
    indigo: 'border-indigo-500',
    deepPurple: 'border-deep-purple-500',
    purple: 'border-purple-500',
    pink: 'border-pink-500',
    red: 'border-red-500',
};

export default function Input({
    placeholder,
    height='',
    color,
    size,
    outline,
    error,
    success,
    type='text',
    width='w-full',
    pr="",
    useref=null,
    backgroundClass='bg-transparent',
    ...rest
}) {
    let labelBorderColor,
        mtInputBorderColor,
        mtInputOutlineColor,
        mtInputOutlineFocusColor,
        inputClasses = [];

    let container = [width, 'relative'];

    if (error) {
        labelBorderColor = borderColors['red'];
        mtInputBorderColor = mtInputColors['red'];
        mtInputOutlineColor = mtInputOutlineColors['red'];
        mtInputOutlineFocusColor = borderColors['red'];
    } else if (success) {
        labelBorderColor = borderColors['green'];
        mtInputBorderColor = mtInputColors['green'];
        mtInputOutlineColor = mtInputOutlineColors['green'];
        mtInputOutlineFocusColor = borderColors['green'];
    } else {
        labelBorderColor = 'border-gray-300';
        mtInputBorderColor = mtInputColors[color];
        mtInputOutlineColor = mtInputOutlineColors[color];
        mtInputOutlineFocusColor = borderColors[color];
    }

    let label = [
        'text-gray-400',
        'absolute',
        'left-0',
        `${outline ? '-top-1.5' : '-top-0.5'}`,
        'w-full',
        'h-full',
        `${!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'}`,
        labelBorderColor,
        'pointer-events-none',
        `${outline && 'flex'}`,
        `${outline && size === 'sm' && 'text-sm'}`,
        `${outline && 'leading-10'}`,
        `${outline && 'transition-all'}`,
        `${outline && 'duration-300'}`,
    ];

    const sharedClasses = [
        'w-full',
        'h-full',
        'text-gray-800',
        'leading-normal',
        'shadow-none',
        'outline-none',
        'focus:outline-none',
        'focus:ring-0',
        'focus:text-gray-800',
    ];

    const inputSM = [
        ...sharedClasses,
        `${outline ? 'px-3' : 'px-0'}`,
        `${outline && 'pt-1.5 pb-0.5'}`,
        'text-sm',
    ];
    const inputRegular = [
        ...sharedClasses,
        `${outline ? 'px-3' : 'px-0'}`,
        `${outline && 'pt-2.5 pb-1.5'}`,
    ];
    const inputLG = [
        ...sharedClasses,
        `${outline ? 'px-3' : 'px-0'}`,
        `${outline && 'pt-3.5 pb-2.5'}`,
    ];

    const inputFilled = [
        mtInputBorderColor,
        'mt-input',
        backgroundClass,
        'border-none',
    ];

    const inputOutline = [
        mtInputOutlineColor,
        labelBorderColor,
        'mt-input-outline',
        backgroundClass,
        'border',
        'border-1',
        'border-gray-300',
        'rounded-lg',
        'focus:border-2',
        `focus:${mtInputOutlineFocusColor}`,
    ];

    if (size === 'sm' && !height) {
        container.push('h-9');
        inputClasses.push(...inputSM);
    } else if (size === 'lg' && !height ) {
        container.push('h-12');
        inputClasses.push(...inputLG);
    } else {
        height  ? container.push(height): container.push('h-11');
        inputClasses.push(...inputRegular);
    }



    outline
        ? inputClasses.push(...inputOutline)
        : inputClasses.push(...inputFilled);

    container = container.join(' ');
    label = label.join(' ');
    inputClasses = inputClasses.join(' ');

    return (
        <div className={`${container}${pr}`}>
            <input
                {...rest}
                ref={useref}
                type={type}
                placeholder=" "
                className={`${inputClasses} ${
                    error && 'mt-input-outline-error'
                } ${success && 'mt-input-outline-success'}`}
            />
            <label className={label}>
                {outline ? (
                    placeholder
                ) : (
                    <span
                        className={`${
                            size === 'sm' && 'text-sm'
                        } absolute top-1/4 transition-all duration-300`}
                    >
                        {placeholder}
                    </span>
                )}
            </label>
            {error && (
                <span className="block mt-1 text-xs text-red-500">{error}</span>
            )}
            {success && (
                <span className="block mt-1 text-xs text-green-500">
                    {success}
                </span>
            )}
        </div>
    );
}

Input.defaultProps = {
    color: 'lightBlue',
    size: 'regular',
    outline: false,
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    outline: PropTypes.bool.isRequired,
    error: PropTypes.string,
    success: PropTypes.string,
};
