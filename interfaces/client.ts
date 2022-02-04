import { Entries } from './server'

export interface ImageFromApi {
    collection: Array<Entries>
    range: string
    total: number
}
