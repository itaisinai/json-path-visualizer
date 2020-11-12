import React from 'react';
import styled from 'styled-components';

import { FileUploader } from './FileUploader'
import { SearchBox } from "./SearchBox";

const Container = styled.div`
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const JsonViewer = styled.div`
`;

function App() {
  return (
    <Container>
      <Title>Json Path Visualizer</Title>
      <FileUploader />
      <SearchBox />
      <JsonViewer />
    </Container>
  );
}

export default App;
