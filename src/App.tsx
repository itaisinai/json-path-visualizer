import ReactJson from "react-json-view";
import React, { useState } from 'react';

import { FileUploader } from './FileUploader'
import { SearchBox } from "./SearchBox";
import { Container, ErrorMessage, Jsons, Title } from "./Containers";

function App() {
  const [error, setError] = useState<string>();
  const [json, setJson] = useState<string>();
  const [searchJson, setSearchJson] = useState<string>();

  const onSearch = (response: any): void => {
    try {
      setSearchJson(JSON.stringify(response[0].value));
    } catch (e) {
      setError('no results');
    }
  }

  return (
    <Container>
      <Title>Json Path Visualizer</Title>
      <FileUploader setJson={ setJson }/>
      { json && <SearchBox json={ JSON.parse(json) } onSearch={ onSearch }/> }
      <ErrorMessage>{ error }</ErrorMessage>
      <Jsons>
        { json && <ReactJson src={ JSON.parse(json) }/> }
        { searchJson && <ReactJson src={ JSON.parse(searchJson) }/> }
      </Jsons>
    </Container>
  );
}

export default App;
