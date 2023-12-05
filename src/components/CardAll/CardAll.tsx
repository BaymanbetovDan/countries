import React from 'react';
import './CardAll.css'
import { Link } from 'react-router-dom';

//@ts-ignore
const CardAll : React.FC = ({ cca3, flags, name, region }) => {
    return (
        <div className='container_card'>
            <div className='card'>
                <Link to={'/detail/' + name?.common}>
                    <img src={flags.png} alt="" />
                </Link>
                <div className='card_info'>
                    <h2>{name?.common}</h2>
                    <p>{cca3}</p>
                    <p>{region}</p>

                </div>
            </div>
        </div>
    );
};

export default CardAll;