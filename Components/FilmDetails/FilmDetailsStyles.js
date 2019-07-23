import styled from 'styled-components';

export const FilmDetailsContainer = styled.View`
  background-color: #000;
  flex: 1;
`;
export const ScrollView = styled.ScrollView`
  flex: 1;
`;
export const DescriptionText = styled.Text`
  font-style: italic;
  color: #fff;
  margin: 5px;
  padding: 0px 5px;
  margin-bottom: 15px;
  text-align: justify;
`;
export const DefaultText = styled.Text`
  ${({big}) => big && `
    font-size: 30px;
    text-align: center;
    margin: 5px 0;
  `}}
  color: #fff;
  padding: 5px 10px;
  font-weight: 600;
`;
export const Image = styled.Image`
  width: 100%;
  height: 169px;
`;

export const FavoriteIcon = styled.Image`
  width:  40px;
  height: 40px;
`;

export const FavTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 10px;
`;

