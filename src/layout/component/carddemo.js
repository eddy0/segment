import React from 'react'
import Comments from './comments.js'
import './carddemo.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faComments,faShareAlt, faThumbsUp  } from '@fortawesome/fontawesome-free-solid'




class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }
    }


    handleExpand = () => {
        this.setState({expanded: true});
    }

    render() {
        return (
            <div className='card-container'>
                <span className="card-clear">
                      <svg className="icon icon-clear" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </span>

                <div className="timestamp">
                    published by one hour ago
                </div>

                <div className="author">
                    <a href="#" className="author-avatar">
                        <img src="http://www.material-ui.com/images/ok-128.jpg" alt=""/>
                    </a>
                    <div className="author-detail">
                        <div className="author-name">
                            <a href="#"> username</a>
                        </div>
                        <div className="author-signature">
                            nothing is possible
                        </div>

                    </div>
                </div>

                <div className="content-cell">
                    <a href="#" className="content-title">
                        <span>请别以爱的名义盲目催(逼)婚</span>
                    </a>
                    <div className="content-item">
                        <span className="content-text">
                            只要保证符合 ECMAScript 规范规定的语义，内存里是几份是无所谓的。而且就算是两份，通常你也看不出来只要保证符合 ECMAScript 规范规定的语义，内存里是无所，内存里是无所，内存里是无所谓的。而且就算是两份，通常你也看不出...
                        </span>
                        <span className='content-expand'  onClick={this.handleExpand} >
                            more
                            <svg className="icon icon-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>
                        </span>

                    </div>
                    <div className="content-action">
                        <span className="topic-tag front-end">
                            front-end
                        </span>

                        <span className="action-view">

                        <FontAwesomeIcon className='icon-font icon-view'  icon={faEye} />

                        <span className="view-count">
233
                            </span>
                            views

                    </span>

                        <span className="action-comments">
                             <FontAwesomeIcon className='icon-font icon-comments'  icon={faComments} />
                            <span className="comments-count">
23
                            </span>
comments
                        </span>

                        <span className="action-like">
     <FontAwesomeIcon className='icon-font icon-like'  icon={faHeart} />
                            like
                        </span>

                        <span className="action-share">
     <FontAwesomeIcon className='icon-font icon-share'  icon={faShareAlt} />
                            share
                        </span>
                    </div>

                </div>
                <Comments/>

            </div>
        )
    }
}

export default Card