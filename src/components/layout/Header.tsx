import React from 'react';
import './Header.css'
import {Btn} from "../common/Btn";

export const Header = () => {
    return (
        <header>
            <h1><strong>Mega</strong> Ogłoszenia</h1>
            <Btn text={'Dodaj Ogłoszenie'} color='#00ab00'/>
            <div className="search">
                <input type="text"/>
                <Btn text={'szukaj'} color='blue'/>
            </div>
        </header>
    );
};

