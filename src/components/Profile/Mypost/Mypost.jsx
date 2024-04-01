import React from "react";
import Style from './Mypost.module.css'
import Post from "./Post/Post";
import PostFormRedux from "./PostForm/PostForm";


const Mypost = (props) => {
    const {postData, deslikeUp, likeUp, addPostAction} = props
    let postElements = postData.map(post =>
        <Post
            id={post.id}
            massages={post.message}
            like={post.likeCount}
            deslike={post.deslikeCount}
            deslikeUp={deslikeUp}
            likeUp={likeUp}
        />
    )

    const addPost = (value) => {
        addPostAction({newPost: value.newPost});
    }
    return (
        <div className={Style.myPost}>
            <div className={Style.myPost__panel}>
                <h3>My post</h3>
                <div className={Style.myPost__panel__body}>
                    <PostFormRedux onSubmit={addPost}/>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default Mypost;