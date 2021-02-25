import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
})

class About extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                 <Typography paragraph>
              
              </Typography>
            </div>
                )
        }

}
export default withStyles(styles)(About)
