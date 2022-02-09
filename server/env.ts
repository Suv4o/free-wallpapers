import { Env } from '../interfaces/global'

export default function env() {
    const config: Readonly<Env> = {
        GITHUB_TOKEN: String(process.env.GITHUB_TOKEN),
        GITHUB_USERNAME: String(process.env.GITHUB_USERNAME),
        GITHUB_REPOSITORY: String(process.env.GITHUB_REPOSITORY),
        GITHUB_GRAPHQL_URL: String(process.env.GITHUB_GRAPHQL_URL),
        CLOUDINARY_CLOUD_NAME: String(process.env.CLOUDINARY_CLOUD_NAME),
        CLOUDINARY_API_KEY: String(process.env.CLOUDINARY_API_KEY),
        CLOUDINARY_API_SECRET: String(process.env.CLOUDINARY_API_SECRET),
        CLOUDINARY_FOLDER_NAME: String(process.env.CLOUDINARY_FOLDER_NAME)
    }

    return config
}
