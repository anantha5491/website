
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card, CardMedia } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import anantha from "../images/anantha2.png"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';





const styles = theme => ({


    media: {
        minHeight: '50vh',
        backgroundImage: `url(${anantha})`,

        backgroundPosition: 'top',
        backgroundSize: '100% 100%',

        // [theme.breakpoints.down("sm")]: {
        //     backgroundSize: '15rem',
        // },
        // [theme.breakpoints.between('md', 'lg')]: {
        //     backgroundSize: '40rem',
        // },
        // [theme.breakpoints.up('lg')]: {
        //     backgroundSize: '32rem',
        // },

        paddingTop: '10px'

    },
    paper1: {
        textAlign: 'center',
        color: '#fafafa',
        minHeight: '50vh',
        backgroundColor: "transparent",
        boxShadow: 'none',
        paddingTop: '10px'
    },

    button: {

        backgroundColor: "transparent",
        color: "#fafafa",
        minHeight: '20vh',
        width: '100%',
        boxShadow: 'none',
        fontSize: '2.875rem',
        [theme.breakpoints.down("xs")]: {
            fontSize: '2rem',
        },
        "&:hover": {
            boxShadow: 'none',
            backgroundColor: "transparent",
            color: "#fafafa",
            fontSize: '3.75rem',
            [theme.breakpoints.down("xs")]: {
                fontSize: '2.5rem',
            },


        }
    },
    aboutlabel: {

        //   paddingBottom:'75px',

        // [theme.breakpoints.between('md','lg')]: {
        //     paddingBottom: '275px',
        //   },
        //   [theme.breakpoints.up('lg')]: {
        //     paddingBottom: '0px',
        //   },

    },
    publicationsLabel: {

        //  paddingBottom:'75px',
        //   [theme.breakpoints.between('md','lg')]: {
        //       paddingBottom: '275px',
        //     },
        //     [theme.breakpoints.up('lg')]: {
        //       paddingBottom: '0px',
        //     },

    },
    talksLabel: {

        //  paddingBottom:'175px',

        //   [theme.breakpoints.between('md','lg')]: {
        //       paddingBottom: '275px',
        //     },
        //     [theme.breakpoints.up('lg')]: {
        //       paddingBottom: '0px',
        //     },

    },
    blogsLabel: {

        //   paddingBottom:'175px',
        //   [theme.breakpoints.between('md','lg')]: {
        //       paddingBottom: '275px',
        //     },
        //     [theme.breakpoints.up('lg')]: {
        //       paddingBottom: '0px',
        //     },

    },

    // aboutButton: {

    //     color: "#4cbac1",
    //     "&:hover": {
    //         color: "#4cbac1",
    //     }
    // },
    // publicationsButton: {

    //     color: "#fd8c71",
    //     "&:hover": {
    //         color: "#fd8c71",
    //     }
    // },
    // talksButton: {

    //     color: '#38ad1c',

    //     "&:hover": {
    //         color: "#38ad1c",
    //     }
    // },
    // blogButton: {

    //     color: '#e2bf0b',

    //     "&:hover": {
    //         color: "#e2bf0b",
    //     }
    // },
    font: {
        fontFamily: 'TuckRegular',
        textAlign: 'justify',
        fontSize: '3.25rem',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.7rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '3rem'
        },
        paddingTop: '30px',
        [theme.breakpoints.between('md', 'lg')]: {
           // paddingTop: '130px',
            fontSize: '4rem',
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: '20px',
            fontSize: '3rem',
        },

    },
    card: {
        boxShadow: 'none',
        backgroundColor: 'transparent'
    },


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
        color: "#fafafa"
    },
    fontColor2: {
        color: "#fafafa"
    },
    fontColor3: {
        color: "#fafafa"
    },
    fontColor4: {
        color: "#fafafa"
    }

})

class Home extends Component {

    componentDidMount() {
        document.title = "Anantha";
    }

    render() {
        const { classes, history } = this.props;
        return (

            <Container >
                <Grid
                    container
                    // direction="row"
                    // justify="flex-start                                                                                                                                       "
                    // alignItems="flex-start"
                    // alignContent="flex-start"
                    spacing={0}

                >
                    <Grid item xs={12}>
                        <Box height="100%" display="inline-block">

                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.card}>
                            <CardMedia
                                classes={{

                                    root: classes.media,
                                }}
                            />
                        </Card>
                    </Grid>

                    <Grid item xs={7}>
                        <Paper className={classes.paper1}>

                            <Typography variant="h5" className={classes.font}>
                                <div>
                                    I am <span className={classes.fontColor1}>Anantha Padmanabha</span>, currently doing my Post-Doc at <span ><a href="https://www.irif.fr/en/index" target="_blank" className={classes.fontColor3}>IRIF, Paris</a></span> working on
                                   database theory under  <span ><a href="https://www.irif.fr/~cristina/" target="_blank" className={classes.fontColor2}>Prof. Cristina Sirangelo</a></span>.
                                   </div>
                                <div>

                                    I did my PhD  under  <span ><a href="https://www.imsc.res.in/r_ramanujam" target="_blank" className={classes.fontColor2}>Prof. R. Ramanujam</a> </span> 
                                    at  <span ><a href="https://www.imsc.res.in/" target="_blank" className={classes.fontColor3}>IMSc, Chennai</a></span>.
                                   </div>                                 

                                    Here is the <span ><a href="https://www.imsc.res.in/xmlui/bitstream/handle/123456789/452/HBNI%20Th164.pdf?sequence=1&isAllowed=y" target="_blank" className={classes.fontColor4}>
                                        thesis</a></span> and its <span className={classes.fontColor4}><a link="">summary</a></span>.
                                   
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
                                label: classes.aboutlabel
                            }}
                            startIcon={<AssignmentIndOutlinedIcon />}
                            onClick={() => { history.push('/page/about') }}
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
                                label: classes.publicationsLabel
                            }}
                            startIcon={<AssignmentOutlinedIcon />}
                            onClick={() => { history.push('/page/publications') }}
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
                                label: classes.talksLabel
                            }}
                            startIcon={<RecordVoiceOverOutlinedIcon />}
                            onClick={() => { history.push('/page/talks') }}
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
                                label: classes.blogsLabel
                            }}
                            startIcon={<MenuBookOutlinedIcon />}
                            onClick={() => { history.push('/page/blog') }}
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