import React, { useEffect, useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Wrapper, List } from './styles';

function Main() {
  const [repository, setRepository] = useState([]);

  const handleLanguagens = async () => {
    const response = await api.get('search/repositories?q=language');
    setRepository(response.data.items);
  };

  useEffect(() => {
    handleLanguagens();
  }, []);

  return (
    <Wrapper>
      <Container>
        <h1>
          <FaGithubAlt color="#fff" /> Linguagens
        </h1>
        <List>
          {repository &&
            repository.map((row) => (
              <li key={row.id}>
                <span>{row.language}</span>
                <Link to={`/repository/${row.language}`}>Ver Repositorios</Link>
              </li>
            ))}
        </List>
      </Container>
    </Wrapper>
  );
}

export default Main;
