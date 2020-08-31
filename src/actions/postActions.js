import {GET_POSTS,
    SET_LOADING, 
    POST_ERROR,
    ADD_POST,
    DELETE_POST, 
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_POST,
    SEARCH_POSTS} from './types'


// export const getPosts = () =>{
//     return async (dispatch) =>{
//         setLoading()
//         const res=await fetch('/posts').then()
//         const data= await res.json()

//         dispatch({
//             type:GET_POSTS,
//             payload:data
//         })
//     }
// }
//getting posts
export const getPosts = () => async dispatch =>{

    try {
        setLoading()
        const res=await fetch('/posts')
        const data= await res.json()

        dispatch({
            type:GET_POSTS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:POST_ERROR,
            payload:error.response.data
        })
    }
}

//adding posts
export const addPost = (post) => async dispatch =>{
    console.log("inside addpost action")
    try {
        setLoading()    
        const res=await fetch('/posts',{
            method:'POST',
            body:JSON.stringify(post),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data= await res.json()
        console.log("data is....",data)

        dispatch({
            type:ADD_POST,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:POST_ERROR,
            payload:error.response.data
        })
    }
   
      
    
}

//delete post
export const deletePost = (id) => async dispatch =>{

    try {
        setLoading()
       await fetch(`/posts/${id}`,{
           method:'DELETE'
       })
        

        dispatch({
            type:DELETE_POST,
            payload:id
        })
        
    } catch (error) {
        dispatch({
            type:POST_ERROR,
            payload:error.response.data
        })
    }
}

//update  post on server
export const updatePost = (post) => async dispatch =>{

    try {
        setLoading()
     const res=  await fetch(`/posts/${post.id}`,{
           method:'PUT',
           body:JSON.stringify(post),
           headers:{
               'Content-Type':'application/json'
           }
       })

       const data= await res.json()
        

        dispatch({
            type:UPDATE_POST,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:POST_ERROR,
            payload:error.response.data
        })
    }
}

// search posts
export const searchPosts = (text) => async dispatch =>{

    try {
        setLoading()
        const res=await fetch(`/posts?q=${text}`)
        const data= await res.json()

        dispatch({
            type:SEARCH_POSTS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:POST_ERROR,
            payload:error.response.data
        })
    }
}
// set current 
export const setCurrent = (post) =>{

    console.log("inside set curent")
    return{
        type:SET_CURRENT,
        payload:post
    }

}
// clear current 
export const clearCurrent = () =>{

    return{
        type:CLEAR_CURRENT
    }

}



//set Loading
export const setLoading= () =>{
    return  {
        type:SET_LOADING
    }
}