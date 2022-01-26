import { Extractor } from 'markdown-tables-to-json'
import { RepoData } from '../../interfaces/server'

export default function getImageData(data: RepoData): Array<object> {
    const excludeFiles = ['README.md', 'TABLE-OF-CONTENTS.MD']
    const tableOfContentMd = data.data.user.repository.object.entries[66].object.text
    const tableOfContentJSON = Extractor.extractObject(tableOfContentMd, 'rows', false)

    const result = data.data.user.repository.object.entries
        .map((entry) => {
            if (!excludeFiles.includes(entry.name)) {
                const imageId = entry.name.split('-', 1)
                return { ...entry, ...{ description: tableOfContentJSON[imageId] } }
            }
            return entry
        })
        .filter((entry) => !excludeFiles.includes(entry.name))

    return result
}
