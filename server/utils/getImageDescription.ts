import { Extractor } from 'markdown-tables-to-json'
import { RepoData, ImageDescription } from '../../interfaces/server'
import { TABLE_OF_CONTENT } from '../constants/global'

export default function getImageDescription(data: RepoData, imageId: string) {
    const tableOfContentMd = data.data.user.repository.object.entries.filter((entry) => {
        return entry.name === TABLE_OF_CONTENT
    })[0].object.text

    const tableOfContentJSON: ImageDescription = Extractor.extractObject(
        tableOfContentMd ? tableOfContentMd : '',
        'rows',
        false
    )

    const urlRegex = /(\b(https?|http?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
    const urlSocial = tableOfContentJSON[imageId].Social.match(urlRegex)
    const urlWebsite = tableOfContentJSON[imageId].Website.match(urlRegex)

    tableOfContentJSON[imageId].Social = urlSocial ? urlSocial[0] : ''
    tableOfContentJSON[imageId].Website = urlWebsite ? urlWebsite[0] : ''

    return tableOfContentJSON[imageId]
}
