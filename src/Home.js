import React from 'react'
import Feed from "./Feed"
import DataContext from './context/DataContext'
import{useContext} from 'react'
const Home = () => {
 const{serachResults}=useContext(DataContext)
  return (
   <main classsName="Home">
    {serachResults.length?(
      <Feed posts={serachResults}/>
    ):(
      <p style={{marginTop:"2rem"}}>
        No posts to display
      </p>
    )}
    <h1></h1>
   </main>
  )
}

export default Home
