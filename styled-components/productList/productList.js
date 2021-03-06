import styled from 'styled-components';

export const MainNav = styled.nav`
  padding: 20px;
  top: 40px;
  background-color: white;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const SearchStyled = styled.div`
  position: relative;
  height: 40px;
  & #mainSearchWrapper {
    height: 40px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  & #searchButton {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
  }

  & #mainSearch {
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 0 45px 0 10px;
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    outline: none;
    color: #333;
  }

  &#mainSearch::placeholder {
    opacity: 0.5;
  }
`;

export const ProductListWrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: raw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductItemWrapper = styled.div`
  width: 48%;
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;

  & .productImage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
  }

  & .productImage img {
    max-width: 100%;
    max-height: 110px;
  }

  & .category {
    font-size: 12px;
    color: #999;
    font-weight: bold;
    margin: 5px 0;
  }

  & .title {
    line-height: 1.2em;
    margin: 5px 0;
    font-size: 14px;
    height: 33.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  & .price {
    font-size: 14px;
  }

  & .others {
    margin: 5px 0;
    display: flex;
    align-items: center;
  }

  & .others img {
    margin-right: 3px;
  }

  & .others span {
    font-size: 12px;
    color: #999;
    margin-right: 10px;
  }
`;
