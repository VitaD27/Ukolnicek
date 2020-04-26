import React, { Component } from 'react';
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
import { borderRight } from '@material-ui/system';
//import useStyles from '@material-ui/core/Usestyles';
import firebaseHelper from "./../../firebaseHelper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Úkolníček
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export class Register extends Component {
 // const classes = useStyles();

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordCheck: '',
    errorFirstName: false,
    errorFirstNameText: '',
    errorLastName: false,
    errorLastNameText: '',
    errorEmail: false,
    errorEmailText: '',
    errorPassword: false,
    errorPasswordText: '',
    errorPasswordCheck: false,
    errorPasswordCheckText: '',
    chackedA: false,
    chackedB: false
  }

    submitRegister = () => {
      debugger
      var ab = this.state;
      new firebaseHelper().doCreateUserWithEmailAndPassword(ab.firstName, ab.lastName, ab.email, ab.password, ab.passwordCheck)
      .then(function(result) {
        debugger
        // Zapis do konzole uzivatele
        console.log(result);
        alert('Zaregistrováno!')
      }).catch((error)=> {
        debugger
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

      <Grid container justify="center">
          <Typography component="h1" variant="h5">
             Registrace   
          </Typography>
      </Grid>

        <br /><br />

        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Jméno"
                autoFocus
                onChange={this.onHandleChange}
                helperText={this.state.errorFirstNameText}
                error={this.state.errorFirstName} 
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Přijmení"
                name="lastName"
                autoComplete="lname"
                onChange={this.onHandleChange}
                helperText={this.state.errorLastNameText}
                error={this.state.errorLastName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                onChange={this.onHandleChange}
                helperText={this.state.errorEmailText}
                error={this.state.errorEmail}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Heslo"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onHandleChange}
                helperText={this.state.errorPasswordText}
                error={this.state.errorPassword}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Heslo pro ověření"
                type="password"
                id="passwordCheck"
                autoComplete="current-password"
                onChange={this.onHandleChange}
                helperText={this.state.errorPasswordCheckText}
                error={this.state.errorPasswordCheck}
              />
            </Grid>

            <br /><br />

            <Grid item xs={11}>
              <FormControlLabel  
                control={<Checkbox checked={this.state.chackedA} onChange={this.onHandleChange} name="chackedA" value="allowExtraEmails" color="primary" />}
                label="Chci dostávat inspiraci, marketingové propagace a aktualizace prostřednictvím e-mailu."
              />
              <FormControlLabel  
                control={<Checkbox checked={this.state.chackedB} onChange={this.onHandleChange} name="chackedB" value="allowExtraEmails" color="primary" />}
                label="Souhlas se zpracování osobních údajů."
              />
            </Grid>

          </Grid>

          <br /><br />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.submitRegister}
          >
            Zaregistrovat
          </Button>

          <br /><br />
          
          <Grid container justify="center">
            <Grid item>
              <Link href="/" variant="body2">
                Máte již účet? Přihlásit se 
              </Link>
            </Grid>
          </Grid>

        </form>

      </div>

      <br />

      <Box mt={5}>
        <Copyright />
      </Box>

      <br /><br />

    </Container>

  );
 }
}