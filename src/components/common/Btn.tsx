import React from 'react';
import './Btn.css'
import {Link} from "react-router-dom";

interface Props{
    text: string,
    color: string,
    to?: string
}

export const Btn = (props: Props) => {


    return (
        props.to
            ? <Link className='btn' to={props.to}>{props.text}</Link>
            : <button style={{"--color" : props.color} as React.CSSProperties} ><span>{props.text}</span><i></i></button>
    );
};

