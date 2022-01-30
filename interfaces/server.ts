export interface RepoData {
    data: {
        user: {
            repository: {
                object: {
                    entries: Array<Entries>
                }
            }
        }
    }
}
export interface Entries {
    name: string
    extension: string
    object: {
        byteSize: number
        text: string | null
    }
    smallUrl?: string
    description?: {
        Name: string
        Tags: string
        Location: string
        Author: string
        Social: string
        Website: string
    }
    search?: boolean
}

export interface ImageDescription {
    [key: string]: ImageDescriptionBody
}

export interface ImageDescriptionBody {
    Name: string
    Tags: string
    Location: string
    Author: string
    Social: string
    Website: string
}

export interface UploadImageOptions {
    imageUrl: string
    public_id: string
    overwrite?: boolean
    transformation: ImageTransformationOptions
}

export interface ImageTransformationOptions {
    width: number
    sharpen: number
    quality: number
}

export interface UploadedImage {
    asset_id?: string
    public_id?: string
    version?: number
    version_id?: string
    signature?: string
    width?: number
    height?: number
    format?: string
    resource_type?: string
    created_at?: string
    tags?: string[]
    bytes?: number
    type?: string
    etag?: string
    placeholder?: boolean
    url?: string
    secure_url?: string
    existing?: boolean
    api_key?: string
}
