import React, { Component } from "react";
import { PokemonsState, Pokemon, SelectedPokemon } from "../types";
import { fetchPokemons, getPokemonByUrl } from "../actions";
import { connect } from "react-redux";

interface Iprops {
  pokemons: Pokemon[];
  selectedPokemon: any;
  fetchPokemons(): void;
  getPokemonByUrl(url: string): void;
}

class PokemonsList extends Component<Iprops> {
  componentDidMount() {
    this.props.fetchPokemons();
  }
  pokemonOnClickEvent = (url: string): void => {
    this.props.getPokemonByUrl(url);
  };

  list(): JSX.Element {
    const { pokemons } = this.props;
    const str = (
      <div className="list">
        <h1>Pokemons list / {pokemons.length}</h1>
        <div className="content">
          {pokemons.map((pokemon, index) => {
            return (
              <button
                onClick={() => this.pokemonOnClickEvent(pokemon.url)}
                key={index}
              >
                {pokemon.name}
              </button>
            );
          })}
        </div>
      </div>
    );
    return str;
  }

  details(): JSX.Element {
    const {
      name,
      base_experience,
      height,
      weight,
      sprites: { front_default, front_shiny, back_default, back_shiny }
    } = this.props.selectedPokemon;

    const str = (
      <div className="details">
        <div className="name">{name}</div>
        <div className="base-experience">
          {base_experience} / base experience
        </div>
        <div className="height">{height} / height</div>
        <div className="weight">{weight} / weight</div>
        <ul className="images">
          <li>
            <img style={{ width: "120px" }} src={front_default} alt="" />
          </li>
          <li>
            <img style={{ width: "120px" }} src={front_shiny} alt="" />
          </li>
          <li>
            <img style={{ width: "120px" }} src={back_default} alt="" />
          </li>
          <li>
            <img style={{ width: "120px" }} src={back_shiny} alt="" />
          </li>
        </ul>
      </div>
    );
    return str;
  }

  render() {
    const { pokemons, selectedPokemon } = this.props;

    const list = pokemons.length > 0 ? this.list() : "Loading...";
    const details = selectedPokemon.name ? (
      this.details()
    ) : (
      <div>Select pokemon</div>
    );

    return (
      <div className="pokemons-box">
        {list}
        {details}
      </div>
    );
  }
}

const mapStateToProps = (
  state: any
): { pokemons: Pokemon[]; selectedPokemon: SelectedPokemon[] } => {
  return {
    pokemons: state.pokemons.pokemons,
    selectedPokemon: state.pokemons.selectedPokemon
  };
};

export default connect(
  mapStateToProps,
  { fetchPokemons, getPokemonByUrl }
)(PokemonsList);
