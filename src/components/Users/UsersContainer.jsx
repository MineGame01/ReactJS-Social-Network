import React from 'react'
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
import {WithRouter} from "../../hoc/WithRouter";

class UsersClass extends React.Component {
    componentDidMount() {
        const {getUserThunkCreator, PageNumber, SearchText} = this.props
        const urlPageNumber = this.props.router.params.pageNumber
        getUserThunkCreator(urlPageNumber ? urlPageNumber : PageNumber, SearchText)
    }

    updatePageNumber = e => {
        const {getPageNumber, getUserThunkCreator, SearchText} = this.props

        getPageNumber({number: e.target.value});
        getUserThunkCreator(e.target.value, SearchText)
    }

    updateSearchText = e => {
        const {getSearchText, getUserThunkCreator, PageNumber} = this.props

        getSearchText({text: e.target.value});
        getUserThunkCreator(PageNumber, e.target.value)
    }

    postPageNumber = number => {
        const {getPageNumber, getUserThunkCreator, SearchText} = this.props

        getPageNumber({number: number});
        getUserThunkCreator(number, SearchText)
    }

    render() {
        let NumberPage = Math.ceil(this.props.totalCount / this.props.countPage)
        let PageNumber = []
        for (let i = 1; i <= NumberPage; i++) {
            PageNumber.push(i)
        }
        return (
            <div>
                <PageNumberLent
                    NumberPage={NumberPage}
                    PageNumber={PageNumber}
                    PageNumberURL={this.props.PageNumber}
                    postPageNumber={this.postPageNumber}
                />
                <SearchInput
                    PageNumber={this.props.PageNumber}
                    updatePageNumber={this.updatePageNumber}
                    SearchText={this.props.SearchText}
                    updateSearchText={this.updateSearchText}
                />
                {this.props.isLoades ? <Loader /> : <Users
                    users={this.props.users}
                    isFollowing={this.props.isFollowing}
                    toggleFollowerStatus={this.props.toggleFollowerStatus}
                />}
            </div>
        )
    }
}

const mapstateToProps = (state) => {
    return {
        users: getUsersState(state),
        PageNumber: getPageNumberState(state),
        countPage: getCountPageState(state),
        totalCount: getTotalCountState(state),
        SearchText: getSearchTextState(state),
        isLoades: getIsLoadesUsersState(state),
        isFollowing: getIsFollowingState(state)
    }
}

export default compose(
    connect(mapstateToProps, {
        getUserThunkCreator,
        toggleFollowerStatus,
        getPageNumber,
        getSearchText
    }),
    WithRouter
)(UsersClass);