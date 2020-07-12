import * as ArrayUtils from './array.util';
import { SORT_DIRECTION } from '../consts/index';

describe('ArrayUtils', () => {
    const mockItem1 = { exampleString: 'stuff', exampleNumber: 123 };
    const mockItem2 = { exampleString: 'more stuff', exampleNumber: 456 };
    const mockItem3 = { exampleString: 'and more stuff', exampleNumber: 789 };
    const mockData = [ mockItem1, mockItem2, mockItem3 ];

    beforeEach(() => {
        expect.assertions(1);
    });

    describe('getFilteredData', () => {
        it('should filter on strings', () => {
            const result = ArrayUtils.getFilteredData('and', mockData);
            expect(result).toEqual([ mockItem3 ]);
        });

        it('should filter on numbers', () => {
            const result = ArrayUtils.getFilteredData('456', mockData);
            expect(result).toEqual([ mockItem2 ]);
        });

        it('should filter partial matches', () => {
            const result = ArrayUtils.getFilteredData('mor', mockData);
            expect(result).toEqual([ mockItem2, mockItem3 ]);
        });

        it('should return the original data if the search string is empty', () => {
            const result = ArrayUtils.getFilteredData('', mockData);
            expect(result).toEqual(mockData);
        });
    });

    describe('getSortedData', () => {
        it('should sort on strings descending', () => {
            const mockSortConfigString = { key: 'exampleString', direction: SORT_DIRECTION.DESCENDING };
            const result = ArrayUtils.getSortedData(mockSortConfigString, mockData);
            expect(result).toEqual([mockItem1, mockItem2, mockItem3]);
        });

        it('should sort on strings ascending', () => {
            const mockSortConfigString = { key: 'exampleString', direction: SORT_DIRECTION.ASCENDING };
            const result = ArrayUtils.getSortedData(mockSortConfigString, mockData);
            expect(result).toEqual([mockItem3, mockItem2, mockItem1, ]);
        });

        it('should sort on numbers', () => {
            const mockSortConfigNumber = { key: 'exampleNumber', direction: SORT_DIRECTION.ASCENDING };
            const result = ArrayUtils.getSortedData(mockSortConfigNumber, mockData);
            expect(result).toEqual([mockItem1, mockItem2, mockItem3]);
        });

        it('should return an empty array if it is passed an empty array', () => {
            const mockSortConfigDescending = { key: 'exampleString', direction: SORT_DIRECTION.DESCENDING };
            const result = ArrayUtils.getSortedData(mockSortConfigDescending, []);
            expect(result).toEqual([]);
        });

        it('should return the original array if it is passed an empty string to sort on', () => {
            const mockSortConfigDescending = { key: '', direction: SORT_DIRECTION.DESCENDING };
            const result = ArrayUtils.getSortedData(mockSortConfigDescending, mockData);
            expect(result).toEqual(mockData);
        });

        it('should return the original array if it is passed an unknown string to sort on', () => {
            const mockSortConfigDescending = { key: 'sdfgsdfg', direction: SORT_DIRECTION.DESCENDING };
            const result = ArrayUtils.getSortedData(mockSortConfigDescending, mockData);
            expect(result).toEqual(mockData);
        });
    });
});