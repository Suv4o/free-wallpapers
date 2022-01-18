import axios from 'axios'
import { Env } from '../../interfaces/global'
import env from '../env'

export default function useFetch() {
    function getQuery(query: object, timeOut: number = 5000) {
        const config: Env = env()
        return axios({
            url: config['GITHUB_GRAPHQL_URL'],
            timeout: timeOut,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + config['GITHUB_TOKEN']
            },
            data: query
        })
    }

    return {
        getQuery
    }
}
