import React, {useState} from 'react'
import EditorModeProfileForm from "./ProfileEditorForm/ProfileEditorForm";

const ProfileEditor = ({authLogin, profileData, putProfileDataThunkCreator, ...props}) => {
    //Local state
    const [editorProfileMode, profileEditState] = useState(false)

    //Sending changes profile data
    const updateProfile = object => {
        putProfileDataThunkCreator({object})
    }
    return <div>
        {authLogin === profileData.fullName &&
            <div style={{float: "right"}}>
                {
                    editorProfileMode ?
                        <button
                            className={'buttonDefault'}
                            style={{borderColor: editorProfileMode ? 'red' : 'white'}}
                            onClick={() => profileEditState(false)}
                        >Edit profile: Close</button>
                        :
                        <button
                            className={'buttonDefault'}
                            onClick={() => profileEditState(true)}
                        >Edit profile: Open</button>
                }
                {
                    editorProfileMode &&
                    <EditorModeProfileForm profileData={profileData} initialValues={profileData} onSubmit={updateProfile}/>
                }
            </div>
        }
    </div>
}

export default ProfileEditor