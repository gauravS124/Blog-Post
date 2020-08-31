import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deletePost,setCurrent} from '../../actions/postActions'


const Postitem = ({ post, deletePost,setCurrent }) => {
const onDelete=() =>{
    deletePost(post.id)
}

const editClickHandler = ()=>{
    setCurrent(post)
}

const detailClickHandler = ()=>{
    console.log("paassing " ,post)
    setCurrent(post)
}


    return (
        <li className="collection-item">
            <a href="#detail-post-modal" className="modal-trigger blue-text" 
            onClick={detailClickHandler}>{post.title}</a>
            <br/>
            <span className="grey-text">
                Written by  
                <span className="black-text">{" "+post.author} </span>
            </span>

            <a href="#!" onClick={onDelete} style={{display:'block', width:'20px'}} className="secondary-content">
                <i className="material-icons grey-text"> delete</i>
            </a>
            
            <a href="#edit-post-modal" className="modal-trigger blue-text secondary-content" style={{ display:'block', paddingRight:'50px', width:'20px'}}
             onClick={editClickHandler} >
            <i  className="material-icons grey-text">mode_edit</i>
            </a>
        

           
        </li>
    )
}

Postitem.propTypes = {
    post:PropTypes.object.isRequired,
    deletePost:PropTypes.func.isRequired,
    setCurrent:PropTypes.func.isRequired,
}

export default connect(null,{ deletePost,setCurrent})(Postitem)
