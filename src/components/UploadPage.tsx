/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import React from 'react';
import Dropzone, { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader';
import { Page } from './Page';
import 'react-dropzone-uploader/dist/styles.css';
import { uploadPicture } from '../data/PictureCardData';

// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components

export const UploadPage = () => {
  // State used to store the base64 converted image
  const [imageBase64, setImageBase64] = React.useState('');

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    let reader = new FileReader();

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

    reader.onloadend = (readerEvt: any) => {
      console.log('onloadend');
      let binaryString = readerEvt.target.result;
      setImageBase64(binaryString);
      uploadPicture(readerEvt.target.result);
      setImageBase64('');
    };

    reader.readAsDataURL(files[0].file);
    allFiles.forEach((f) => f.remove());
  };

  const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
    return (
      <div>
        {previews}

        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>

        {files.length > 0 && submitButton}
      </div>
    );
  };
  return (
    <Page title="Upload Picture">
      <Dropzone
        // getUploadParams={getUploadParams}
        LayoutComponent={Layout}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
        maxFiles={1}
        inputContent={(files, extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag Files')}
      />
    </Page>
  );
};
