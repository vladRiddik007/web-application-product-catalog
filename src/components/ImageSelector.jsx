import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import { ReactComponent as Camera } from '../assets/icons/camera.svg'

export const ImageSelector = ({ onImageChange }) => {
  const [file, setFile] = useState('')
  const refInput = useRef(null)

  const onClick = () => {
    if (refInput && refInput.current) {
      refInput.current.click()
    }
  }

  const readImage = (newFile) => {
    const reader = new FileReader()
    newFile && reader.readAsDataURL(newFile)
    return (reader.onload = () => setFile(String(reader.result)))
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    if (!files) return
    onImageChange(files[0])
    readImage(files[0])
  }

  return (
    <AddImageSection url={file}>
      {!!file || <FallbackTitle>signUp photo</FallbackTitle>}
      <input style={{ display: 'none' }} ref={refInput} type="file" onChange={handleFileChange} />
      <AddImageButton type="button" onClick={onClick}>
        <CameraIcon />
      </AddImageButton>
    </AddImageSection>
  )
}

export const CameraIcon = styled(Camera)`
  fill: #ffffff;
  &:hover {
    fill: #505050;
  }
`

export const AddImageSection = styled.div`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  background-image: url(${({ url }) => (url ? url : 'none')});
  background-color: #fff;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  flex-shrink: 0;
`

export const FallbackTitle = styled.div`
  height: calc(100% - 27px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddImageButton = styled.button`
  position: absolute;
  bottom: 0;
  background-color: #c4c4c4;
  min-height: 27px;
  border: none;
  width: 100%;
  outline: none;
  :hover {
    cursor: pointer;
  }
`
