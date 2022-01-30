import cloudinary from 'cloudinary'
import { Env } from '../../interfaces/global'
import { UploadImageOptions } from '../../interfaces/server'
import env from '../env'

export default class ImageCloudinary {
    config: Env = env()
    cloudinary = cloudinary

    constructor() {
        this.init()
    }

    public async upload(options: UploadImageOptions): Promise<object> {
        const { imageUrl, public_id, overwrite = false, transformation } = options

        const uploadResponse = await this.cloudinary.v2.uploader.upload(imageUrl, {
            public_id,
            overwrite,
            transformation
        })

        return uploadResponse
    }

    private init() {
        this.cloudinary.v2.config({
            cloud_name: this.config.CLOUDINARY_CLOUD_NAME,
            api_key: this.config.CLOUDINARY_API_KEY,
            api_secret: this.config.CLOUDINARY_API_SECRET
        })
    }
}
