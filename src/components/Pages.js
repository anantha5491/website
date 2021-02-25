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
  appBarShift: {
    width: `calc(100% - 160px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {

    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '160px',
     
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
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerFont: {
    fontSize: '2rem'
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
 
  backgroundSize: '15rem',
  [theme.breakpoints.down("xs")]: {
      backgroundSize: '8rem',
    },
    [theme.breakpoints.between('md','lg')]: {
      backgroundSize: '20rem',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundSize: '15rem',
    },
   
   
},
font: {
fontSize: '2rem',
"&:hover": {
  fontSize: '3.75rem',
},
[theme.breakpoints.down('sm')]: {
  fontSize: '1rem',
  "&:hover": {
    fontSize: '1.75rem',
  }
},
[theme.breakpoints.between('md','lg')]: {
  fontSize: '2.5rem',
  "&:hover": {
    fontSize: '4.75rem',
  }
},
[theme.breakpoints.up('lg')]: {
  fontSize: '2rem',
   "&:hover": {
    fontSize: '3.75rem',
  }
},
},
icon: {
  fontSize: '2rem'
},
aboutButton: {
  
  color: "#1cc4ce",
 
},
homeButton: {
  
  color: "#fafafa",
  
},
publicationsButton: {
  color: "#ff5b35",
  
},
talksButton: {
  color: '#38ad1c',

},
blogButton: {
  color: '#e2bf0b',
 
},
})














const container = window !== undefined ? () => window.document.body : undefined;


class Pages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      
    }
  };

  drawer = (
   
    <div>

      <Grid
        container
        direction="row"
        justify="flex-start                                                                                                                                         "
        alignItems="flex-start"
        spacing={1}
        className={this.props.classes.transparent}
      >
        <Grid item xs={12}>
        <Card className={this.props.classes.card}>
                                <CardMedia
                                     classes={{
                                       
                                        root: this.props.classes.media,
                                    }}
                                />
                            </Card>
        </Grid>
        <Grid item xs={12}>
          <List>
              
              <ListItem className={this.props.classes.homeButton} button key='Home'  onClick={() => {this.props.history.push('/')}}>
                <ListItemIcon><HomeIcon className={`${this.props.classes.homeButton} ${this.props.classes.font}`}/></ListItemIcon>
                <ListItemText  classes={{primary:this.props.classes.font}} primary='Home' />
              </ListItem>
              {this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1) !== 'about' &&
              <ListItem className={this.props.classes.aboutButton}  button key='About'  onClick={() => {this.props.history.push('/page/about')}}>
              <ListItemIcon><AssignmentIndOutlinedIcon className={`${this.props.classes.aboutButton} ${this.props.classes.font}`} /></ListItemIcon>
              <ListItemText classes={{primary:this.props.classes.font}} primary='About' />
            </ListItem> }
            {this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1) !== 'publications' &&
            <ListItem className={this.props.classes.publicationsButton} button key='Publications' onClick={() => {this.props.history.push('/page/publications')}}>
            <ListItemIcon><AssignmentOutlinedIcon className={`${this.props.classes.publicationsButton} ${this.props.classes.font}`}/></ListItemIcon>
            <ListItemText classes={{primary:this.props.classes.font}} primary='Publications' />
          </ListItem> }
          {this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1) !== 'talks' &&
          <ListItem className={this.props.classes.talksButton} button key='Talks' onClick={() => {this.props.history.push('/page/talks')}}>
          <ListItemIcon><RecordVoiceOverOutlinedIcon className={`${this.props.classes.talksButton} ${this.props.classes.fonr}`}/></ListItemIcon>
          <ListItemText classes={{primary:this.props.classes.font}} primary='Talks' />
        </ListItem> }
        {this.props.location.pathname.slice(this.props.location.pathname.lastIndexOf('/') + 1) !== 'blog' &&
        <ListItem className={this.props.classes.blogButton} button key='Blog' onClick={() => {this.props.history.push('/page/blog')}}>
          <ListItemIcon><MenuBookOutlinedIcon className={`${this.props.classes.blogButton} ${this.props.classes.font}`}/></ListItemIcon>
          <ListItemText classes={{primary:this.props.classes.font}} primary='Blog' />
        </ListItem>}
          
          </List>
        </Grid>


      </Grid>


     
    </div >
  );

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  };

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
            <Typography variant="h6" noWrap className={classes[header]}>
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
              {this.drawer}
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
              {this.drawer}
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