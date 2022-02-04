import { RepoData, Entries } from '../../interfaces/server'
import ImageDes from './ImageDes'
import { EXCLUDE_FILES, GITHUB_IMAGE_URL } from '../constants/global'
import ImageCloudinary from './ImageCloudinary'
import getAllPublicIds from './getAllPublicIds'
import checkIfItemExist from './checkIfImgExists'

export default async function getImageData(data: RepoData, search: string): Promise<Entries[]> {
    const imgTableDescription = new ImageDes(data)
    const cloudinaryImg = new ImageCloudinary()

    try {
        const allPublicIds = getAllPublicIds(data.data.user.repository.object.entries)
        const allUploadedSmallImgs = await cloudinaryImg.getImages(allPublicIds)
        const allImgsPid_url: [string, string][] = allUploadedSmallImgs.resources.map((img) => {
            return img.public_id && img.url ? [img.public_id, img.url] : ['', '']
        })

        const result = await Promise.all(
            data.data.user.repository.object.entries.map(async (entry) => {
                if (!EXCLUDE_FILES.includes(entry.name)) {
                    const imageId = entry.name.split('-', 1)[0]
                    const imageName = entry.name.slice(0, entry.name.length - entry.extension.length)
                    const searchWords = search.toLowerCase().split(' ')
                    const description = imgTableDescription.getImageDescription(imageId)
                    let smallUrl = ''

                    const isImgUploaded = checkIfItemExist(`free-wallpaper/small/${imageName}`, allImgsPid_url)
                    if (isImgUploaded[0]) {
                        smallUrl = isImgUploaded[1]
                    } else {
                        const smallImage = await cloudinaryImg.upload({
                            imageUrl: `${GITHUB_IMAGE_URL + entry.name}`,
                            public_id: `free-wallpaper/small/${imageName}`,
                            transformation: { width: 600, sharpen: 100, quality: 50 }
                        })
                        smallUrl = smallImage.url ? smallImage.url : ''
                    }

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
                            ...{ smallUrl: smallUrl },
                            ...{ description },
                            ...{ search: true }
                        }
                    }

                    return {
                        ...entry,
                        ...{ smallUrl: smallUrl },
                        ...{ description },
                        ...{ search: false }
                    }
                }
                return entry
            })
        )

        return result.filter((entry) => !EXCLUDE_FILES.includes(entry.name)).filter((entry) => entry.search)
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message)
        }
        throw new Error('Error getting image data')
    }
}
