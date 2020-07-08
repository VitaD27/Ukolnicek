import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar  from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    //display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <div className={classes.root}>
      <h2>Profil</h2>
      <Avatar className={classes.large}>VD</Avatar>
      <br />
      <p>Jméno a Přijmení:</p>
      <p>E-mail:</p>
      <p>Telefon:</p>
      <p>Stát:</p>
      <p>O vás:</p>
      <br />
      <br />
      <p>Weby/Projekty:</p>
    </div>
  );
}