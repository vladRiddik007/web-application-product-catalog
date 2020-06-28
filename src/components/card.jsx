import React from 'react'
import PropTypes from 'prop-types'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import photo from '../assets/images/img.jpg'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
}))

export const CardStyle = ({ product }) => {
  const classes = useStyles()
  return (
    <CardActionArea>
      <CardMedia className={classes.media} image={product.photo || photo} title={product.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {product.price}$
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.describe}
        </Typography>
      </CardContent>
    </CardActionArea>
  )
}

CardStyle.propTypes = {
  products: PropTypes.object,
}
