import App from "../App";
import Profile from "../components/Profile/Profile";
import DialogsContainer from "../components/Dialogs/DialogsContainer";
import News from "../components/News/News";
import Music from "../components/Music/Music";
import Settings from "../components/Settings/Settings";
import React from "react";
import Loader from "../components/Loader/Loader";

const LoginCotainer = React.lazy(() => import("../components/Login/LoginContainer"))
const UsersContainer = React.lazy(() => import("../components/Users/UsersContainer"))

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
                    path: '/messages/*',
                    element: <DialogsContainer />,
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
                    element: <React.Suspense fallback={<Loader />}>
                        <UsersContainer />
                    </React.Suspense>
                },
                {
                    path: '/users/:pageNumber',
                    element: <React.Suspense fallback={<Loader />}>
                        <UsersContainer />
                    </React.Suspense>
                },
                {
                    path: '/login',
                    element: <React.Suspense fallback={<Loader />}>
                        <LoginCotainer />
                    </React.Suspense>
                },
            ]
        }
    ]
}