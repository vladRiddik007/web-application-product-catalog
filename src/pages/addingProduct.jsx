import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postProduct } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { ImageSelector } from '../components/ImageSelector'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
      width: '30ch',
    },
  },
}))

const AddingProduct = ({ postProduct }) => {
  const [photo, setPhoto] = useState(null)
  let history = useHistory()
  const classes = useStyles()

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = handleSubmit(({ name, describe, price }) => {
    postProduct({ id: Math.random(), name, describe, photo, price })
  })

  return (
    <div>
      <FormStyled onSubmit={onSubmit} className={classes.root}>
        <ImageSelector onImageChange={setPhoto} />
        {/* <TextField id="standard-basic" label="Name product" name="name" ref={register({ required: true })} /> */}

        <label>
          name:
          <input placeholder="Enter text" name="name" ref={register({ required: true })} />
        </label>
        {errors.name && 'Your input is required'}
        <label>
          describe:
          <input placeholder="Enter text" name="describe" ref={register({ minLength: 5 })} />
        </label>
        {errors.describe && 'Your input required to be more than 5'}
        <label>
          price:
          <input placeholder="Enter text" name="price" type="number" ref={register({ required: 'This is required' })} />
        </label>
        {errors.price?.message}
        <input type="submit" />
      </FormStyled>
      <Button variant="outlined" color="primary" onClick={() => history.goBack()}>
        Go back
      </Button>
    </div>
  )
}

const mapDispatchToProps = {
  postProduct,
}

export default connect(null, mapDispatchToProps)(AddingProduct)

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -10px;
  margin: 0;
  padding-left: 20px;
  font-weight: normal;
  color: red;
  font-size: 9px;
  line-height: 10px;
`

//add photo
//https://medium.com/@ibamibrhm/custom-upload-button-image-preview-and-image-upload-with-react-hooks-a7977618ee8c
