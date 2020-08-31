import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updatePost} from '../../actions/postActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const EditPostModal = ({current,updatePost  }) => {
 
    const [messege,setMessege]=useState('')
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [like,setLike]=useState(false)

    useEffect(()=>{
        if(current){
            setMessege(current.messege)
            setTitle(current.title)
            setAuthor(current.author)
            setLike(current.like)
        }
    },[current])

    const onSubmit=() =>{

        if(title==='' || messege==='' || author===''){
            M.toast({html:"Please enter title, messege and author"})
        }
        else{
        const newPost={
            id:current.id,
            title,
            messege,
            author,
            like
        }

        updatePost(newPost)
        M.toast({html:"Post Updated"})

        setAuthor('')
        setTitle('')
        setMessege('')
        }
    }

    return (
        <div id="edit-post-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit your Post</h4>
                {/* Title css */}
                <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}                  
                        />
                      

                    </div>
                 </div>
                    {/* Messege css */}
                    
                 <div className="row">
                    <div className="input-field">
                       
                        <textarea className="materialize-textarea"  
                        name="messege"
                        value={messege}
                        onChange={e => setMessege(e.target.value)}></textarea>

                       

                    </div>

                    {/* author css */}

                    <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}                  
                        />
                    </div>
                 </div>
                 </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">
                    Enter
                </a>

            </div>
        </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
}
EditPostModal.protoTypes={
    current:PropTypes.object,
    updatePost:PropTypes.func.isRequired,
}
const mapStateToProps= state=>({
    current:state.posts.current
})
export default connect(mapStateToProps,{updatePost})(EditPostModal)
