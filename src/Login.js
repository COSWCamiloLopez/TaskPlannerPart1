import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import loginIcon from './loginIcon.png';

const styles = theme => ({
    button: {
        width: '30%'
    },
    text: {
        width: '30%'
    },
    image: {
        width: '10%',
        marginTop: '3%'
    }
});

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <br/>
                <img
                    src={loginIcon}
                    className={classes.image}
                />
                <br/>
                    <TextField
                        id="user"
                        label="User"
                        placeholder="User"
                        margin="normal"
                        className={classes.text}
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="password"
                        label="Password"
                        placeholder="Password"
                        margin="normal"
                        variant="outlined"
                        className={classes.text}
                    />
                    <br/>
                    <Button
                        variant="outlined"
                        color="primary"
                        className={classes.button}>
                        Login
                    </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Login);