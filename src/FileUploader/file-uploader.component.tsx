import React, { FunctionComponent, useState } from 'react';
import Dropzone from "react-dropzone";

import { Container, DropzoneInput, ErrorMessage } from "./containers";

interface IFileUploader {
  setJson: (json: string) => void;
}

export const FileUploader: FunctionComponent<IFileUploader> = ({ setJson }) => {
  const [error, setError] = useState<string>();

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
    </Container>
  );
}
