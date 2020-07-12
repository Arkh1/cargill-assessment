import React from 'react';
import { GridHeader } from './gridHeader.component';

export default {
    title: 'GridHeader',
    component: GridHeader,
};

const columnHeaders = [
    { displayName: 'Column1', field: 'Column1' },
    { displayName: 'Column2', field: 'Column2' },
    { displayName: 'Column3', field: 'Column3' }
];

export const Base = () => {
    const callback = () => { alert('Callback fired') };
    return <GridHeader columnHeaders={columnHeaders} sortCb={callback} />;
};