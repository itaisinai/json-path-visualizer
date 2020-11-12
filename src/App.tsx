import ReactJson from "react-json-view";
import React, { useState } from 'react';

import { FileUploader } from './FileUploader'
import { SearchBox } from "./SearchBox";
import { Container, Jsons, Title } from "./Containers";

function App() {
  const [json, setJson] = useState<string>();
  const [searchJson, setSearchJson] = useState<string>();

  const onSearch = (response: any): void => {
    setSearchJson(JSON.stringify(response[0].value));
  }

  return (
    <Container>
      <Title>Json Path Visualizer</Title>
      <FileUploader setJson={ setJson }/>
      { json && <SearchBox json={ JSON.parse(json) } onSearch={ onSearch }/> }
      <Jsons>
        { json && <ReactJson src={ JSON.parse(json) }/> }
        { searchJson && <ReactJson src={ JSON.parse(searchJson) }/> }
      </Jsons>
    </Container>
  );
}

export default App;
