import { SET_POKEMON, API, FETCH_POKEMON } from './types';

export function fetchPokemon(id) {
  return apiAction({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    onSuccess: setPokemon,
    onFailure: () => console.log('Error occured loading pokemon'),
    label: FETCH_POKEMON,
  });
}

function setPokemon(data) {
  return {
    type: SET_POKEMON,
    payload: data,
  };
}

function apiAction({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
}
