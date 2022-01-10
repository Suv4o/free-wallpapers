import { reactive, onMounted } from 'vue'
import { Env } from '@/interfaces/global'
export default function env() {
    const env = useRuntimeConfig()

    const config: Env = reactive({
        GITHUB_TOKEN: env.GITHUB_TOKEN,
        GITHUB_USERNAME: env.GITHUB_USERNAME,
        GITHUB_REPOSITORY: env.GITHUB_REPOSITORY,
        GITHUB_GRAPHQL_URL: env.GITHUB_GRAPHQL_URL
    })

    return config
}
