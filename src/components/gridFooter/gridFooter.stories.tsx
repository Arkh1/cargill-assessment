import React from 'react';
import { GridFooter } from './gridFooter.component';

export default {
    title: 'GridFooter',
    component: GridFooter,
};

export const Base = () => {
    const columnHeaders = [
        { displayName: 'Column1', field: 'Column1' },
        { displayName: 'Column2', field: 'Column2' },
        { displayName: 'Column3', field: 'Column3' }
    ];

    return <GridFooter columnHeaders={columnHeaders} />;
};