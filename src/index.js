import fs from 'fs-extra'
import RegionHandler from './RegionHandler'
import PokedexHandler from './PokedexHandler'
import ProductHandler from './ProductHandler';

(async () => {
    let pokedex;
    // const pokedexAlreadyExists = await fs.exists('./store/pokedex.json')
    // if (!pokedexAlreadyExists) {
        const regionHandler = new RegionHandler()
        await regionHandler.fetchRegionList()
        await new PokedexHandler(await regionHandler.fetchPokedex('kanto')).batchPokemonImport()
    // }

    pokedex = await fs.readJSON('./store/pokedex.json')
    fs.writeJSON('./store/products.json', pokedex.pokemon.map(mon => new ProductHandler(mon)), { spaces: 4 })
})()
