import useFetch from '@/services/useFetch'
import env from '@/utils/env'

export async function getAllRepoFiles() {
    const query = {
        query: `
          query {
            user(login: "${env().GITHUB_USERNAME}") {
              repository(name: "${env().GITHUB_REPOSITORY}") {
                object(expression: "HEAD:") {
                  ... on Tree {
                    entries {
                      name
                      extension
                      object {
                        ... on Blob {
                          byteSize
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    `
    }
    const { getQuery } = useFetch()
    const result = await getQuery(query)
    return result['data']
}
