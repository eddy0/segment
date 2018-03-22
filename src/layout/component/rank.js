import React from 'react'

class RankContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='tag'>
                <div className="tag-header">
                    <span>HOT TAGS</span>
                    <a href='#'>ALL</a>
                </div>
                <ul className="rank-list">
                    <li className='hero'>
                        <div className="rank">1.</div>
                        <div className="user-info">
                            <a href="#">
                            <span className="username">
                                撒网要监狱
                            </span>
                            </a>
                        </div>
                        <div className="rank-score">3666</div>
                    </li>

                    <li className='hero'>
                        <div className="rank">2.</div>
                        <div className="user-info">
                            <span className="username">
                                撒网要监狱
                            </span>
                        </div>
                        <div className="rank-score">3666</div>
                    </li>

                </ul>
            </div>


        )
    }
}

export default RankContainer