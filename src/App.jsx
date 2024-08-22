import { Outlet, useLoaderData } from "react-router-dom"
import Regions from "./Layout"


export default function App(){
  const data=useLoaderData()

  return(
    <>
      <Regions />
      
      
      <ul className="all:pt-2">
        {
          data.map((country)=><li key={country.name.common}>

            <img src={country.flags.png} alt="" />

            <p>{country.name.common}</p>
            <p>Population: {country.population} </p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            
          </li>)
        }
      </ul>
    </>
  )
}