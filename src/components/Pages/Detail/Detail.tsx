import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';

import './Detail.css'
import { fetchCountryNeighbors, fetchDetailCountry } from '../../../store/CountriesSlice/ActionCreators/ActionCreators';

const Detail = () => {
    const { name } = useParams()
    const dispatch = useAppDispatch()
    const { detail } = useAppSelector(state => state.countries)

    
    useEffect(() => {
        //@ts-ignore
        if (name?.length > 4) {
            dispatch(fetchDetailCountry(name || ''))
        } else {
            dispatch(fetchCountryNeighbors(name || ''))
        }
    }, [name])


    const showCurrency = (curr: any) => {
        for (let i in curr) {
            return curr[i].name 
        }
    }

    return (
        <div className='container-detail'>
            <div className='card-img'>
                <img src={detail?.flags?.png} alt="" />
            </div>
            <div className='card-info'>

                <h1>Country:  {detail?.name?.official}</h1>
                <p>{detail?.alpha3Code}</p>
                <h2>Capital: {detail?.capital}</h2>
                <p>Region: {detail?.region}</p>
                <h3>Population: {detail?.population}</h3>
                <div className='currency'>
                    {
                        //@ts-ignore
                        showCurrency(detail?.currencies)
                    }
                </div>
            </div>

            <div className='borders'>
                <h2>Country neighbours : </h2>
                <div className='wrapper-borders'>
                    {
                        detail?.borders?.map((el, index) => (
                            <Link to={'/detail/' + el}>
                                <div className='card-borders' key={index}>{el}</div>

                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Detail;