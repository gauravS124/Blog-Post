import {GET_POSTS,SET_LOADING, POST_ERROR, ADD_POST,SEARCH_POSTS,
    DELETE_POST,UPDATE_POST,SET_CURRENT,CLEAR_CURRENT} from '../actions/types'

const initialState={
    posts:null,
    current:null,
    loading:null,
    error:null
}

export default (state=initialState,action) => {

    switch (action.type){

        case ADD_POST:
            return{
                ...state,
                posts:[...state.posts,action.payload],
                loading:false
            }
        case DELETE_POST:
            return{
                ...state,
                posts:state.posts.filter(post =>post.id!== action.payload),
                loading:false
            }
        case UPDATE_POST:
            return{
                ...state,
                posts:state.posts.map(post => post.id===action.payload.id ? action.payload:post )
            }

        case GET_POSTS:
            return{
                ...state,
                posts:action.payload,
                loading:false 
            }
        case SEARCH_POSTS:
            return{
                ...state,
                posts:action.payload,
               
            }
      
        case POST_ERROR:
            console.log(action.payload)
            return{
                ...state,
                error: action.payload
            }

        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            }

        default:
            return state
    }
}