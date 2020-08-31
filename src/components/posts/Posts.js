import React,{useEffect} from 'react'
import PostItem from './Postitem'
import Preloader from '../layout/Preloader'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getPosts} from '../../actions/postActions'

const Posts = ({posts:{posts,loading},getPosts}) => {
   
    useEffect(()=>{
        getPosts();
        // eslint-disable-next-line
    },[])

  
    if(loading || posts===null ){
        return <Preloader/>
    }
    // console.log(posts)
    return (
        <ul className="collection with-header">
            <li  className="collection-header">
                <h4 className="center" > The Great Posts</h4>
            </li>
            {!loading && posts.length === 0 ? (<p className="center"> Nothing to show 😔</p>) : (
                posts.map(post => <PostItem post={post} key={post.id}/> )
            )}
        </ul>
    )
}

Posts.propTypes ={
    posts:PropTypes.object.isRequired,
    getPosts:PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    posts: state.posts
})

export default connect(mapStateToProps,{getPosts})(Posts)
