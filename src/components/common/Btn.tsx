import React from 'react';
import './Btn.css'

interface Props{
    text: string,
    color: string,
}

export const Btn = (props: Props) => {
    return (
        <button style={{"--color" : props.color} as React.CSSProperties} ><span>{props.text}</span><i></i></button>
    );
};

