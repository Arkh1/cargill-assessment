import React from 'react';
import { GridBody } from './gridBody.component';

export default {
    title: 'GridBody',
    component: GridBody,
};

export const Base = () => {
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

    return <GridBody data={data} />;
};