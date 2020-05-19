/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Controllers/PokeAPIController.js":
/*!**********************************************!*\
  !*** ./src/Controllers/PokeAPIController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PokeAPIController; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass PokeAPIController {\n  /**\n   * @param {string} resource\n   */\n  static fetch(resource) {\n    const resourceUrl = resource.includes(this.baseUrl) ? resource : `${this.baseUrl}${resource}`;\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(resourceUrl).then(({\n      data\n    }) => data);\n  }\n\n}\n\n_defineProperty(PokeAPIController, \"baseUrl\", 'https://pokeapi.co/api/v2/');\n\n//# sourceURL=webpack:///./src/Controllers/PokeAPIController.js?");

/***/ }),

/***/ "./src/Controllers/PokedexController.js":
/*!**********************************************!*\
  !*** ./src/Controllers/PokedexController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PokedexController; });\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PokeAPIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokeAPIController */ \"./src/Controllers/PokeAPIController.js\");\n/* harmony import */ var _PokemonController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokemonController */ \"./src/Controllers/PokemonController.js\");\n\n\n\nclass PokedexController {\n  constructor(pokedex) {\n    this.name = pokedex.name;\n    this.pokemon = pokedex.pokemon_entries;\n  }\n\n  async batchPokemonImport() {\n    // const tasks = pokemon.map(entry => new PokemonController(entry.pokemon_species.name))\n    const tasks = await this.pokemon.map(({\n      pokemon_species\n    }) => new _PokemonController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pokemon_species.name).fetch());\n    return Promise.all(tasks).then(pokemon => fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.writeJSON('./store/pokedex.json', {\n      name: this.name,\n      pokemon\n    }, {\n      spaces: 4\n    })); // Promise.all(tasks)\n    //     .then(responses => {\n    //         const pokemon = responses.map(response => {\n    //             return {\n    //                 baseHappiness: response.base_happiness,\n    //                 captureRate: response.capture_rate,\n    //                 color: response.color.name,\n    //                 eggGroups: response.egg_groups.map(eggGroup => eggGroup.name),\n    //                 flavorText: response.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text,\n    //                 genus: response.genera.find(genera => genera.language.name === 'en').genus,\n    //                 generation: response.generation.name,\n    //                 habitat: response.habitat.name,\n    //                 hasGenderDifferences: response.has_gender_differences,\n    //                 id: response.id,\n    //                 isBaby: response.is_baby,\n    //                 name: response.names.find(name => name.language.name === 'en').name,\n    //                 shape: response.shape.name,\n    //             }\n    //         })\n    //         return fs.writeJSON('./pokedex.json', { name: this.name, pokemon }, { spaces: 4 })\n    //     })\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Controllers/PokedexController.js?");

/***/ }),

