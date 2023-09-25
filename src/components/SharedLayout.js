import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";

export const SharedLayout = () => {
  return (
    <Container>
      <header>
      <nav>
          <StyledLink to="/" end>Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
          </header>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
          
          </Container>
  );
}; 

export const StyledLink = styled(NavLink)`
  color: black;
  margin-right:24px;

  &:last-child{
   margin-right:0; 
  }

  &.active {
    color: orange;
  }
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  font-size: 24px;
`;


