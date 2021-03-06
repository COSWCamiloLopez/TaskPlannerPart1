import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class AppBarPage extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Task Planner
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}