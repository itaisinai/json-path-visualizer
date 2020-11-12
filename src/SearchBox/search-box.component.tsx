import React, { FunctionComponent, useState } from "react";
import styled from 'styled-components';
import jp from 'jsonpath';

const Container = styled.div`
  margin: 20px 0;
  
  > input {
    width: 300px;
  }
  > button {
    margin-right: 10px;
  }
`;

interface ISearchBox {
  json: object;
  onSearch: (response: object) => void;
}

export const SearchBox: FunctionComponent<ISearchBox> = ({json, onSearch}) => {
  const [value, setValue] = useState<string>();

  const searchJsonPath = () => {
    if (!value) {
      return;
    }
    const nodes = jp.nodes(json, value);
    onSearch(nodes);
  }

  return (<Container>
    <button onClick={ searchJsonPath }>Search</button>
    <input onChange={ (e) => setValue(e.target.value) }/>
  </Container>);
}