import { RepoData } from '../../interfaces/server'
import getImageDescription from './getImageDescription'
import { EXCLUDE_FILES, GITHUB_IMAGE_URL } from '../constants/global'

export default function getImageData(data: RepoData, search: string): Array<object> {
    const result = data.data.user.repository.object.entries.map((entry) => {
        if (!EXCLUDE_FILES.includes(entry.name)) {
            const imageId = entry.name.split('-', 1)[0]
            return {
                ...entry,
                ...{ url: `${GITHUB_IMAGE_URL + entry.name}` },
                ...{ description: getImageDescription(data, imageId) }
            }
        }
        return entry
    })

    if (!search) {
        return result.filter((entry) => !EXCLUDE_FILES.includes(entry.name))
    }

    return [{ name: search }]
}
