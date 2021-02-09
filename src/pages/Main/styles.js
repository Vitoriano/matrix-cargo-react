import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 900px;
  background: #4dfe10;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #121212;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    color: #2fa800;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #121212;
  border: 0px;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    font-size: 15px;
    padding: 15 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    border-top: 1px solid #fff;
  }

  & + li {
    border-top: 5px solid #fff;
  }

  span {
    color: #fff;
  }

  a {
    color: #2fa800;
  }
`;
