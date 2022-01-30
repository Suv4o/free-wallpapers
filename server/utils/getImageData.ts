import { RepoData, Entries } from '../../interfaces/server'
import getImageDescription from './getImageDescription'
import { EXCLUDE_FILES, GITHUB_IMAGE_URL } from '../constants/global'
// import ImageCloudinary from './ImageCloudinary'

export default async function getImageData(data: RepoData, search: string): Promise<Entries[]> {
    // const cloudinaryImg = new ImageCloudinary()
    // const uploadedImage = await cloudinaryImg.upload({
    //     imageUrl: 'https://raw.githubusercontent.com/Suv4o/wallpaper-images/master/32-Image-Melbourne-Cityscape.jpg',
    //     public_id: 'small/aleks1',
    //     transformation: { width: 600, sharpen: 100, quality: 50 }
    // })

    // console.log(uploadedImage)

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
