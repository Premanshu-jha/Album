import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


export default function ExpandablePanel({header,children}){

    const [expanded,setExpanded] = useState(false);


    return <div className='mb-2 border rounded'>
    <div className='flex p-2 justify-between items-center'>
        <div className='flex flex-row justify-between items-center'>
          {header}
        </div>
        <div onClick={()=>setExpanded(!expanded)} className='cursor-pointer'>
           {expanded? <GoChevronDown /> : <GoChevronLeft /> }
          </div>
        </div>

        <div className='p-2 border-t'>
              {expanded && children}
            </div>

        </div>
        
}