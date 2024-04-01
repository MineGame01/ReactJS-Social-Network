import React from 'react'
import User from "./User/User";

const Users = ({users, isFollowing, ...props}) => {
    return (
        <div>
            {
                users.map(info => {
                    return <User
                        id={info.id}
                        img={info.photos.small}
                        followed={info.followed}
                        name={info.name}
                        status={info.status}
                        isFollowing={isFollowing}
                        users={users}
                        toggleFollowerStatus={props.toggleFollowerStatus}
                    />
                })
            }
        </div>
    )
}
export default Users;