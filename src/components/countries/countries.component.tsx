import React, { useEffect, useState, useMemo, FunctionComponent } from 'react';
import axios from 'axios';
import { Grid } from '../grid/grid.component';
import { Country } from '../country/country.component';
import styles from './countries.module.scss';
import { Search } from '../search/search.component';
import { ICountry, ICountryApi, IGridHeader } from '../../types/index';
import * as ArrayUtils from '../../utils/array.util';

export interface CountriesProps {}

export const Countries: FunctionComponent<CountriesProps> = () => {
    const COUNTRIES_API_FIELDS: string[] = ['name', 'capital', 'currencies', 'languages', 'alpha2Code', 'alpha3Code', 'population', 'flag'];
    const COUNTRIES_SERVICE_URL: string = `https://restcountries.eu/rest/v2/all?fields=${COUNTRIES_API_FIELDS.join(';')}`;
    const columnHeaders: IGridHeader[] = [
        { displayName: 'Country', field: 'name' },
        { displayName: 'Code', field: 'alpha2Code' },
        { displayName: 'Language', field: 'language' },
        { displayName: 'Population', field: 'population' },
        { displayName: 'Capital', field: 'capital' },
        { displayName: 'Currency', field: 'currency' }
    ];

    // Change these to useReducer
    const [data, setData] = useState<any>({countries: [], isFetching: false});
    const [queryString, setQueryString] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<ICountry>({});

    const filteredData: ICountry[] = useMemo(() => ArrayUtils.getFilteredData(queryString, data.countries), [queryString, data]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setData({countries: data.countries, isFetching: true});
                const response = await axios.get(COUNTRIES_SERVICE_URL);

                const countries = response.data.map((country: ICountryApi) => ({
                    name: country.name,
                    alpha2Code: country.alpha2Code,
                    language: country.languages && country.languages[0] && country.languages[0].name,
                    population: country.population,
                    capital: country.capital,
                    currency: country.currencies && country.currencies[0] && country.currencies[0].name
                }));

                setData({countries, isFetching: false});
            } catch (e) {
                console.log(`Failed to fetch country list. Error: ${e}`);
                setData({countries: data.countries, isFetching: false});
            }
        };

        fetchCountries();
    }, [COUNTRIES_SERVICE_URL]);

    return (
        <div className={styles.countries}>
            <div>
                <Search searchCb={setQueryString} />
                <Grid columnHeaders={columnHeaders} data={filteredData} selectCb={setSelectedCountry} />
            </div>
            <Country {...selectedCountry} />
        </div>
    );
};