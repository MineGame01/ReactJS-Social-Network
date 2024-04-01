import ProfileInfo from "./ProfileInfo";
import {act, create} from "react-test-renderer";

describe('Show and hide view edit status', () => {
    test('Show view edit status', () => {
        const component = create(<ProfileInfo profileData={{fullName: 'Test'}} authLogin={'Test'} />)
        const root = component.root
        const span = root.findByType('span')
        act(() => {
            span.props.onDoubleClick()
        })
    })
})