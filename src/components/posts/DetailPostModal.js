import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'

import {updatePost} from '../../actions/postActions'


const DetailPostModal = ({current,updatePost}) => {
 
    const [messege,setMessege]=useState('')
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [like,setLike]=useState(false)

    useEffect(()=>{
        console.log(current)
        if(current !==null){
            setMessege(current.messege)
            setTitle(current.title)
            setAuthor(current.author)
            setLike(current.like)
        }
    },[current])

  
    const updateLike= () =>{

    console.log("liked is ",{like})
    setLike(!like)
    console.log("liked is ",{like})
        const newPost={
            id:current.id,
            title,
            messege,
            author,
            like
        }
        console.log("After clicking",newPost)
         updatePost(newPost)
    }
    return (
        <div id="detail-post-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
            <h4>{title}</h4>
            <p>{messege}</p>
            <p>{author}</p>

            </div>
           
            <div className="modal-footer">
                {!like?( <a href="#!" onClick={updateLike}  style={{marginRight:'30px'}} className=" waves-effect blue btn">
                    Like
                </a>):
                ( <a href="#!" onClick={updateLike}  style={{marginRight:'30px'}} className=" waves-effect blue btn">
                Unlike
            </a>)}
               

                <a href="#!" style={{marginRight:'30px'}}  className="modal-close waves-effect blue btn">
                    Close
                </a>

            </div>
        </div>
    )
}

const modalStyle={
    width:'75%',
    height:'75%'
}

DetailPostModal.propTypes={
    current:PropTypes.object,
}
const mapStateToProps= state=>({
    current:state.posts.current
})

export default connect(mapStateToProps,{updatePost} )(DetailPostModal)
