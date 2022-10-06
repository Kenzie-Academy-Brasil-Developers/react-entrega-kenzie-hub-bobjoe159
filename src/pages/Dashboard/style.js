import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const StyledDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #343b41;
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    justify-content: space-between;
    max-width: 960px;
    padding: 30px 36px 30px 36px;
    margin: 0 auto;
    color: #fff;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #343b41;
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 12px;
    max-width: 900px;
    margin: 0 auto;
  }

  h2 {
    color: #ff577f;
  }

  button {
    background-color: #212529;
    color: #fff;
    padding: 16px 34px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 60px 0 60px 0;
  }

  @media (max-width: 350px) {
    padding: 60px 6px 60px 6px;
  }
`;

export const StyledError = styled.div`
  width: 100%;
  border-bottom: 1px solid #343b41;
  padding: 60px 6px 60px 6px;

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 960px;
    padding: 30px 36px 30px 36px;
    margin: 0 auto;
    color: #fff;
  }
`;
