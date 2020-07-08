import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar  from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = [
    'United Kingdom',
    'United States',
    'Czech Republic',
    'Slovakia',
    'Poland',
    'Germany',
    'Austria',
    'France',
    'Italy',
    'Spain',
    'Russian',
    'China',
    'Japan',
  ];
  
  function getStyles(country, personCountry, theme) {
    return {
      fontWeight:
        personCountry.indexOf(country) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  

export default function Edit() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  
  const theme = useTheme();
  const [personCountry, setPersonCountry] = React.useState([]);

  const handleChange = (event) => {
    setPersonCountry(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonCountry(value);
  };

  return (
    <div className={classes.root}>
      <h2>Profil</h2>
      <Avatar className={classes.large}>VD</Avatar>
      <Link href="#" onClick={preventDefault}>
          Přidat fotku / Změnit
      </Link>
      <br />
      <FormControlLabel  
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="Odebrat fotku z mého profilu."
      />
      <br />
      
      <h5>Jméno a Přijmení</h5>
      <TextField id="task-name" label="" variant="outlined" />
      <br />
      <h5>E-mail</h5>
      <TextField id="task-name" label="" variant="outlined" />
      <br />
      <h5>Telefon</h5>
      <TextField id="task-name" label="" variant="outlined" />
      
      <br />
      <FormControl className={clsx(classes.formControl, classes.noLabel)} variant="outlined">
        <Select
          multiple
          displayEmpty
          value={personCountry}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Stát</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Stát</em>
          </MenuItem>
          {countries.map((country) => (
            <MenuItem key={country} value={country} style={getStyles(country, personCountry, theme)}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <h5>O vás</h5>
      <TextField id="task-name" 
                 label="" 
                 multiline rows="15"
                 fullWidth
                 defaultValue="" 
                 variant="outlined" 
      />
      <br />
      <h5>Vaše weby/projekty</h5>
      <TextField id="task-name" label="" variant="outlined" /> 
        <br />
        <Button variant="contained">
            <Link href="#" onClick={preventDefault}>Nahrát soubor</Link>
        </Button>
            
        <Button variant="contained">
            <Link href="#" onClick={preventDefault}>Smazat soubor</Link>
        </Button>
        
      <br />
      <TextField id="task-name" label="" variant="outlined" /> 
        <br />
        <Button variant="contained">
            <Link href="#" onClick={preventDefault}>Nahrát soubor</Link>
        </Button>
            
        <Button variant="contained">
            <Link href="#" onClick={preventDefault}>Smazat soubor</Link>
        </Button>
       <br />
       <TextField id="task-name" label="" variant="outlined" /> 
        <br />
        <Button variant="contained">
            <Link href="#" onClick={preventDefault}>Nahrát soubor</Link>
        </Button>
            
        <Button variant="contained">
            <Link href="#" onClick={preventDefault}>Smazat soubor</Link>
        </Button>
      <br />
      <br />
      <br />
      <Button variant="contained">Uložit změny</Button>
    </div>
  );
}