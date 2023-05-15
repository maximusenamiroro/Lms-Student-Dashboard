import { useRoutes } from "react-router-dom";

import {
  Feedback,
  Dashboard,
  Community,
  Faq,
  Classroom,
  SharedLayout,
  Task,
  Notification,
} from "../Pages/index";

import Module1 from "../Components/Classroom/Module1";
import Module2 from "../Components/Classroom/Module2";
import Login from "../Pages/auth/Login";
import Editprofile from "../Pages/Editprofile";
import Register from "../Pages/auth/Register";
import Help from "../Pages/Help";
import Congratulation from "../Pages/Congratulation";
import Lesson1 from "../Pages/Lessons/Lesson1"
import Lesson2 from "../Pages/Lessons/Lesson2"



export default function Routes() {
  let element = useRoutes([
    {
      children: [
        {
          element: <SharedLayout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
           
            {
              path: "/community",
              element: <Community />,
            },
            {
              path: "/faq",
              element: <Faq />,
            },
            {
              path: "/feedback",
              element: <Feedback/>,
            },
            {
              path: "/task",
              element: <Task/>,
            },
            {
                path: "/Help",
                element: <Help/>,
              },
              {
                path: "/Editprofile",
                element: <Editprofile/>,
              },
              {
                path: "/Congratulation",
                element: <Congratulation/>,
              },
              {
                path: "/Lesson1",
                element: <Lesson1/>,
              },
              {
                path: "/Lesson2",
                element: <Lesson2/>,
              },
              {
                path: "/Notification",
                element: <Notification/>,
              },
                    
            {
                element: <Classroom />,
                children: [
                  { path: "classroom", element: <Module1 /> },
                  { path: "classroom2", element: <Module2 /> },
                ],
              },
          
          ],
        },
      ],
    },

    {
      children: [
        {
          index: "/",
          element: <Login />,
        },
      ],
    },
    {
        path: "/register",
        element: <Register />,
      },
  ]);

  return element;
}
