import ProfileSlice, {addPostAction, deletePostByID} from './ProfileSlice'

//Reducer addPostAction
test('Added new post to object', () => {
    const initialState = {
        postData: [
            {id: 1, message: 'Hello its my first post', likeCount: 100, deslikeCount: 1},
            {id: 2, message: 'HELLOOOOOOOOO', likeCount: 101, deslikeCount: 2},
            {id: 3, message: 'name Klyuchka', likeCount: 1000, deslikeCount: 0},
            {id: 4, message: 'Good Like', likeCount: 32, deslikeCount: 2}
        ],
    }
    const action = addPostAction({newPost: 'Hello World'})
    expect(ProfileSlice(initialState, action)).toEqual({
        postData: [
            {id: 1, message: 'Hello its my first post', likeCount: 100, deslikeCount: 1},
            {id: 2, message: 'HELLOOOOOOOOO', likeCount: 101, deslikeCount: 2},
            {id: 3, message: 'name Klyuchka', likeCount: 1000, deslikeCount: 0},
            {id: 4, message: 'Good Like', likeCount: 32, deslikeCount: 2},
            //New Object
            {id: 5, message: 'Hello World', likeCount: 0, deslikeCount: 0}
        ],
    })
})

//Reducer deletePostByID
test('Delete post object by id', () => {
    const initialState = {
        postData: [
            {id: 1, message: 'Hello its my first post', likeCount: 100, deslikeCount: 1},
            {id: 2, message: 'HELLOOOOOOOOO', likeCount: 101, deslikeCount: 2},
            {id: 3, message: 'name Klyuchka', likeCount: 1000, deslikeCount: 0},
            {id: 4, message: 'Good Like', likeCount: 32, deslikeCount: 2}
        ],
    }
    const id = 4
    const action = deletePostByID({id: id})
    expect(ProfileSlice(initialState, action)).toStrictEqual({
        postData: [...initialState.postData.filter(el => el.id !== id)]
    })
})