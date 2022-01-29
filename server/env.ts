import { Env } from '../interfaces/global'

export default function env() {
    const config: Env = {
        GITHUB_TOKEN: String(process.env.GITHUB_TOKEN),
        GITHUB_USERNAME: String(process.env.GITHUB_USERNAME),
        GITHUB_REPOSITORY: String(process.env.GITHUB_REPOSITORY),
        GITHUB_GRAPHQL_URL: String(process.env.GITHUB_GRAPHQL_URL)
    }

    return config
}
