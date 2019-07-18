import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Movie from './Movie';
import Category from './Category';

const HomeContainer = styled.View`
  background-color: #000;
  flex: 1;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Search />
      <Category />
      <Movie />
    </HomeContainer>
  )
}

export default Home;