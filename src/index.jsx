import React from 'react'
import ReactDOM from 'react-dom/client'
import '@components/styles/index.scss';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { 
	AboutUs,
	BecomeAPartner,
	Enquiry,
	Home,
	Login,
	Products
} from './routes';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Home />,
	},
	{
	  path: "/aboutUs",
	  element: <AboutUs />,
	},
	{
	  path: "/products",
	  element: <Products />,
	},
	{
	  path: "/becomeAPartner",
	  element: <BecomeAPartner />,
	},
	{
	  path: "/enquiry",
	  element: <Enquiry />,
	},
	{
	  path: "/login",
	  element: <Login />,
	},
	
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
