export interface ICountries {
    name: string,
    alpha3Code: string,
    region: string,
    flags: {
        png: string
    }
}

export interface IDetail {
    name: {
        official: string
    }
    alpha3Code: string,
    region: string,
    flags: {
        png: string
    },
    capital: string,
    population: number,
    nativeName: string,
    borders: [],
    currencies: [{
        name: string,
        symbol: string,
    }],
    flag: string
}