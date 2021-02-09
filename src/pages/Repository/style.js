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
    color: #fff;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #fff;
    line-height: 1.4;
    text-align: center;
    max-width: 400;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    color: #2fa800;
  }
`;
