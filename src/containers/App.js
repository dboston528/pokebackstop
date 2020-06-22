import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Pokemon from '../components/Pokemon';
import Button from '../components/Button';
import { fetchPokemon } from '../actions';
import { Charmander } from '../components/Charmander';
import Navbar from '../components/Navbar';

const StyledApp = styled.div`
  background-color: #ffd740;
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${'' /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchPokemon(1);
  }
  render() {
    const { name, height, sprites, base_experience, weight } = this.props.data;
    return (
      <StyledApp>
        <aside>
          <Button />
        </aside>
        <main>
          {this.props.isLoadingData ? (
            'Loading . . .'
          ) : (
            <Pokemon
              squirtleHeight={height}
              name={name}
              squirtleImage={sprites}
              squirtleBase={base_experience}
              squirtleWeight={weight}
            />
          )}
        </main>
        <main> </main>
      </StyledApp>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});

export default connect(mapStateToProps, {
  fetchPokemon,
})(App);
