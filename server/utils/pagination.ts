export function getPaginatedData(data: Array<object>, pageSize: number, pageNumber: number): Object {
    // Calculate the range of pages to return
    const start = pageSize * pageNumber + 1 - pageSize
    const end = pageSize * pageNumber

    const range = {
        start,
        end
    }

    if (start <= data.length && end > data.length) {
        range.end = data.length
    }

    if (start > data.length && end > data.length) {
        range.start = 0
        range.end = 0
    }

    const result = {
        collection: data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
        range: `${range.start}-${range.end}`,
        total: data.length
    }

    return result
}
