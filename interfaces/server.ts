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
}

export interface ImageDescription {
    [key: string]: {
        Name: string
        Tags: string
        Location: string
        Author: string
        Social: string
        Website: string
    }
}
