/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ChangeEvent } from 'react';
import Dropzone, { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader';
import { Page } from './Page';
import 'react-dropzone-uploader/dist/styles.css';
import { uploadPicture } from '../data/PictureCardData';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components

export const UploadPage = () => {
  // State used to store the base64 converted image
  // const [imageBase64, setImageBase64] = React.useState('');
  const navigate = useNavigate();
  const [description, setDescription] = React.useState('');
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
    // console.log('description changed to: ' + description);
  };
  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    let reader = new FileReader();

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

    reader.onloadend = (readerEvt: any) => {
      console.log('onloadend');
      let pictureNumber = uploadPicture(readerEvt.target.result, description);
      navigate(`/martinsta-frontend/picture/${pictureNumber}`);
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
      <div>
        <form>
          <input
            type="text"
            placeholder="Say something about the picture"
            onChange={handleDescriptionChange}
            // value={comment}
            css={css`
              width: 100%;
              /* border: none; */
            `}
          ></input>
        </form>
      </div>
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
