import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../customHooks/useOnClickOutside';

const boxStyle = {
    height: '100px',
    weight: '100px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Box = () => {
	const [isClickOutside, setClickState] = useState(null);
    const ref = useRef();
    useOnClickOutside(ref, setClickState)

    return (
      <section>
            <div style={boxStyle} ref={ref}>
                <span>{outputStateClick()}</span>
            </div>
      </section>
    );

    function outputStateClick(){
        return (isClickOutside === true) ? 'Click Outside Box' : (isClickOutside === false ) ? 'Click Inside Box' : null;
    }
}

export default Box;
