import { NavLink} from 'react-router-dom';
import styled from 'styled-components';


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
  font-size: 40px;
`;

/*
export const Layout = () => {
  return (
    <Wrapper>
      <header>
        <ul>
          <li>
            <StyledLink to="/create" end>
              Create quiz
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/quizzes" end>
              Quiz list
            </StyledLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </Wrapper>
  );
}; */