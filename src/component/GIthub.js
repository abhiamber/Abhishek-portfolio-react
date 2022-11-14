import React from 'react'
import style from "../Style/Github.module.css"
import GitHubCalendar from 'react-github-calendar';



const GIthub = () => {
  return (
    <div className={style.githubcontainer}>

    <h1> GitHub Statistics & Calender section</h1>

    <div  className='streak' >
    <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=abhiamber&" alt="abhiamber" width="55%"/></p>

    </div>


    <div  className='github stats'  >

    <p><img align="center" src="https://github-readme-stats.vercel.app/api?username=abhiamber&show_icons=true&locale=en" alt="abhiamber" width="55%"/></p>

    
    </div>

    
<div className='contribution' style={{width:"85%",margin:"auto",padding:"20px 0px"}}>
<GitHubCalendar username="abhiamber" year={new Date().getFullYear()} style={{width:"85%",margin:"auto"}} /></div>


<div  className='graph'>
<p><img  src='https://activity-graph.herokuapp.com/graph?username=abhiamber' alt='abhi' width="85%" /></p>
</div>







    </div>
  )
}

export default GIthub