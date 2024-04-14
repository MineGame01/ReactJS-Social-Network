import React, {useState} from 'react'
import style from './UserContacts.module.scss'

const UserContacts = (props) => {
    const {
        profileData, isAuthUser,
        isChatting, startChattingUserByIdThunkCreator
    } = props

    const [isViewContacts, isChangeViewContacts] = useState(false) //Local state

    const onViewContacts = () => { //Opening and close view contacts
        isChangeViewContacts(!isViewContacts)
    }

    return <div>
        {
            isViewContacts ?
                <button style={{borderColor: isViewContacts ? 'red' : 'white'}} className={'buttonDefault'}
                        onClick={onViewContacts}>Hide
                    contacts</button> :
                <button className={'buttonDefault'} onClick={onViewContacts}>Show
                    contacts</button>
        }

        {isViewContacts && <div className={style.contactsMenu}>
            {Object.keys(profileData.contacts).map(key => {
                return <div key={key}><b>{key}:</b> {profileData.contacts[key] ?
                    <a href={profileData.contacts[key]}>{profileData.contacts[key]}</a> : 'No link!'}</div>
            })}
        </div>}

        {!isChatting && !isAuthUser && <button
            onClick={() => startChattingUserByIdThunkCreator(profileData.userId)}
            className={'buttonDefault'}
        >Start chatting</button>}
    </div>
}

export default UserContacts