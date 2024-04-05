import React from "react";
import Style from './User.module.scss'
import {NavLink} from 'react-router-dom'

const User = ({id, followedOnUser, ...props}) => {
    const followedOnUserFunction = () => {
        const method = props.followed ? 'delete' : 'set'
        props.toggleFollowerStatus(id, method)
    }
    return (
        <div className={Style.user} id={id}>
            <div className={Style.body}>
                <div className={Style.logo}>
                    <NavLink to={'/profile/' + id}>
                        <img
                            src={props.img || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
                            alt={props.img || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
                        />
                    </NavLink>
                    {props.followed ?
                        <button
                            className='buttonDefault'
                            onClick={followedOnUserFunction}
                            disabled={props.isFollowing.some(el => el === id)}
                        >Unsubscribe</button>
                        : <button
                            className='buttonDefault'
                            onClick={followedOnUserFunction}
                            disabled={props.isFollowing.some(el => el === id)}
                        >Subscribe</button>}
                </div>
                <div className={Style.info}>
                    <div className={Style.name}>{props.name}</div>
                    <div className={Style.subtitle}>{props.status}</div>
                </div>
            </div>
        </div>
    )
}

export default User;