/***/ "./src/Controllers/PokemonController.js":
/*!**********************************************!*\
  !*** ./src/Controllers/PokemonController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PokemonController; });\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PokeAPIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokeAPIController */ \"./src/Controllers/PokeAPIController.js\");\n\n\nclass PokemonController {\n  constructor(name) {\n    this.name = name; // this.fetchPokemon()\n    // this.fetchSpecies()\n  }\n\n  async fetchPokemon() {\n    const pokemon = await _PokeAPIController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`pokemon/${this.name}`);\n    return {\n      abilities: pokemon.abilities.map(({\n        ability\n      }) => ability.name),\n      hiddenAbility: (pokemon.abilities.find(ability => ability.is_hidden) || {\n        ability: {\n          name: null\n        }\n      }).ability.name,\n      baseExperience: pokemon.base_experience,\n      baseStats: Object.fromEntries(pokemon.stats.map(stat => [stat.stat.name, stat.base_stat])),\n      forms: pokemon.forms.map(form => form.name),\n      height: pokemon.height,\n      heldItems: pokemon.held_items.map(({\n        item\n      }) => item.name),\n      moves: pokemon.moves.map(({\n        move\n      }) => move.name),\n      primaryType: pokemon.types.find(type => type.slot === 1).type.name,\n      sprites: pokemon.sprites,\n      types: pokemon.types.sort((a, b) => a.slot - b.slot).map(type => type.type.name),\n      weight: pokemon.weight\n    };\n  }\n\n  async fetchSpecies() {\n    const species = await _PokeAPIController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`pokemon-species/${this.name}`);\n\n    if (species.evolution_chain) {\n      const evolutionChain = await _PokeAPIController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(species.evolution_chain.url);\n      species.evolution_chain = evolutionChain.chain.species.name;\n    }\n\n    return {\n      baseHappiness: species.base_happiness,\n      captureRate: species.capture_rate,\n      color: species.color.name,\n      eggGroups: species.egg_groups.map(eggGroup => eggGroup.name),\n      evolutionChain: species.evolution_chain,\n      flavorText: species.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text,\n      genus: species.genera.find(genera => genera.language.name === 'en').genus,\n      generation: species.generation.name.replace('generation-', ''),\n      habitat: species.habitat.name,\n      hasGenderDifferences: species.has_gender_differences,\n      id: species.id,\n      isBaby: species.is_baby,\n      name: species.names.find(name => name.language.name === 'en').name,\n      shape: species.shape.name\n    };\n  }\n\n  async fetch() {\n    const pokemon = await this.fetchPokemon();\n    const species = await this.fetchSpecies();\n    return { ...pokemon,\n      ...species\n    };\n  }\n\n  toJSON() {\n    return {\n      abilities: this.abilities,\n      baseHappiness: this.baseHappiness,\n      baseExperience: this.baseExperience,\n      baseStats: this.baseStats,\n      captureRate: this.captureRate,\n      color: this.color,\n      eggGroups: this.eggGroups,\n      evolutionChain: this.evolutionChain,\n      flavorText: this.flavorText,\n      forms: this.forms,\n      genus: this.genus,\n      generation: this.generation,\n      habitat: this.habitat,\n      hasGenderDifferences: this.hasGenderDifferences,\n      height: this.height,\n      heldItems: this.heldItems,\n      hiddenAbility: this.hiddenAbility,\n      id: this.id,\n      isBaby: this.isBaby,\n      moves: this.moves,\n      name: this.name,\n      shape: this.shape,\n      sprites: this.sprites,\n      types: this.types,\n      weight: this.weight\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Controllers/PokemonController.js?");

/***/ }),

