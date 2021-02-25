
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import image from "../images/black.jpg"
import anantha from "../images/ananthaColor.png"
import person from "../images/person.png"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {withRouter} from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';
import NotesIcon from '@material-ui/icons/Notes';
import Button from '@material-ui/core/Button';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';




const styles = theme => ({
  
  
    media: {
        height: '50vh',
        backgroundImage: `url(${anantha})`,
       
        backgroundSize: '35rem',
        [theme.breakpoints.down("xs")]: {
            backgroundSize: '15rem',
          },
          [theme.breakpoints.between('md','lg')]: {
            backgroundSize: '50rem',
          },
          [theme.breakpoints.up('lg')]: {
            backgroundSize: '32rem',
          },
         
          paddingTop:'10px'
         
    },
    paper1: {
        textAlign: 'center',
        color: '#fafafa',
        height: '50vh',
        backgroundColor: "transparent",
        boxShadow: 'none',
        marginTop: '46px'
    },
   
    black: {
        backgroundImage: `url(${image})`,
    },
    image: {
        backgroundImage: `url(${anantha})`
    },
    button: {
          
        margin: theme.spacing(1),
        backgroundColor: "transparent",
        color: "#fafafa",
        height: '20vh',
        width: '100%',
        boxShadow: 'none',
        fontSize: '2.875rem',
        justifyContent: 'start',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem',
          },
        "&:hover": {
            boxShadow: 'none',
            backgroundColor: "transparent",
            color: "#fafafa",
            fontSize: '3.75rem',
            [theme.breakpoints.down("xs")]: {
                fontSize: '1.25rem',
              },
           
           
          }
      },
      label1: {
         
          paddingBottom:'100px',
        // [theme.breakpoints.between('md','lg')]: {
        //     paddingBottom: '275px',
        //   },
        //   [theme.breakpoints.up('lg')]: {
        //     paddingBottom: '0px',
        //   },

      },
      label2: {
         
        paddingBottom:'200px',
    //   [theme.breakpoints.between('md','lg')]: {
    //       paddingBottom: '275px',
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //       paddingBottom: '0px',
    //     },

    },
    
    aboutButton: {
        
        color: "#1cc4ce",
        "&:hover": {
            color: "#1cc4ce",
        }
    },
    publicationsButton: {
        color: "#ff5b35",
        "&:hover": {
            color: "#ff5b35",
        }
    },
    talksButton: {
        color: '#38ad1c',
      
        "&:hover": {
            color: "#38ad1c",
        }
    },
    blogButton: {
        color: '#e2bf0b',
       
        "&:hover": {
            color: "#e2bf0b",
        }
    },
  font:{
    fontFamily: 'TuckRegular',
    textAlign: 'justify',
    fontSize: '1.75rem',
    [theme.breakpoints.down("xs")]: {
        fontSize: '1rem'
      },
    paddingTop: '10px',
    [theme.breakpoints.between('md', 'lg')]: {
        paddingTop: '130px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: '20px',
      },

  },
  card:{
      paddingTop:'20',
      boxShadow: 'none',
      backgroundColor: 'transparent'

  }     ,
    
    
      iconSize: {
        '& > *:first-child': {
            fontSize: 70,
          },
          [theme.breakpoints.down("xs")]: {
            '& > *:first-child': {
                fontSize: 50,
              },
          }
      },
      fontColor1: {
          color: "#38ad1c"
      },
      fontColor2: {
        color: "#e2bf0b"
      },
      fontColor3: {
        color: "#ff5b35"
      },
      fontColor4: {
        color: "#1cc4ce"
      }
     
})

class Home extends Component {

    render() {
        const { classes, history } = this.props;
        return (
          
                <Container fixed="false" maxWidth="md">
                    <Grid
                        container
                        direction="row"
                        justify="flex-start                                                                                                                                       "
                        alignItems="flex-start"
                        alignContent="flex-start"
                        spacing={0}

                    >
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardMedia
                                     classes={{
                                       
                                        root: classes.media,
                                    }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper1}>
                           
                                  <Typography variant="h5" className={classes.font}>  
                                  <div>
                                   I am <span className={classes.fontColor1}>Anantha Padmanabha</span>, currently doing my Post-Doc at <span ><a href="https://www.irif.fr/en/index" target="_blank" className={classes.fontColor3}>IRIF, Paris</a></span> working on 
                                   database theory under  <span ><a href="https://www.irif.fr/~cristina/" target="_blank" className={classes.fontColor2}>Prof. Cristina Sirangelo</a></span>. 
                                   </div> 
                                   <div> 
                                   
                                   I did my PhD at  <span ><a href="https://www.imsc.res.in/" target="_blank" className={classes.fontColor3}>IMSc, Chennai</a></span> on Term Modal Logic under  <span ><a href="https://www.imsc.res.in/r_ramanujam" target="_blank" className={classes.fontColor2}>Prof. R. Ramanujam.</a> </span> 
                                    Here is my <span ><a href="https://www.imsc.res.in/xmlui/bitstream/handle/123456789/452/HBNI%20Th164.pdf?sequence=1&isAllowed=y" target="_blank" className={classes.fontColor4}>
                                        thesis</a></span> and its <span className={classes.fontColor4}><a link="">summary</a></span>.
                                   </div> 
                                   <div> 

                                   I am broadly interested in logic, abstraction, puzzle solving and theoretical computer science.
                                   </div> 
                                </Typography>
                                                                          
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                color="#fafafa"
                                backgroundColor="transparent"
                                classes={{
                                    root: `${classes.aboutButton} ${classes.button}`,
                                    iconSizeMedium: classes.iconSize,
                                    label: classes.label1
                                }}
                                startIcon={<AssignmentIndOutlinedIcon />}
                                onClick={() => {history.push('/page/about')}}
                            >
                              About 
                            </Button>

                        </Grid>
                        <Grid item xs={6}>
                        <Button
                                variant="contained"
                                color="#fafafa"
                                backgroundColor="transparent"
                                classes={{
                                    root: `${classes.publicationsButton} ${classes.button}`,
                                    iconSizeMedium: classes.iconSize,
                                    label: classes.label1
                                }}
                               startIcon={<AssignmentOutlinedIcon />}
                                onClick={() => {history.push('/page/publications')}}
                            >
                              Publications 
                            </Button>
                        </Grid>
                        <Grid item xs={6} >
                        <Button
                                variant="contained"
                                color="#fafafa"
                                backgroundColor="transparent"
                                classes={{
                                    root: `${classes.talksButton} ${classes.button}`,
                                    iconSizeMedium: classes.iconSize,
                                    label: classes.label2
                                }}
                               startIcon={<RecordVoiceOverOutlinedIcon />}
                                onClick={() => {history.push('/page/talks')}}
                            >
                              Talks 
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                        <Button
                                variant="contained"
                                color="#fafafa"
                                backgroundColor="transparent"
                                classes={{
                                    root: `${classes.blogButton} ${classes.button}`,
                                    iconSizeMedium: classes.iconSize,
                                    label: classes.label2
                                }}
                               startIcon={<MenuBookOutlinedIcon />}
                                onClick={() => {history.push('/page/blog')}}
                            >
                              Blog 
                            </Button>
                        </Grid>
                       
                    </Grid>
                </Container>
          
        )
    }


}
export default withRouter(withStyles(styles)(Home))