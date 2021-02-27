
import './App.css';
import React from 'react';

import { makeStyles } from '@material-ui/core';
import Image from '../src/images/board.jpeg';

import Container from '@material-ui/core/Container';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import './App.css';
import "typeface-kalam";
import image from "./images/black1.jpg"

const BREAKPOINTS = {

  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 2500,

};
const breakpointsFull = {
  breakpoints: createBreakpoints({
    values: BREAKPOINTS
  })
};


const theme = createMuiTheme({
  
  typography: {
    fontFamily: [
      'TuckOutline',
      'TuckRegular',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  breakpoints: {
    
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1300,
      xl: 2000,
      ipad: 1024
    }
  }
});

const styles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paperContainer: {
    backgroundImage: `url(${Image})`

  },

  paper1: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50vh',
    backgroundColor: ""
  },
  paper2: {

    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '25vh',
    backgroundColor: ""
  },
  pic: {
    height: '100px'
  },
  footer: {
    top: 'auto',
    bottom: 0,
    background: '#282c3494',
    minHeight: 36

  },
  containerWidth: {
    fixed:'false',
    maxWidth: 'md',
  },
  black: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '100%',
    minHeight: '100vh',
    width:'100%'
}

}));


// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = makeStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };
function App(props) {
  const classes = styles();
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App" className={classes.black}>
     
      
     
       <Router/> 

    
   

     {/* <AppBar position="fixed" color="primary" className={classes.footer}>

        <Toolbar className={classes.footer} >
          <Typography variant="body1" color="inherit">
           contact info
          </Typography>
        </Toolbar>

      </AppBar>  */}


    </div>
    </MuiThemeProvider>
  );
}

export default App;



