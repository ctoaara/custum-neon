import Layout from "../Layout/Layout";
// import CardData from "../Mock/CardData";
import Home from "../Pages/Home";


export const routes = [
    {
        id: 1,
        path:"/",
        element:<Layout component={<Home/>}/>
    },
    // {
    //     id: 2,
    //     path: "/card",
    //     element: <Layout component={< CardData/>} />
    // }
]