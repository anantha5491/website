import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
})

class Blog extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                 <Typography paragraph>
             Blog
              </Typography>
            </div>
                )
        }

}
export default withStyles(styles)(Blog)
