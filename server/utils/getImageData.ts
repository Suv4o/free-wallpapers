import { RepoData, Entries, UploadedImage } from '../../interfaces/server'
import ImageDes from './ImageDes'
import { EXCLUDE_FILES, GITHUB_IMAGE_URL } from '../constants/global'
import ImageCloudinary from './ImageCloudinary'

export default async function getImageData(data: RepoData, search: string): Promise<Entries[]> {
    const imgTableDescription = new ImageDes(data)
    const cloudinaryImg = new ImageCloudinary()

    try {
        const result = await Promise.all(
            data.data.user.repository.object.entries.map(async (entry) => {
                if (!EXCLUDE_FILES.includes(entry.name)) {
                    const imageId = entry.name.split('-', 1)[0]
                    const imageName = entry.name.slice(0, entry.name.length - entry.extension.length)
                    const searchWords = search.toLowerCase().split(' ')
                    const description = imgTableDescription.getImageDescription(imageId)
                    const uploadedSmallImg = await cloudinaryImg.upload({
                        imageUrl: `${GITHUB_IMAGE_URL + entry.name}`,
                        public_id: `free-wallpaper/small/${imageName}`,
                        transformation: { width: 600, sharpen: 100, quality: 50 }
                    })

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
                            ...{ smallUrl: uploadedSmallImg.url },
                            ...{ description },
                            ...{ search: true }
                        }
                    }

                    return {
                        ...entry,
                        ...{ smallUrl: uploadedSmallImg.url },
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
