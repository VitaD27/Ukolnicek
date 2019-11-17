import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class Form extends Component {
  //const classes = useStyles();

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
      <br /><br />
        <Typography component="h1" variant="h5">
          <center> Zadejte e-mailovou adresu </center>
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
            error={false}
          />
          
          <br /><br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.submitForm}
          >
            Odeslat 
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
}