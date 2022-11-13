import React from 'react'
import style from "../Style/Github.module.css"



const GIthub = () => {
  return (
    <div className={style.githubcontainer}>

    <div  className='streak' style={{display:"inline",width:"85%"}} >
    <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=abhiamber&" alt="abhiamber" width="55%"/></p>

    </div>


    <div  className='github stats' style={{display:"inline",width:"85%"}} >

    <p><img align="center" src="https://github-readme-stats.vercel.app/api?username=abhiamber&show_icons=true&locale=en" alt="abhiamber" width="55%"/></p>

    
    </div>


<div  className='graph'>
<p><img  src='https://activity-graph.herokuapp.com/graph?username=abhiamber' alt='abhi' width="85%" /></p>
</div>


<div className='contribution' style={{width:"85%",margin:"auto"}}>
<p><img  src='https://metrics.lecoq.io/abhiamber' alt='abhi' width="85%"/></p>
</div>





    </div>
  )
}

export default GIthub