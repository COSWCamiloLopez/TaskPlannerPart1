import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TaskPlannerDrawer from './TaskPlannerDrawer';

const styles = theme => ({});

class TaskPlanner extends Component {

    render() {
        return (
            <div>
                <TaskPlannerDrawer/>
            </div>
        );
    }
}

export default withStyles(styles)(TaskPlanner);