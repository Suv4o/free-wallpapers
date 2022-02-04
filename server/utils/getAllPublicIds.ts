import { Entries } from '../../interfaces/server'
import { EXCLUDE_FILES } from '../constants/global'

export default function (entries: Entries[]): string[] {
    const allPublicIds: string[] = entries.map((entry) => {
        if (!EXCLUDE_FILES.includes(entry.name)) {
            const imageName = entry.name.slice(0, entry.name.length - entry.extension.length)
            return `free-wallpaper/small/${imageName}`
        }
        return ''
    })
    return allPublicIds
}
