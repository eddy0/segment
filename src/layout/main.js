import React from 'react'
import './main.scss'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardContainer from './component/card'
import ToolbarContainer from './component/toolbar'
import TagContainer from './component/tag.js'
import RankContainer from "./component/rank"
import Card from './component/carddemo.js'


class Main extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="main">
                    <div className="container">
                        <ToolbarContainer />
                        <Card />
                        <CardContainer className='card' />
                        <CardContainer className='card' />
                        <CardContainer className='card' />
                        <CardContainer className='card' />
                        <CardContainer className='card' />

                    </div>
                    <div className="side">
                        <TagContainer />
                        <RankContainer />

                    </div>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default Main