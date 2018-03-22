import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
    button: {
        margin: '0 12px 0 20px',
        backgroundColor: 'green',
    },
}


export default class ToolbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar className="storyCard" >
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="RECENT" />
                        <MenuItem value={2} primaryText="HOT" />
                        <MenuItem value={3} primaryText="MY FAVORITE" />
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />

                    <RaisedButton
                        href="#"
                        target="_blank"
                        label="Creat Topic"
                        primary={true}
                        style={styles.button}
                        icon={<FontIcon className="muidocs-icon-custom-sort" />}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}