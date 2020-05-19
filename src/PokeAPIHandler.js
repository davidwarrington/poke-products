import axios from 'axios'

export default class PokeAPIHandler {
    static baseUrl = 'https://pokeapi.co/api/v2/'

    /**
     * @param {string} resource
     */
    static fetch(resource) {
        const resourceUrl = resource.includes(this.baseUrl) ? resource : `${this.baseUrl}${resource}`
        return axios.get(resourceUrl)
            .then(({data}) => data)
    }
}
