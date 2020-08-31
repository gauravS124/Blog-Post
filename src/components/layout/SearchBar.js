import React,{useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {searchPosts} from '../../actions/postActions'


 const SearchBar = ({ searchPosts }) => {
     const text=useRef('')

     const textChanged = e => {
         searchPosts(text.current.value)

     }

    return (
        
            <nav style={{marginBottom:'30px'}} className='indigo darken-3'>
                <div className="nav-wrapper">
                
                <form>
                    <div className="input-field">
                    <input id="search" type="search" placeholder="Search posts..." ref={text}
                    onChange={textChanged} />
                    
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                                    
                    </form>
                </div>
            </nav>
       
    )
}
SearchBar.propTypes={
    searchPosts:PropTypes.func.isRequired,
}
export default connect(null, { searchPosts })(SearchBar)