/***/ "./src/Controllers/ProductController.js":
/*!**********************************************!*\
  !*** ./src/Controllers/ProductController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductController; });\nclass ProductController {\n  constructor(pokemon) {\n    const defaults = {\n      abilities: [],\n      hiddenAbility: null,\n      baseExperience: 0,\n      baseStats: {\n        speed: 0,\n        'special-attack': 0,\n        'special-defense': 0,\n        defense: 0,\n        attack: 0,\n        hp: 0\n      },\n      forms: [],\n      height: 0,\n      heldItems: [],\n      moves: [],\n      sprites: {\n        back_default: null,\n        back_female: null,\n        back_shiny: null,\n        back_shiny_female: null,\n        front_default: null,\n        front_female: null,\n        front_shiny: null,\n        front_shiny_female: null\n      },\n      types: [],\n      weight: 0,\n      baseHappiness: 0,\n      captureRate: 0,\n      color: null,\n      eggGroups: [],\n      flavorText: null,\n      genus: null,\n      generation: null,\n      habitat: null,\n      hasGenderDifferences: false,\n      id: 0,\n      isBaby: false,\n      name: null,\n      shape: null\n    };\n    this.pokemon = Object.assign({}, defaults, pokemon);\n  }\n\n  getTagsFromKey(key, replacementKey = null) {\n    const tagKey = replacementKey || key;\n\n    if (Array.isArray(this.pokemon[key])) {\n      return this.pokemon[key].map(value => `${tagKey}:${value}`);\n    }\n\n    return `${tagKey}:${this.pokemon[key]}`;\n  }\n\n  toJSON() {\n    console.log(this.pokemon);\n    return {\n      title: this.pokemon.name,\n      description: this.pokemon.flavorText,\n      vendor: 'kanto',\n      type: 'Pokemon',\n      tags: [...this.getTagsFromKey('abilities', 'ability'), this.getTagsFromKey('hiddenAbility', 'hidden-ability'), this.getTagsFromKey('baseExperience', 'base-experience'), `speed:${this.pokemon.baseStats.speed}`, `special-defense:${this.pokemon.baseStats['special-defense']}`, `special-attack:${this.pokemon.baseStats['special-attack']}`, `defense:${this.pokemon.baseStats.defense}`, `attack:${this.pokemon.baseStats.attack}`, `hp:${this.pokemon.baseStats.hp}`, ...this.getTagsFromKey('forms'), this.getTagsFromKey('height'), ...this.getTagsFromKey('heldItems', 'held-item'), ...this.getTagsFromKey('moves', 'move'), ...this.getTagsFromKey('types', 'type'), this.getTagsFromKey('primaryType', 'primary-type'), this.getTagsFromKey('weight'), this.getTagsFromKey('baseHappiness', 'base-happiness'), this.getTagsFromKey('captureRate', 'capture-rate'), this.getTagsFromKey('color'), ...this.getTagsFromKey('eggGroups', 'egg-group'), this.getTagsFromKey('genus'), this.getTagsFromKey('generation'), this.getTagsFromKey('habitat'), this.getTagsFromKey('hasGenderDifferences', 'has-gender-differences'), this.getTagsFromKey('id'), this.getTagsFromKey('isBaby', 'is-baby'), this.getTagsFromKey('shape'), this.getTagsFromKey('evolutionChain', 'evolution-chain')],\n      options: [{\n        name: 'Gender',\n        values: this.pokemon.genderRate === -1 ? ['Default'] : ['Male', 'Female']\n      }, {\n        name: 'Shiny',\n        values: [true, false]\n      }, {\n        name: 'Form',\n        values: this.pokemon.forms.length === 1 ? ['Default'] : this.pokemon.forms\n      }]\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Controllers/ProductController.js?");

/***/ }),

/***/ "./src/Controllers/RegionController.js":
/*!*********************************************!*\
  !*** ./src/Controllers/RegionController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegionController; });\n/* harmony import */ var _PokeAPIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokeAPIController */ \"./src/Controllers/PokeAPIController.js\");\n\nclass RegionController {\n  constructor() {\n    this.regions = {};\n    this.fetchRegionList();\n  }\n\n  fetchRegionList() {\n    return _PokeAPIController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch('region').then(response => {\n      const regions = Object.fromEntries(response.results.map(region => [region.name, region.url]));\n      this.regions = regions;\n    }).then(() => this.regions);\n  }\n\n  fetchRegion(region) {\n    return _PokeAPIController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(this.regions[region]);\n  }\n\n  fetchPokedex(region) {\n    return this.fetchRegion(region).then(response => {\n      const pokedex = response.pokedexes.find(pokedex => pokedex.name === region);\n      return _PokeAPIController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(pokedex.url);\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Controllers/RegionController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Controllers_RegionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/RegionController */ \"./src/Controllers/RegionController.js\");\n/* harmony import */ var _Controllers_PokedexController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controllers/PokedexController */ \"./src/Controllers/PokedexController.js\");\n/* harmony import */ var _Controllers_ProductController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controllers/ProductController */ \"./src/Controllers/ProductController.js\");\n\n\n\n\n\n(async () => {\n  let pokedex;\n  const pokedexAlreadyExists = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.exists('./store/pokedex.json');\n\n  if (!pokedexAlreadyExists) {\n    const regionController = new _Controllers_RegionController__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    await regionController.fetchRegionList();\n    await new _Controllers_PokedexController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](await regionController.fetchPokedex('kanto')).batchPokemonImport();\n  }\n\n  pokedex = await fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.readJSON('./store/pokedex.json');\n  fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.writeJSON('./store/products.json', pokedex.pokemon.map(mon => new _Controllers_ProductController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](mon)), {\n    spaces: 4\n  });\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs-extra\");\n\n//# sourceURL=webpack:///external_%22fs-extra%22?");

/***/ })

/******/ });