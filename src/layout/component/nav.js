import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Nav extends React.Component {
    render() {
        return (
            <div className="collapse  navbar-collapse">
                <ul className='navbar' >
                    <li className="nav-item active">
                        <Link className="nav-link " to="/login">BLOG <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ASK</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">BLOG</a>
                    </li>

                </ul>
                <div className=" search ">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Nav