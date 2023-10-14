import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
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
	Products,
	Profile
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
	{
	  path: "/profile",
	  element: <Profile />,
	},
	
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
