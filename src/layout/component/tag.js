import React from 'react'
import ChipContainer from './chip'

class TagContainer extends React.Component {
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
                 <ul className="tag-list">
                    <li className='tag-item'>
                        <ChipContainer title='front-end' />
                    </li>
                     <li className='tag-item'>
                         <ChipContainer title='front-end' />
                     </li>
                     <li className='tag-item'>
                         <ChipContainer title='front-end' />
                     </li>
                     <li className='tag-item'>
                         <ChipContainer title='fron' />
                     </li>
                     <li className='tag-item'>
                         <ChipContainer title='fn' />
                     </li>

                 </ul>
            </div>


        )
    }
}

export default TagContainer