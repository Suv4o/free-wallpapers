import { Extractor } from 'markdown-tables-to-json'
import { RepoData, ImageDescription, ImageDescriptionBody } from '../../interfaces/server'
import { TABLE_OF_CONTENT } from '../constants/global'

export default class ImageDes {
    markdown: string | null = null

    constructor(data: RepoData) {
        this.markdown = this.getStringFromMarkdown(data)
    }

    private getStringFromMarkdown(data: RepoData): string | null {
        return data.data.user.repository.object.entries.filter((entry) => {
            return entry.name === TABLE_OF_CONTENT
        })[0].object.text
    }

    public getImageDescription(imageId: string): ImageDescriptionBody {
        const tableJSON: ImageDescription = Extractor.extractObject(this.markdown ? this.markdown : '', 'rows', false)

        const urlRegex = /(\b(https?|http?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
        const urlSocial = tableJSON[imageId].Social.match(urlRegex)
        const urlWebsite = tableJSON[imageId].Website.match(urlRegex)

        tableJSON[imageId].Social = urlSocial ? urlSocial[0] : ''
        tableJSON[imageId].Website = urlWebsite ? urlWebsite[0] : ''

        return tableJSON[imageId]
    }
}
