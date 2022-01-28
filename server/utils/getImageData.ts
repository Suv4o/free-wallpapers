import { RepoData } from '../../interfaces/server'
import getImageDescription from './getImageDescription'
import { EXCLUDE_FILES, GITHUB_IMAGE_URL } from '../constants/global'

export default function getImageData(data: RepoData, search: string): Array<object> {
    const result = data.data.user.repository.object.entries.map((entry) => {
        if (!EXCLUDE_FILES.includes(entry.name)) {
            const imageId = entry.name.split('-', 1)[0]
            const searchWords = search.toLowerCase().split(' ')
            const description = getImageDescription(data, imageId)

            const nameWords = description.Name.toLowerCase().split(' ')
            const tagsWords = description.Tags.toLowerCase().split(' ')
            const locationWords = description.Location.toLowerCase().split(' ')
            const authorWords = description.Author.toLowerCase().split(' ')

            if (
                !search ||
                searchWords.some((n) => nameWords.includes(n)) ||
                searchWords.some((t) => tagsWords.includes(t)) ||
                searchWords.some((l) => locationWords.includes(l)) ||
                searchWords.some((a) => authorWords.includes(a))
            ) {
                return {
                    ...entry,
                    ...{ url: `${GITHUB_IMAGE_URL + entry.name}` },
                    ...{ description },
                    ...{ search: true }
                }
            }

            return {
                ...entry,
                ...{ url: `${GITHUB_IMAGE_URL + entry.name}` },
                ...{ description },
                ...{ search: false }
            }
        }
        return entry
    })

    return result.filter((entry) => !EXCLUDE_FILES.includes(entry.name)).filter((entry) => entry.search)
}
