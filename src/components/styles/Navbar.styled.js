import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 200px;
  position: fixed;
  z-index: 10;
  background: ${({ theme }) => theme.colors.darkSecondary};
`;

export const StyledNavbar = styled.nav`
  height: 100%;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    li {
      margin-right: 60px;
    }
  }
`;
