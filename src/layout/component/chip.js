import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
        color: '#fff',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

function handleRequestDelete() {
    console.log('You clicked the delete button.');
}

function handleClick() {
    console.log('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default class ChipContainer extends React.Component {


    render() {
        return (
            <div style={styles.wrapper}>
                <Chip
                    className='tag-chip'
                    onClick={handleClick}
                    style={styles.chip}
                    href='#'
                    target='_blank'
                >
                    {this.props.title}
                </Chip>

            </div>
        );
    }
}