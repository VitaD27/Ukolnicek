import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebaseHelper from "./../../firebaseHelper";
import validationHelper from './../../helpers/validationHelper'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Ukolnicek
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export class Login extends Component {
  //const classes = useStyles();
  state = {
    email: '',
    password: '',
    errorEmail: false,
    errorEmailText: '',
    errorPassword: false,
    errorPasswordText: ''
  }

  validateBeforeSubmit = () => {
    var state = this.state;
    var prosloVse = true;
    return prosloVse;
  }

    submitLogin = () => {

      if (!this.validateBeforeSubmit()) {
        return;
      }

      new firebaseHelper().doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(result) {
        //Zapise do console usera
        console.log(result.user);
        alert('Přihlášeno!')
      }).catch((error)=> {
        console.log(error);
        alert(error);
      })
    }

    onHandleChange = (event) => {
      this.setState({ [event.target.name] : event.target.value })
    }

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
      <br /><br />
        <Typography component="h1" variant="h5">
          <center> Přihlásit se </center>
        </Typography>
        <br />
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.onHandleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Heslo"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.onHandleChange}
          />
          <br /><br />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Pamatovat si mě"
          />
          <br /><br />
          <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={this.submitLogin}
          >
            Přihlásit 
          </Button>
          <br /><br />
          <Grid container>
            <Grid item xs>
              <Link href="/password" variant="body2">
                Zapomenuté heslo?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Nemáte účet? Zaregistrujte se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
}