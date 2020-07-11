import React from 'react';
import { Grid } from './grid.component';

export default {
    title: 'Grid',
    component: Grid,
};

export const Base = () => {
    const columnHeaders = ['Column1', 'Column2', 'Column3'];
    const data = [
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'},
        {column1: 'column1', column2: 'column2', column3: 'column3'}
    ];

    return <Grid data={data} columnHeaders={columnHeaders} />;
};