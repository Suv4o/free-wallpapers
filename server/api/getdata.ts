import type { IncomingMessage, ServerResponse } from 'http'
import { getAllRepoFiles } from '../queries'
import getImageData from '../utils/getImageData'
import { RepoData } from '../../interfaces/server'
import { getPaginatedData } from '../utils/pagination'
import { useQuery } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const { size, page } = await useQuery(req)

    try {
        const data: RepoData = await getAllRepoFiles()
        const result = getPaginatedData(getImageData(data), size ? Number(size) : 10, page ? Number(page) : 1)
        res.statusCode = 200
        res.end(JSON.stringify(result))
    } catch (err) {
        res.statusCode = 500
        res.end(JSON.stringify({ error: err.message }))
    }
}
