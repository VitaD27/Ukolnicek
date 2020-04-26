import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar  from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
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
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

export default function Setting() {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
  
    return (
      <div className={classes.root}>
        <h2><u>Osobní údaje</u></h2>
        <h3>Změna uživatelského jména</h3>
        <TextField 
          id="outlined-basic" 
          label="Uživatelské jméno" 
          variant="outlined" 
        />
        <br />
        <h3>Změna hesla</h3>
        <TextField
          id="outlined-password-input"
          label="Heslo"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Znovu heslo"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br />
        <FormControlLabel  
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="Souhlas s změnou uložení."
        />
        <br />
        <Button variant="contained">Uložit</Button>
        <br />
        <br />
        <h3>Zrušení účtu</h3>
        <FormControlLabel  
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="Jsem si vědom/a, že zrušením účtu budou smazána všechna data, která jsou v mé datové schránce uložena."
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Heslo"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <br />
        <Button variant="contained">Zrušit účet</Button>
      </div>
    );
  }