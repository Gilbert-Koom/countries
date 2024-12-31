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
			const data= await fetch('https://restfulcountries.com/api/v1/countries');
			const res= await data.json();
			console.log(res);
			return res;


		}
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>

	</StrictMode>
)
