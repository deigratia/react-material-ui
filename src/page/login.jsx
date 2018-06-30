import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import orange from '@material-ui/core/colors/orange';
import Button from '@material-ui/core/Button';

import '../App.css';
import Logo from '../Logo/logo'

const styles = theme => ({
  cssLabel: {
      '&$cssFocused': {
        color:orange[500],
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor:orange[500],
      },
    },
    button:{
      color:'white',
      
    }
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div className='formlogin'>
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Logo />
      <br />
    </div>
    <div className='textlogin'>
    <FormControl className={classes.margin}>
      <InputLabel
        FormLabelClasses={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}

        htmlFor="custom-css-input"
        style ={{color:'white'}}

      >
        USERNAME
      </InputLabel>
      <Input
        classes={{
          underline: classes.cssUnderline,
        }}
        id="custom-css-input"
      />
    </FormControl>
    </div>
    <br />
    <div className='textlogin'>
    <FormControl className={classes.margin}>
      <InputLabel
        FormLabelClasses={{
          root: classes.cssLabel,
          focused: classes.cssFocused,
        }}
        type='password'
        htmlFor="custom-css-input"
        style ={{color:'white'}}

      >
        PASSWORD
      </InputLabel>
      <Input
        classes={{
          underline: classes.cssUnderline,
        }}
        type='password'
        id="custom-css-input"
      />
    </FormControl>
    </div>
    <br />
    <div className='button'>
      <Button  variant="outlined" className={classes.button}>
        Login
      </Button>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    </div>

  );
}


InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);
