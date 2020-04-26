import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import firebaseHelper from "./../../firebaseHelper";

export class Password extends Component {
  //const classes = useStyles();

  state = {
    email: '',
    errorEmail: false,
    errorEmailText: ''
  }

  restorePassword = () => {
    debugger
    var state = this.state
    new firebaseHelper().sendSignInLinkToEmail(state.email)
    .then(function(result) {
      //Zapise do console usera
      console.log(result.user);
      alert('Heslo se obnovuje')
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
        {<Typography component="h1" variant="h5">
          <center> Obnovení hesla </center>
        </Typography>}
        <br />
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Zadejte vaši emailovou adresu"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.onHandleChange}
            helperText={this.state.errorEmailText}
            error={this.state.errorEmail}
          />
          <br /><br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.restorePassword}
          >
            Potvrdit 
          </Button>
          <br /><br />
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                {"Zpět k přihlášení"}
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
      
    </Container>
  );
}
}