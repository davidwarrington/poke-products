import fs from 'fs-extra'
import PokeAPIHandler from './PokeAPIHandler'
import PokemonHandler from './PokemonHandler'

export default class PokedexHandler {
    constructor(pokedex) {
        this.name = pokedex.name
        this.pokemon = pokedex.pokemon_entries
    }

    async batchPokemonImport() {
        // const tasks = pokemon.map(entry => new PokemonHandler(entry.pokemon_species.name))
        const tasks = await this.pokemon.map(
            ({pokemon_species}) => new PokemonHandler(pokemon_species.name).fetch()
        )
        return Promise.all(tasks)
            .then(pokemon => fs.writeJSON('./store/pokedex.json', { name: this.name, pokemon }, { spaces: 4 }))

        // Promise.all(tasks)
        //     .then(responses => {
        //         const pokemon = responses.map(response => {
        //             return {
        //                 baseHappiness: response.base_happiness,
        //                 captureRate: response.capture_rate,
        //                 color: response.color.name,
        //                 eggGroups: response.egg_groups.map(eggGroup => eggGroup.name),
        //                 flavorText: response.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text,
        //                 genus: response.genera.find(genera => genera.language.name === 'en').genus,
        //                 generation: response.generation.name,
        //                 habitat: response.habitat.name,
        //                 hasGenderDifferences: response.has_gender_differences,
        //                 id: response.id,
        //                 isBaby: response.is_baby,
        //                 name: response.names.find(name => name.language.name === 'en').name,
        //                 shape: response.shape.name,
        //             }
        //         })
        //         return fs.writeJSON('./pokedex.json', { name: this.name, pokemon }, { spaces: 4 })
        //     })
    }
}
