import React,{Fragment ,useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from '../src/components/layout/SearchBar'
import Posts from './components/posts/Posts'
import AddPostModal from './components/posts/AddPostModal'
import DetailPostModal from './components/posts/DetailPostModal'

import {Provider} from 'react-redux'
import store from './store'

import EditPostModal from './components/posts/EditPostModal'

import Addbtn from './components/layout/Addbtn'

const App=()=> {
  useEffect(()=>{
    //Initializing the materialise JS
    M.AutoInit();
  })
  return (
    <Provider store={store}>
      <Fragment>
      <SearchBar/>
      <div className="container">
        <Addbtn/>
        <AddPostModal/>

        <Posts />
        <EditPostModal/>
        <DetailPostModal/>
      </div>
    </Fragment>
    </Provider>
    
  );
}

export default App;
