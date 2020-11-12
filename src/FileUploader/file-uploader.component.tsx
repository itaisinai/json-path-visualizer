import React, { FunctionComponent, useState } from 'react';
import Dropzone from "react-dropzone";
import ReactJson from 'react-json-view';

import { Container, DropzoneInput, ErrorMessage } from "./containers";

export const FileUploader: FunctionComponent = () => {
  const [error, setError] = useState<string>();
  const [json, setJson] = useState<string>();

  const onDrop = (acceptedFiles: any) => {
    if (acceptedFiles[0]) {
      const reader = new FileReader()

      reader.onabort = () => setError('file reading was aborted')
      reader.onerror = () => setError('file reading has failed')
      reader.onload = () => {
        setJson(reader.result as string);
      }
      reader.readAsText(acceptedFiles[0])

    }
  }

  return (
    <Container>
      <Dropzone onDrop={ onDrop } accept={ 'application/json' }>
        { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropzoneInput { ...getRootProps() }>
            <input { ...getInputProps() } />
            { isDragReject ? "File type not accepted, sorry!" : "Upload file or drop a json" }
          </DropzoneInput>
        ) }
      </Dropzone>
      <ErrorMessage>{ error }</ErrorMessage>
      { json && <ReactJson src={ JSON.parse(json) }/> }
    </Container>
  );
}
