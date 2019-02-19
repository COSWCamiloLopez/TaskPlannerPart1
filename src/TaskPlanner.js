import React, {Component} from 'react';
import TaskPlannerDrawer from './TaskPlannerDrawer';

const styles = theme => ({});

class TaskPlanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div>
                <TaskPlannerDrawer/>
            </div>
        );
    }
}

export default TaskPlanner;