import React from 'react';
import { Country } from './country.component';

export default {
    title: 'Country',
    component: Country,
};

export const Base = () => <Country name="Neverland" capital="blah" currency="usd" language="english" />;