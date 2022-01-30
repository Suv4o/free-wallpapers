import cloudinary from 'cloudinary'
import { Env } from '../../interfaces/global'
import { UploadImageOptions, UploadedImage } from '../../interfaces/server'
import env from '../env'

export default class ImageCloudinary {
    config: Env = env()
    cloudinary = cloudinary

    constructor() {
        this.init()
    }

    public async upload(options: UploadImageOptions): Promise<object> {
        const { imageUrl, public_id, overwrite = false, transformation } = options

        try {
            const uploadResponse: UploadedImage = await this.cloudinary.v2.uploader.upload(imageUrl, {
                public_id,
                overwrite,
                transformation
            })
            return uploadResponse
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message)
            }
            throw new Error('Error uploading image')
        }
    }

    private init() {
        this.cloudinary.v2.config({
            cloud_name: this.config.CLOUDINARY_CLOUD_NAME,
            api_key: this.config.CLOUDINARY_API_KEY,
            api_secret: this.config.CLOUDINARY_API_SECRET
        })
    }
}
