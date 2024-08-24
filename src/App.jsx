import { NavLink, Outlet, useLoaderData, useSearchParams } from "react-router-dom"


export default function App(){

  const data=useLoaderData()
  const [searchParams,setSearchParams]=useSearchParams()
  //The regionFilter variable is used to filter the countries
  const regionFilter=searchParams.get('region')
  console.log(regionFilter)

  const displayedRegions= regionFilter ? data.filter(country => country.region.toLowerCase() === regionFilter) :data



  return(
    <>
      <Outlet />
      <button onClick={()=>setSearchParams({region:'africa'})}>Africa</button>
      <button onClick={()=>setSearchParams({region:'americas'})}>America</button>
      <button onClick={()=>setSearchParams({region:'antarctic'})}>Antarctic</button>
      <button onClick={()=>setSearchParams({region:'asia'})}>Asia</button>
      <button onClick={()=>setSearchParams({region:'europe'})}>Europe</button>
      <button onClick={()=>setSearchParams({region:'oceania'})}>Oceania</button>
      
      
      <ul className="all:pt-2">
        {
          displayedRegions.map((country)=><NavLink key={country.name.common}>

            <img src={country.flags.png} alt="" />

            <p>{country.name.common}</p>
            <p>Population: {country.population} </p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            
          </NavLink>)
        }
      </ul>
      

    </>
  )
}