import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faThumbsUp  } from '@fortawesome/fontawesome-free-solid'



class Comments extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="comments-container">
                <div className="comment-bar">
                    <div className="comments-count">2333Comments
                    </div>
                    <div>
                        Ranking by date
                    </div>
                </div>

                <div className="comments-list">
                    <div className="comments-item">
                        <div className="comments-user">
                            <a href="#" className="userLink">
                                <img className='userLink-avatar' src="http://www.material-ui.com/images/ok-128.jpg" alt=""/>
                                <span className='userLink-name'>
                                        呵呵哒
                                    </span>
                            </a>

                            <span className="comments-time">
                                        one day ago

                                    </span>

                        </div>
                        <div className="comments-content">
                                    <span>
                                        只要保证符合 ECMAScript 规范规定的语义，内存里是几份是无所谓的。而且就算是两份，通常你也看不出来只要保证符合 ECMAScript 规范规定的语义，内存里是无所，内存里是无所，内存里是无所谓的。而且就算是两只要保证符合 ECMAScript 规范规定的语义，内存里是几份是无所谓的。而且就算是两份，通常你也看不出来只要保证符合 ECMAScript 规范规定的语义，内存里是无所，内存里是无所，内存里是无所谓的。而且就算是两只要保证符合 ECMAScript 规范规定的语义，内存里是几份是无所谓的。而且就算是两份，通常你也看不出来只要保证符合 ECMAScript 规范规定的语义，内存里是无所，内存里是无所，内存里是无所谓的。而且就算是两只要保证符合 ECMAScript 规范规定的语义，内存里是几份是无所谓的。而且就算是两份，通常你也看不出来只要保证符合 ECMAScript 规范规定的语义，内存里是无所，内存里是无所，内存里是无所谓的。而且就算是两
                                    </span>
                        </div>
                        <div className="comments-action">
                            <span>
                            <FontAwesomeIcon className='icon-font thumb-up' icon={faThumbsUp} /> vote
                        </span>
                        </div>

                    </div>

                    <div className="comments-item">
                        <div className="comments-user">
                            <a href="#" className="userLink">
                                <img className='userLink-avatar' src="http://www.material-ui.com/images/ok-128.jpg" alt=""/>
                                <span className='userLink-name'>
                                        呵呵哒
                                    </span>
                            </a>

                            <span className="comments-time">
                                        one day ago

                                    </span>

                        </div>
                        <div className="comments-content">
                                    <span>
                                        只要保证符合 ECMAScript 规范规定的语义，内存里是几份是无所谓的。而且就算是两份，通常你也看不出来只要保证符合 ECMAScript 规范规定的语义，内存里是无所，内存里是无所，内存里是无所谓的。而且就算是两只要保证符合 ECMAScript 规
                                    </span>
                        </div>

                    </div>

                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="write a comment" id="inputDefault" />
                    <button className='btn btn-outline-secondary btn-sm'>comment</button>
                </div>

            </div>
        )
    }
}

export default Comments