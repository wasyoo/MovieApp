import styled from 'styled-components';

export const CategoryView = styled.View`
  margin: 5px 10px;
`;


export const TextItem = styled.Text`
  font-size: 30px; 
  font-weight: bold;
  padding: 10px;
  ${({selected}) => selected ? 'color: red' : 'color: gray'}
`;

export const CategoryScrollView = styled.ScrollView`
  
`;