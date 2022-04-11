

import React from "react";
import { useEffect } from "react";

export const PersonSelector = (props)=>{



    useEffect(() => {

document.getElementById('target-box').classList.add('horizontal-shake')

setTimeout(()=>{
    document.getElementById('target-box').classList.remove('horizontal-shake')

  }, 200)
        
    }, [props.wrong])


return (





<div id="target-box" className="person-selector-dropdown-container" style={{left:  `${props.position[0] - 20 }px`, top: `${props.position[1] - 20 }px`}}>
<div className="target-box"></div>

    </div>)}

