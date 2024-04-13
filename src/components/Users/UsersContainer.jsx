import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getPageNumber, getSearchText} from "../../redux/Slices/UsersSlice/UsersSlice";
import {
    toggleFollowerStatus,
    getUserThunkCreator,
} from '../../redux/Slices/UsersSlice/UsersThunkCreator'
import Users from "./Users/Users";
import Loader from "../common/Loader/Loader";
import SearchInput from "./SearchInput/SearchInput";
import PageNumberLent from "./PageNumber/PageNumberLent";
import {
    getCountPageState, getIsFollowingState, getIsLoadesUsersState,
    getPageNumberState, getSearchTextState,
    getTotalCountState,
    getUsersState
} from "../../redux/Selectors/Selectors";
import {compose} from "redux";
import {useParams} from "react-router-dom";

const UsersClass = props => {
    const {
        getUserThunkCreator,
        pageNumber, SearchText,
        getPageNumber, getSearchText,
        totalCount, countPage,
        isLoades, users, isFollowing,
        toggleFollowerStatus
    } = props

    const params = useParams();

    useEffect(() => {
        const urlPageNumber = params.pageNumber
        getUserThunkCreator(urlPageNumber ? urlPageNumber : pageNumber, SearchText);
    }, []);

    const updatePageNumber = e => {
        getPageNumber({number: e.target.value});
        getUserThunkCreator(e.target.value, SearchText);
    }

    const updateSearchText = e => {
        getSearchText({text: e.target.value});
        getUserThunkCreator(pageNumber, e.target.value);
    }

    const postPageNumber = number => {
        getPageNumber({number: number});
        getUserThunkCreator(number, SearchText);
    }

    let NumberPage = Math.ceil(totalCount / countPage);
    let PageNumber = []
    for (let i = 1; i <= NumberPage; i++) {
        PageNumber.push(i)
    }
    return (
        <div>
            <PageNumberLent
                NumberPage={NumberPage}
                PageNumber={PageNumber}
                PageNumberURL={pageNumber}
                postPageNumber={postPageNumber}
            />
            <SearchInput
                PageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
                SearchText={SearchText}
                updateSearchText={updateSearchText}
            />
            {isLoades ? <Loader /> : <Users
                users={users}
                isFollowing={isFollowing}
                toggleFollowerStatus={toggleFollowerStatus}
            />}
        </div>
    )
}

const mapstateToProps = (state) => ({
    users: getUsersState(state),
    pageNumber: getPageNumberState(state),
    countPage: getCountPageState(state),
    totalCount: getTotalCountState(state),
    SearchText: getSearchTextState(state),
    isLoades: getIsLoadesUsersState(state),
    isFollowing: getIsFollowingState(state)
})

export default compose(
    connect(mapstateToProps, {
        getUserThunkCreator,
        toggleFollowerStatus,
        getPageNumber,
        getSearchText
    }),
)(UsersClass);