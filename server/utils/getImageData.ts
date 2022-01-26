import { RepoData } from '../../interfaces/server'
import getImageDescription from './getImageDescription'
import { EXCLUDE_FILES } from '../constants/global'

export default function getImageData(data: RepoData): Array<object> {
    const result = data.data.user.repository.object.entries
        .map((entry) => {
            if (!EXCLUDE_FILES.includes(entry.name)) {
                const imageId = entry.name.split('-', 1)[0]

                return { ...entry, ...{ description: getImageDescription(data, imageId) } }
            }
            return entry
        })
        .filter((entry) => !EXCLUDE_FILES.includes(entry.name))

    return result
}
