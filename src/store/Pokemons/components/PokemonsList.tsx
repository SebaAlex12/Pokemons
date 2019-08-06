import React, { Component } from "react";
import { Pokemon } from "../types";
import { fetchPokemons, getPokemonByUrl } from "../actions";
import { connect } from "react-redux";
import { StoreState } from "../../index";

interface Iprops {
  pokemons: Pokemon[];
  fetchPokemons(): any;
  // getPokemonByUrl(): void;
}

class PokemonsList extends Component<Iprops> {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  pokemonOnClickEvent = (url: string): void => {
    console.log(url);
    // this.props.getPokemonByUrl(url);
  };

  render() {
    const { pokemons } = this.props;

    const content =
      pokemons.length > 0
        ? pokemons.map((pokemon, index) => {
            return (
              <button
                onClick={() => this.pokemonOnClickEvent(pokemon.url)}
                key={index}
              >
                {pokemon.name}
              </button>
            );
          })
        : "Loading...";

    return (
      <div>
        <h1>Pokemons list</h1>
        <div>{content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): { pokemons: Pokemon[] } => {
  return { pokemons: state.pokemons.pokemons };
};

export default connect(
  mapStateToProps,
  { fetchPokemons, getPokemonByUrl }
)(PokemonsList);
