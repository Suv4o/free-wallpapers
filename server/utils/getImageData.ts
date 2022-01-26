import { Extractor } from 'markdown-tables-to-json'
import { RepoData, ImageDescription } from '../../interfaces/server'

export default function getImageData(data: RepoData): Array<object> {
    // Blacklist of file we want to ignore.
    const excludeFiles = ['README.md', 'TABLE-OF-CONTENTS.MD']

    const tableOfContentMd = data.data.user.repository.object.entries.filter((entry) => {
        return entry.name === 'TABLE-OF-CONTENTS.MD'
    })[0].object.text
    const tableOfContentJSON: ImageDescription = Extractor.extractObject(tableOfContentMd, 'rows', false)

    const result = data.data.user.repository.object.entries
        .map((entry) => {
            if (!excludeFiles.includes(entry.name)) {
                const imageId = entry.name.split('-', 1)[0]
                return { ...entry, ...{ description: tableOfContentJSON[imageId] } }
            }
            return entry
        })
        .filter((entry) => !excludeFiles.includes(entry.name))

    return result
}
