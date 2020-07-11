import React from 'react';
import { GridHeader } from './gridHeader.component';

export default {
    title: 'GridHeader',
    component: GridHeader,
};

const columnHeaders = ['Column1', 'Column2', 'Column3'];

export const Base = () => <GridHeader columnHeaders={columnHeaders} />;

export const WithCallback = () => {
    const callback = () => { alert('Callback fired') };
    return <GridHeader columnHeaders={columnHeaders} sortCb={callback} />;
};