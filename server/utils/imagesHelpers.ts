import { Entries } from '../../interfaces/server'
import { EXCLUDE_FILES } from '../constants/global'

export function getAllPublicIds(entries: Entries[]): string[] {
    const allPublicIds: string[] = entries.map((entry) => {
        if (!EXCLUDE_FILES.includes(entry.name)) {
            const imageName = entry.name.slice(0, entry.name.length - entry.extension.length)
            return `free-wallpaper/small/${imageName}`
        }
        return ''
    })
    return allPublicIds
}

export function checkIfImageExist(pId: string, allImgsPid_url: [string, string][]): [boolean, string] {
    let idx = -1
    const isUploaded = allImgsPid_url.some((public_id, index) => {
        idx = index
        return public_id[0] === pId
    })
    return [isUploaded, allImgsPid_url[idx][1]]
}
