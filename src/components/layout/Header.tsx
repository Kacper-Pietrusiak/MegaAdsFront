import React from 'react';
import './Header.css'
import {Btn} from "../common/Btn";

export const Header = () => {
    return (
        <header>
            <h1><strong>Mega</strong> Ogłoszenia</h1>
            <Btn text={'Dodaj Ogłoszenie'}/>
            <div className="search">
                <input type="text"/>
                <Btn text={'szukaj'}/>
            </div>
        </header>
    );
};

