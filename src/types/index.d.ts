export interface IGridHeader {
    displayName: string,
    field: string
}

export interface ICountry {
    name?: string,
    alpha2Code?: string,
    capital?: string,
    language?: string,
    currency?: string,
    population?: string
}

export interface ICountryApi {
    name?: string,
    alpha2Code?: string,
    capital?: string,
    languages?: Object[],
    currencies?: Object[],
    population?: string
}
