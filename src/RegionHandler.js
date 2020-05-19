import PokeAPIHandler from './PokeAPIHandler'

export default class RegionHandler {
    constructor() {
        this.regions = {};
        this.fetchRegionList();
    }

    fetchRegionList() {
        return PokeAPIHandler.fetch('region')
            .then(response => {
                const regions = Object.fromEntries(
                    response.results.map(region => [region.name, region.url])
                )
                this.regions = regions
            })
            .then(() => this.regions)
    }
    fetchRegion(region) {
        return PokeAPIHandler.fetch(this.regions[region])
    }

    fetchPokedex(region) {
        return this.fetchRegion(region)
            .then(response => {
                const pokedex = response.pokedexes.find(pokedex => pokedex.name === region)
                return PokeAPIHandler.fetch(pokedex.url)
            })
    }
}
