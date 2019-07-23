import styled from 'styled-components';

export const ListView = styled.FlatList`
  padding: 10px;
`;

export const MovieItemView = styled.TouchableOpacity`
  margin: 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  flex: 1;
  width: 100%;
	height: 230px;
  overflow: hidden;
  position: relative;
  ${({empty}) => empty && 'opacity: 0'}
`;

export const Cover = styled.View`
	width: 100%;
  height: 70%;
	overflow: hidden;
`;

export const MovieItemTitle = styled.Text`
  font-size: 12px;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  font-weight: 600;
`;

export const FavoriteIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%
`;

export const MovieTitleContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EmptyDataText = styled.Text`
  font-size: 30px;
  color: #fff;
  margin-top: 100px;
  text-align: center;
  width: 100%;
`;