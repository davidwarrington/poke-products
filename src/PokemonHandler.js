import fs from 'fs-extra'
import PokeAPIHandler from './PokeAPIHandler'

export default class PokemonHandler {
    constructor(name) {
        this.name = name
        // this.fetchPokemon()
        // this.fetchSpecies()
    }

    async fetchPokemon() {
        const pokemon = await PokeAPIHandler.fetch(`pokemon/${this.name}`)
        return {
            abilities: pokemon.abilities.map(({ability}) => ability.name),
            hiddenAbility: (pokemon.abilities.find(ability => ability.is_hidden) || {ability: {name: null}}).ability.name,
            baseExperience: pokemon.base_experience,
            baseStats: Object.fromEntries(
                pokemon.stats.map(stat => [stat.stat.name, stat.base_stat])
            ),
            forms: pokemon.forms.map(form => form.name),
            height: pokemon.height,
            heldItems: pokemon.held_items.map(({item}) => item.name),
            moves: pokemon.moves.map(({move}) => move.name),
            primaryType: pokemon.types.find(type => type.slot === 1).type.name,
            sprites: pokemon.sprites,
            types: pokemon.types
                .sort((a, b) => a.slot - b.slot)
                .map(type => type.type.name),
            weight: pokemon.weight
        }
    }

    async fetchSpecies() {
        const species = await PokeAPIHandler.fetch(`pokemon-species/${this.name}`)
        if (species.evolution_chain) {
            const evolutionChain = await PokeAPIHandler.fetch(species.evolution_chain.url)
            species.evolution_chain = evolutionChain.chain.species.name
        }
        return {
            baseHappiness: species.base_happiness,
            captureRate: species.capture_rate,
            color: species.color.name,
            eggGroups: species.egg_groups.map(eggGroup => eggGroup.name),
            evolutionChain: species.evolution_chain,
            flavorText: species.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text,
            genus: species.genera.find(genera => genera.language.name === 'en').genus,
            generation: species.generation.name.replace('generation-', ''),
            habitat: species.habitat.name,
            hasGenderDifferences: species.has_gender_differences,
            id: species.id,
            isBaby: species.is_baby,
            name: species.names.find(name => name.language.name === 'en').name,
            shape: species.shape.name
        }
    }

    async fetch() {
        const pokemon = await this.fetchPokemon()
        const species = await this.fetchSpecies()
        return {...pokemon, ...species}
    }

    toJSON() {
        return {
            abilities: this.abilities,
            baseHappiness: this.baseHappiness,
            baseExperience: this.baseExperience,
            baseStats: this.baseStats,
            captureRate: this.captureRate,
            color: this.color,
            eggGroups: this.eggGroups,
            evolutionChain: this.evolutionChain,
            flavorText: this.flavorText,
            forms: this.forms,
            genus: this.genus,
            generation: this.generation,
            habitat: this.habitat,
            hasGenderDifferences: this.hasGenderDifferences,
            height: this.height,
            heldItems: this.heldItems,
            hiddenAbility: this.hiddenAbility,
            id: this.id,
            isBaby: this.isBaby,
            moves: this.moves,
            name: this.name,
            shape: this.shape,
            sprites: this.sprites,
            types: this.types,
            weight: this.weight,
        }
    }
}
