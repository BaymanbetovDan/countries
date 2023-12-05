import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks';
import { fetchByNameCountry, fetchCountriesAll, fetchFilterRegion } from '../../store/CountriesSlice/ActionCreators/ActionCreators';


const Header = () => {
    const [value, setValue] = useState('')
    const [filter, setFilter] = useState('All')
    const dispatch = useAppDispatch()
    const hadnleSubmit =  (e: React.FormEvent) => {
        e.preventDefault()
        if (value !== '') {
            try {
                dispatch(fetchByNameCountry(value))
                setValue('')
            } catch (error) {
                console.error('Error', error)
            }
        }
    }
    const handleFilter = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFilter = e.target.value
        setFilter(selectedFilter)
        try {
            if (selectedFilter === 'All') {
                await dispatch(fetchCountriesAll())
            } else {
                await dispatch(fetchFilterRegion(selectedFilter))
            }
        } catch (error) {
            console.error('Error', error)
        }
    }
    return (
        <header className='header_container'>
            <div className='header_wrapper'>
                <div className='header_links'>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className='header_input'>
                    <form onSubmit={hadnleSubmit}>
                        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Search country' />
                        <button type='submit'>Search</button>
                    </form>
                </div>
                <div className='header-select'>
                    <select value={filter} onChange={handleFilter} className="select">
                        <option value="All">All</option>
                        <option value="Americas">America</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>

        </header>
    );
};

export default Header;