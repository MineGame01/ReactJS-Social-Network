import React from "react";
import Style from './Post.module.css'

const Post = (props) => {
    const {deslikeUp, likeUp, id, massages, like, deslike} = props
    const deslikeUpFunction = () => {
        deslikeUp({id: id});
    }
    const likeUpFunction = () => {
        likeUp({id: id})
    }
    return (
        <div className={Style.Post} id={id}>
            <div className={Style.Post__body}>
                <img
                    src='https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'
                    alt='icon'/>
                {massages}
            </div>
            <div className={Style.Post__body__postInfo}>
                <div>
                    <button className='buttonDefault' onClick={likeUpFunction}>Like</button>
                    <button className='buttonDefault' onClick={deslikeUpFunction}>Dislike</button>
                </div>
                <div>
                    <span>Like: {like} </span>
                    <span>Dislike: {deslike} </span>
                </div>
            </div>
        </div>
    )
}

export default Post;