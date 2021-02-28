import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Router1 from "../Router1";
import image from "../images/black.jpg"
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import anantha from "../images/anantha2.png";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';


const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: 'rgb(0 0 0 / 4%)'
  },
  // appBarShift: {
  //   width: `calc(100% - 160px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   [theme.breakpoints.down('md')]: {
  //     width: `calc(100% - 16px)`,
  //     marginLeft: '160px',
  //     transition: theme.transitions.create(['margin', 'width'], {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   }
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    overflow: 'hidden',
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundColor: 'rgb(0 0 0 / 60%)',
     
    },
    backgroundColor: 'transparent',
    color: '#fafafa'
  },
  content: {
    flexGrow: 1,

    
    height: '100vh',
    // marginLeft: theme.spacing(-10),
    // marginRight: theme.spacing(-10),
    color: '#fafafa'

  },
  paper1: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '40vh',
    backgroundColor: "transparent"
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerFont: {
    fontSize: '2.5rem',
    // [theme.breakpoints.down("xs")]: {
    //   fontSize: '1.5rem'
    // },
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  card:{
  
    boxShadow: 'none',
    backgroundColor: 'transparent'

}  ,
media: {
  height: '40vh',
  backgroundImage: `url(${anantha})`,
 
  backgroundSize: '100% 100%',
  // [theme.breakpoints.down("xs")]: {
  //     backgroundSize: '8rem',
  //   },
  //   [theme.breakpoints.between('md','lg')]: {
  //     backgroundSize: '20rem',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     backgroundSize: '15rem',
  //   },
   
   
},
font: {
fontSize: '2rem',
color: '#fafafa'

// [theme.breakpoints.down('sm')]: {
//   fontSize: '1rem',
//   "&:hover": {
//     fontSize: '1.25rem',
//   }
// },
// [theme.breakpoints.between('md','lg')]: {
//   fontSize: '2.5rem',
//   "&:hover": {
//     fontSize: '4.75rem',
//   }
// },
// [theme.breakpoints.up('lg')]: {
//   fontSize: '2rem',
//    "&:hover": {
//     fontSize: '3.75rem',
//   }
// },
},
icon: {
  fontSize: '2rem'
},
// aboutButton: {
  
//   color: "#1cc4ce",
 
// },
// homeButton: {
  
//   color: "#fafafa",
  
// },
// publicationsButton: {
//   color: "#fd8c71",
  
// },
// talksButton: {
//   color: '#38ad1c',

// },
// blogButton: {
//   color: '#e2bf0b',
 
// },
})














const container = window !== undefined ? () => window.document.body : undefined;


class Pages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      
    }
  };



  drawer = (props) => {
    const { classes, location, history } = props;
   return (
    <div>

      <Grid
        container
        direction="row"
        justify="flex-start                                                                                                                                         "
        alignItems="flex-start"
        spacing={1}
        className={classes.transparent}
      >
        <Grid item xs={12}>
        <Card className={classes.card}>
                                <CardMedia
                                     classes={{
                                       
                                        root: classes.media,
                                    }}
                                />
                            </Card>
        </Grid>
        <Grid item xs={12}>
          <List>
              
              <ListItem className={ classes.homeButton} button key='Home'  onClick={() => this.handleLinkClick('/')}>
                <ListItemIcon><HomeIcon className={`${ classes.homeButton} ${ classes.font}`}/></ListItemIcon>
                <ListItemText  classes={{primary: classes.font}} primary='Home' />
              </ListItem>
             
              <ListItem className={ classes.aboutButton}  button key='About'  onClick={() => this.handleLinkClick('about')}>
              <ListItemIcon><AssignmentIndOutlinedIcon className={`${ classes.aboutButton} ${ classes.font}`} /></ListItemIcon>
              <ListItemText classes={{primary: classes.font}} primary='About' />
            </ListItem> 
           
            <ListItem className={ classes.publicationsButton} button key='Publications' onClick={() => this.handleLinkClick('publications')}>
            <ListItemIcon><AssignmentOutlinedIcon className={`${ classes.publicationsButton} ${ classes.font}`}/></ListItemIcon>
            <ListItemText classes={{primary: classes.font}} primary='Publications' />
          </ListItem> 
          
          <ListItem className={ classes.talksButton} button key='Talks' onClick={() => this.handleLinkClick('talks')}>
          <ListItemIcon><RecordVoiceOverOutlinedIcon className={`${ classes.talksButton} ${ classes.font}`}/></ListItemIcon>
          <ListItemText classes={{primary: classes.font}} primary='Talks' />
        </ListItem> 
        
        <ListItem className={ classes.blogButton} button key='Blog' onClick={() => this.handleLinkClick('blog')}>
          <ListItemIcon><MenuBookOutlinedIcon className={`${ classes.blogButton} ${ classes.font}`}/></ListItemIcon>
          <ListItemText classes={{primary: classes.font}} primary='Blog' />
        </ListItem>
          
          </List>
        </Grid>


      </Grid>


     
    </div >
    )    };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  };

  handleLinkClick = (path) => {
    this.props.history.push(path)
    this.setState({ mobileOpen: false})

  }

  render() {
    const { classes, theme, location} = this.props;
    const { mobileOpen } = this.state;
    const header = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)+'Button';
    return (

      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed"  className={clsx(classes.appBar, {
          [classes.appBarShift]: mobileOpen,
        })}>
          <Toolbar classes={{root:classes.center}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={`${ classes[header]} ${ classes.headerFont}`}>
              {location.pathname.slice(location.pathname.lastIndexOf('/') + 1).toUpperCase()}
                </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {this.drawer(this.props)}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {this.drawer(this.props)}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Router1 />

        </main>
      </div>

    )
  }

}





export default withRouter((withStyles(styles,{withTheme : "true"})(Pages)))