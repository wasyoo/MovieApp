import styled from 'styled-components';

export const MovieItemView = styled.TouchableOpacity`
  margin: 5px;
  border: 1px solid #fff;
  border-radius: 10px;
  flex: 1;
  width: 100%;
	height: 230px;
  overflow: hidden;
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

export const Image = styled.Image`
  width: 100%;
  height: 100%
`;




