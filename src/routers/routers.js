import App from "../App";
import Profile from "../components/Profile/Profile";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import React from "react";
import Loader from "../components/common/Loader/Loader";
import DialogsContainer from "../components/Dialogs/DialogsContainer";

const ResponseErrorPage = React.lazy(() => import("../components/common/ResponseErrorPage/ResponseErrorPage"));
const LoginContainer = React.lazy(() => import("../components/Login/LoginContainer"));
const UsersContainer = React.lazy(() => import("../components/Users/UsersContainer"));

const withSuspense = Component => {
    const Suspense = props => {
        return <React.Suspense fallback={<Loader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
    return Suspense()
}

export const routers = () => {
    return [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/profile/:userId',
                    element: <Profile />,
                },
                {
                    path: '/profile/*',
                    element: <Profile />,
                },
                {
                    path: '/dialogs/*',
                    element: <DialogsContainer />
                },
                {
                    path: '/dialogs/:dialogIdUrl/*',
                    element: <DialogsContainer />
                },
                {
                    path: '/news/*',
                    element: <News />,
                },
                {
                    path: '/music/*',
                    element: <Music />,
                },
                {
                    path: '/settings/*',
                    element: <Settings />,
                },
                {
                    path: '/users/*',
                    element: withSuspense(UsersContainer)
                },
                {
                    path: '/users/:pageNumber',
                    element: withSuspense(UsersContainer)
                },
                {
                    path: '/login',
                    element: withSuspense(LoginContainer)
                },
                {
                    path: '/*',
                    element: withSuspense(() => <ResponseErrorPage routerError={404}/>)
                }
            ]
        }
    ]
}