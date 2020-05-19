export default class ProductHandler {
    constructor(pokemon) {
        const defaults = {
            abilities: [],
            hiddenAbility: null,
            baseExperience: 0,
            baseStats: {
                speed: 0,
                'special-attack': 0,
                'special-defense': 0,
                defense: 0,
                attack: 0,
                hp: 0,
            },
            forms: [],
            height: 0,
            heldItems: [],
            moves: [],
            sprites: {
                back_default: null,
                back_female: null,
                back_shiny: null,
                back_shiny_female: null,
                front_default: null,
                front_female: null,
                front_shiny: null,
                front_shiny_female: null
            },
            types: [],
            weight: 0,
            baseHappiness: 0,
            captureRate: 0,
            color: null,
            eggGroups: [],
            flavorText: null,
            genus: null,
            generation: null,
            habitat: null,
            hasGenderDifferences: false,
            id: 0,
            isBaby: false,
            name: null,
            shape: null
        }
        this.pokemon = Object.assign({}, defaults, pokemon)
    }

    getTagsFromKey(key, replacementKey = null) {
        const tagKey = replacementKey || key

        if (Array.isArray(this.pokemon[key])) {
            return this.pokemon[key].map(value => `${tagKey}:${value}`)
        }

        return `${tagKey}:${this.pokemon[key]}`
    }

    toJSON() {
            console.log(this.pokemon)
        return {
            title: this.pokemon.name,
            description: this.pokemon.flavorText,
            vendor: 'kanto',
            type: 'Pokemon',
            tags: [
                ...this.getTagsFromKey('abilities', 'ability'),
                this.getTagsFromKey('hiddenAbility', 'hidden-ability'),
                this.getTagsFromKey('baseExperience', 'base-experience'),
                `speed:${this.pokemon.baseStats.speed}`,
                `special-defense:${this.pokemon.baseStats['special-defense']}`,
                `special-attack:${this.pokemon.baseStats['special-attack']}`,
                `defense:${this.pokemon.baseStats.defense}`,
                `attack:${this.pokemon.baseStats.attack}`,
                `hp:${this.pokemon.baseStats.hp}`,
                ...this.getTagsFromKey('forms'),
                this.getTagsFromKey('height'),
                ...this.getTagsFromKey('heldItems', 'held-item'),
                ...this.getTagsFromKey('moves', 'move'),
                ...this.getTagsFromKey('types', 'type'),
                this.getTagsFromKey('primaryType', 'primary-type'),
                this.getTagsFromKey('weight'),
                this.getTagsFromKey('baseHappiness', 'base-happiness'),
                this.getTagsFromKey('captureRate', 'capture-rate'),
                this.getTagsFromKey('color'),
                ...this.getTagsFromKey('eggGroups', 'egg-group'),
                this.getTagsFromKey('genus'),
                this.getTagsFromKey('generation'),
                this.getTagsFromKey('habitat'),
                this.getTagsFromKey('hasGenderDifferences', 'has-gender-differences'),
                this.getTagsFromKey('id'),
                this.getTagsFromKey('isBaby', 'is-baby'),
                this.getTagsFromKey('shape'),
                this.getTagsFromKey('evolutionChain', 'evolution-chain')
            ],
            options: [
                {
                    name: 'Gender',
                    values: this.pokemon.genderRate === -1 ? ['Default'] : ['Male', 'Female']
                },
                {
                    name: 'Shiny',
                    values: [true, false]
                },
                {
                    name: 'Form',
                    values: this.pokemon.forms.length === 1 ? ['Default'] : this.pokemon.forms
                }
            ]
        }
    }
}
