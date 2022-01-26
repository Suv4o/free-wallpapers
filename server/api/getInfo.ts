import type { IncomingMessage, ServerResponse } from 'http'
import { getAllRepoFiles } from '../queries'
import getImageData from '../utils/getImageData'
import { RepoData } from '../../interfaces/server'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const data: RepoData = await getAllRepoFiles()
    const result = getImageData(data)
    res.statusCode = 200
    res.end(JSON.stringify(result))
}
