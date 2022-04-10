

import React from "react";

export const PersonSelector = (props)=> (

<div className="person-selector-dropdown-container" style={{left:  `${props.position[0]}%`, top: `${props.position[1]}%`}}>
<p>Please select the correct individual</p>
<button>Jesus</button>
<button>Mathew</button>
<button>Mark</button>
<button>Luke</button>
<button>John</button>
<button>Judas</button>

    </div>)

