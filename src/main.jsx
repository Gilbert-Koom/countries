import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
	{
		path:'/',
		element:<App />,
		loader: async()=>{
			const data= await fetch('https://restcountries.com/v3.1/lang/spanish');
			const res= await data.json();
			return res;


		}
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>

	</StrictMode>
)
