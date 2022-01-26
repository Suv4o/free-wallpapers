import { Extractor } from 'markdown-tables-to-json'
import { RepoData, ImageDescription } from '../../interfaces/server'
import { TABLE_OF_CONTENT } from '../constants/global'

export default function getImageDescription(data: RepoData, imageId: string) {
    const tableOfContentMd = data.data.user.repository.object.entries.filter((entry) => {
        return entry.name === TABLE_OF_CONTENT
    })[0].object.text
    const tableOfContentJSON: ImageDescription = Extractor.extractObject(tableOfContentMd, 'rows', false)

    const urlRegex = /(\b(https?|http?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
    const urlSocial = tableOfContentJSON[imageId].Social.match(urlRegex)[0]
    const urlWebsite = tableOfContentJSON[imageId].Website.match(urlRegex)[0]

    tableOfContentJSON[imageId].Social = urlSocial
    tableOfContentJSON[imageId].Website = urlWebsite

    return tableOfContentJSON[imageId]
}
