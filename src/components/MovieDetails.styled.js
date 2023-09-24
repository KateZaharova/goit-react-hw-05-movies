import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  gap: 40px;
`;

export const WrapperPhoto = styled.div`

`;

export const WrapperText = styled.div`

`;

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