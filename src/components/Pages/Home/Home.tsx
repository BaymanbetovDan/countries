import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import CardAll from '../../CardAll/CardAll';
import './Home.css'
import { fetchCountriesAll } from '../../../store/CountriesSlice/ActionCreators/ActionCreators';

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { countries } = useAppSelector(state => state.countries)
    React.useEffect(() => {
        dispatch(fetchCountriesAll())
    }, [])
    console.log(countries);

    return (
        <div className='home_container'>
            <div className='home_flex'>
                {
                    countries.map((el, index) => (
                        <CardAll key={index} {...el} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;