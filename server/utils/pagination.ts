export function getPaginatedData(data: Array<object>, pageSize: number, pageNumber: number): Array<object> {
    return data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}
