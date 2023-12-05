import axios from "axios";


export const instanse = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const countries = {
    getAllCountries() {
        return instanse.get('/all')
    },
    getByNameCountry(name: string) {
        return instanse.get('/name/' + name)
    },
    getRegionCountry(region: string) {
        return instanse.get('/region/' + region)
    },
    getCountryByCode(code: string) {
        return instanse.get('/alpha/' + code)
    }

}