import React from "react";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';



const BadgeExampleSimple = () => (
    <div>
        <Badge
            badgeContent={10}
            primary={true}
            className='notification'

        >
            <IconButton
                href='#'
                target='_blank'
            >
                <NotificationsIcon />
            </IconButton>
        </Badge>
    </div>
);


class Login extends React.Component {
    render() {
        return (
            <FlatButton label="Login"
                        style={ {marginLeft: '8px',
                                color: 'inherit',
                            font: 'inherit',
                        }}
                        onClick={ () => this.props.onToggle()}  />
        );
    }
}

const Logged = (props) => (
    <span style={ { display: 'flex',
                    alignItems: 'center',}}
    >
        <BadgeExampleSimple />
        <IconMenu
            {...props}
            iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'middle', vertical: 'bottom'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >

            <MenuItem primaryText="profile" />
            <MenuItem primaryText="setting" />
            <Divider />
            <MenuItem  primaryText="sign out" onClick={ () => props.onToggle()} />

        </IconMenu>

        </span>
);



class LoginContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            logged: false,
        }
    }

    handleChange = (event) => {
        let logged = !this.state.logged
        this.setState({logged: logged});
        console.log('target', this.state)
    }


    render(){
        return (
            <div >


               {this.state.logged ?
                   <Logged onToggle={this.handleChange.bind(this)}  /> :
                   <Login onToggle={this.handleChange.bind(this)} />}

            </div>
        )
    }
}

export default LoginContainer

// <Toggle
// label="Logged"
// defaultToggled={true}
// onToggle={this.handleChange}
// labelPosition="right"
// style={{margin: 20}}
// />