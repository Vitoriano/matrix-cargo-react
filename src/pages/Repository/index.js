import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container, Wrapper, Owner, Section } from './style';

function Repository() {
  const [repository, setRepository] = useState([]);

  const { repo } = useParams();

  const handleRepositoryList = async () => {
    const response = await api.get(`search/repositories?q=language/${repo}`);
    setRepository(response.data.items);
  };

  handleRepositoryList();

  return (
    <Wrapper>
      <Container>
        <Section>
          <h1>Repositorios: {repo}</h1>
          <Link to="/">Voltar as linguagens</Link>
        </Section>
      </Container>

      {repository &&
        repository.map((row) => (
          <Container>
            <Owner>
              <img src={row.owner.avatar_url} alt={row.owner.login} />
              <h1>{row.name}</h1>
              <p>{row.description}</p>
            </Owner>
          </Container>
        ))}
    </Wrapper>
  );
}

export default Repository;
