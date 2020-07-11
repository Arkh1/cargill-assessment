import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '../grid/grid.component';
import { Country } from '../country/country.component';
import styles from './countries.module.scss';

export interface CountriesProps {}

export const Countries = () => {
    const COUNTRIES_SERVICE_URL = 'https://restcountries.eu/rest/v2/all';
    const [data, setData] = useState({countries: [], isFetching: false});
    const [selectedCountry, setSelectedCountry] = useState({});
    const columnHeaders = [
        { displayName: 'Country', field: 'name' },
        { displayName: 'Language', field: 'language' },
        { displayName: 'Population', field: 'population' },
        { displayName: 'Capital', field: 'capital' },
        { displayName: 'Currency', field: 'currency' }
    ];

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setData({countries: data.countries, isFetching: true});
                const response = await axios.get(COUNTRIES_SERVICE_URL);

                const countries = response.data.map((country: any) => ({
                    name: country.name,
                    language: country.languages[0].name,
                    population: country.population,
                    capital: country.capital,
                    currency: country.currencies[0].name
                }));

                setData({countries, isFetching: false});
            } catch (e) {
                console.log(`Failed to fetch country list. Error: ${e}`);
                setData({countries: data.countries, isFetching: false});
            }
        };

        fetchCountries();
    }, [data.countries]);

    return (
        <div className={styles.countries}>
            <Grid columnHeaders={columnHeaders} data={data.countries} selectCb={setSelectedCountry} />
            <Country {...selectedCountry} />
        </div>
    );
};