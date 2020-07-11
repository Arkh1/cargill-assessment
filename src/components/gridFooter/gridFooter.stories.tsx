import React from 'react';
import { GridFooter } from './gridFooter.component';

export default {
    title: 'GridFooter',
    component: GridFooter,
};

export const Base = () => {
    const columnHeaders = ['Column1', 'Column2', 'Column3'];

    return <GridFooter columnHeaders={columnHeaders} />;
};