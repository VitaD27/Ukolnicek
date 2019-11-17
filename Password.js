import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class Password extends Component {
  //const classes = useStyles();

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
            name="password"
            label="Heslo"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Potvrdit heslo"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <br /><br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.submitPassword}
          >
            Potvrdit 
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
}