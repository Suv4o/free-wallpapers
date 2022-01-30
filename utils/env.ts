import { reactive } from 'vue'
import { Env } from '@/interfaces/global'
export default function env() {
    const env = useRuntimeConfig()

    const config: Env = reactive({
        GITHUB_TOKEN: env.GITHUB_TOKEN,
        GITHUB_USERNAME: env.GITHUB_USERNAME,
        GITHUB_REPOSITORY: env.GITHUB_REPOSITORY,
        GITHUB_GRAPHQL_URL: env.GITHUB_GRAPHQL_URL,
        CLOUDINARY_CLOUD_NAME: env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: env.CLOUDINARY_API_SECRET
    })

    return config
}
