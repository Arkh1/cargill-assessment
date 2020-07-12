import React from 'react';
import { Search } from './search.component';

export default {
    title: 'Search',
    component: Search,
};

const searchCb = (query: string) => { alert(query); };

export const Base = () => <Search searchCb={searchCb} />;