import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class Message2 extends Component {
  //const classes = useStyles();

  render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
      <br /><br />
        <Typography component="h1" variant="h6">
          <strong> Vaše heslo bylo úspěšně změněno. </strong> 
        </Typography>
      </div>
      
    </Container>
  );
}
}