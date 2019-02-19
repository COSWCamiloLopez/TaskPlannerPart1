import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Task extends Component{

    constructor(props){
        super(props);

        this.state = {
            responsible: {
                name: "",
                email: ""
            },
            status: "",
            date: new Date(),
            description: "",
            user: 0
        };
    };

    render(){

        const {classes} = this.props;

        return(
            <div>
                <Card className={classes.card}>
                    <CardContent>
                    </CardContent>
                </Card>
            </div>
        );
    }
}