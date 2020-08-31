import React,{useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addPost} from '../../actions/postActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddPostModal = (props) => {
 
   
    const [npost,setNpost]=useState({
        title:'',
        messege:'',
        author:'',
        like:false
    })

    const changeHandler=(e)=>{
        setNpost({...npost,[e.target.name]:e.target.value})
    }
    const onSubmit=() =>{

        if(npost.title==='' || npost.messege==='' || npost.author===''){
            M.toast({html:"Please enter title, messege and author"})
        }
        props.addPost(npost)

        M.toast({html:`Post is added by ${ npost.author}`})
        setNpost({
            title:'',
            messege:'',
            author:'',
            like:false
        })
        
    }

    return (
        <div id="add-post-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Create a new Post</h4>
                {/* Title css */}
                <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="title"
                        value={npost.title}
                        onChange={changeHandler}                  
                        />
                        <label htmlFor="title" className="active">
                            Post Title
                        </label>

                    </div>
                 </div>
                    {/* Messege css */}
                    
                 <div className="row">
                    <div className="input-field">
                       
                        <textarea className="materialize-textarea"  
                        name="messege"
                        value={npost.messege}
                        onChange={changeHandler}></textarea>

                        <label htmlFor="messege" className="active">
                            Post Messege
                        </label>

                    </div>

                    {/* author css */}

                    <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="author"
                        value={npost.author}
                        onChange={changeHandler}                  
                        />
                        <label htmlFor="author" className="active">
                            Author
                        </label>

                    </div>
                 </div>

                    
                 </div>
            </div>
            <div  className="modal-footer ">
                <a onClick={onSubmit} href="#!"  className="modal-close waves-effect blue btn">
                    Add
                </a>
            </div>
        </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
}

AddPostModal.propTypes ={
    addPost:PropTypes.func.isRequired
}


export default connect(null,{addPost})(AddPostModal)
