import React, {useState} from 'react'
import style from './UserContacts.module.scss'

const UserContacts = ({profileData, ...props}) => {
    //Local state
    const [isViewContacts, isChangeViewContacts] = useState(false)

    //Show view contacts
    const applyViewContacts = () => {
        isChangeViewContacts(true)
    }

    //Hide view contacts
    const deapplyViewContacts = () => {
        isChangeViewContacts(false)
    }
    return <div>
        {
            isViewContacts ?
                <button style={{borderColor: isViewContacts ? 'red' : 'white'}} className={'buttonDefault'} onClick={deapplyViewContacts}>Hide
                    contacts</button> :
                <button className={'buttonDefault'} onClick={applyViewContacts}>Show
                    contacts</button>
        }

        {isViewContacts && <div className={style.contactsMenu}>
            {Object.keys(profileData.contacts).map(key => {
                return <div key={key}><b>{key}:</b> {profileData.contacts[key] ? <a href={profileData.contacts[key]}>{profileData.contacts[key]}</a> : 'No link!'}</div>
            })}
        </div>}
    </div>
}

export default UserContacts