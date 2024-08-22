import { NavLink } from "react-router-dom";

export default function Regions(params) {
    return(
        <>
            
            <NavLink>Africa</NavLink>
            <NavLink>America</NavLink>
            <NavLink>Asia</NavLink>
            <NavLink>Europe</NavLink>
            <NavLink to={'europe'}>Oceania</NavLink>
        </>
    )
    
}