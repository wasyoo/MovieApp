import styled from 'styled-components';

export const SearchView = styled.View`
  align-items: center;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "rgba(128, 128, 128, 0.7)",
})`
    height: 40px;
    width: 95%;
    border-bottom-width: 1px;
    border-bottom-color: #ffe6e6;
    align-items: center;
    color: #fff;
    padding-left: 10px;
`;

export const SearchButton = styled.Button`
    color: #fff;
    background-color: red;
    height: 40px;
`;


