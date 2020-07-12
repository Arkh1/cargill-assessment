import { SORT_DIRECTION } from '../consts/index';

function getFilteredData(queryString: string, data: any[]) {
    let filterableData: any[] = [...data];

    if (queryString !== '') {
        return filterableData.filter((item: any) => {
            return Object.keys(item).some((key: string) => {
                const dataField: string = item[key];
                return dataField && dataField.toString().toLowerCase().includes(queryString.toLowerCase());
            });
        });
    }

    return filterableData;
};

function getSortedData(sortConfig: any, data: any[]) {
    let sortableData = [...data];
    if (sortConfig.key !== '') {
        sortableData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === SORT_DIRECTION.ASCENDING ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === SORT_DIRECTION.ASCENDING ? 1 : -1;
            }
            return 0;
        });
    }
    return sortableData;
}

export {
    getFilteredData,
    getSortedData
}