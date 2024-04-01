import UsersSlice, { follower } from './UsersSlice'

const initialState = {
    users: [
        {id: 1, followed: false},
        {id: 2, followed: false},
        {id: 3, followed: false},
        {id: 4, followed: false}
    ]
}

test('Followed user by id', () => {
    const id = 3
    const action = follower({id: id})
    expect(UsersSlice(initialState, action)).toEqual({
        users: initialState.users.map(user => {
            if (id === user.id) {
                return {...user, followed: true}
            }
            return user
        })
    })
})