export interface Env {
    GITHUB_TOKEN: string
    GITHUB_USERNAME: string
    GITHUB_REPOSITORY: string
    GITHUB_GRAPHQL_URL: string
    CLOUDINARY_CLOUD_NAME: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string
    CLOUDINARY_FOLDER_NAME: string
}
export interface LooselyTypeObject {
    [key: string]: any
}
