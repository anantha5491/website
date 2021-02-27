import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fafafa',
    height: '100%',
    minHeight: '100vh',

  },
  font:{
   
    color: '#fafafa'
  },
  icon: {
    fontSize: '2rem',
    color: '#fafafa'
  },
  buttonIcon: {
    '& > *:first-child': {
      fontSize: 50,
    },
   
  },
  transparent: {
    backgroundColor: 'transparent',
    color: '#fafafa'
  },
  heading: {
   
    fontSize: theme.typography.pxToRem(45),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summary: {
   
    fontSize: theme.typography.pxToRem(40),
   
  },
  button: {
   
    marginRight: '55px',
    position: 'absolute',
    right: '0',
    backgroundColor: 'transparent',
    color: '#fafafa',
    boxShadow: 'none',
    fontSize: '2rem',
    fontFamily: 'TuckRegular',
    "&:hover": {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontSize: '2.15rem',
  }

  },
})

class Publications extends Component {

    render() {
        const { classes } = this.props;
        return (
          <div className={classes.root}>
          <Accordion className={classes.transparent}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
              <Button
        variant="contained"
        color="default"
       
        classes={{
          root: classes.button,
          iconSizeMedium: classes.buttonIcon,
          
      }}
        startIcon={<AssignmentIcon/>}
      >
        Paper
      </Button>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
             
             
      </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.transparent}> 
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon}/>}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.transparent}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon}/>}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Disabled Accordion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
                )
        }

}
export default withStyles(styles)(Publications)
