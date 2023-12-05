import { ICountries, IDetail } from "../../models/models";

export interface IState {
    loading: 'idle' | 'loading' | 'finished' | 'rejected',
    error: null | string,
    countries: ICountries[],
    detail?: IDetail,
}