
/*
@author Akash Singh
@email contact@akashsingh.io
@web akashsingh.io
*/

import React from 'react';
import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};*/

function SimpleMediaCard(props) {
  let key = Math.random();
  console.log(props);
  return (
    <div key={key} className={props.card}>
      <Card id={props.card}>
        <CardMedia
          className={props.media.className}
          image={props.data.image_url}
          title={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.data.title}
          </Typography>
          <Typography component="p">
            {props.data.long_description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => {window.open(props.data.github_url)}}>
            View on Github
          </Button>
          {DisplayLogos(props.data.logos)}
        </CardActions>
      </Card>
    </div>
  );
}

function DisplayLogos(logos) {
  return (
    <div className="logo-collection">
      <span className="logo-wrapper"><i className={logos[0]}></i></span>
      <span className="logo-wrapper"><i className={logos[1]}></i></span>
      <span className="logo-wrapper"><i className={logos[2]}></i></span>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleMediaCard;