import type { IncomingMessage, ServerResponse } from 'http'
import { getAllRepoFiles } from '../queries'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const data = await getAllRepoFiles()
    res.statusCode = 200
    res.end(JSON.stringify(data))
}
