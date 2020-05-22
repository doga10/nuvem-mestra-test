export interface CovidInfo {
    city: string
    cityIbgeCode: number
    confirmed: number
    confirmedPer100kInhabitants: number
    date: string
    deathRate: number
    deaths: number
    estimatedPopulation2019: number
    isLast: boolean
    orderForPlace: number
    placeType: string
    state: string
}

export interface Covid {
    count: number
    next?: any
    previous?: any
    results?: CovidInfo[]
}
