import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BlogsContainer from './Containers/BlogsContainer'
import Navbar from './Components/Navbar'

class App extends React.Component{
  state = {blogs: []}

  async componentDidMount(){
        const resp = await fetch('http://localhost:5000/blogs')
        const payload = await resp.json()
        this.setState({blogs: payload})
    }
  
  render(){
    return (
    <>
      <Navbar />
      <Route path="/" render={()=> <BlogsContainer blogs={this.state.blogs}/>} />
    </>

  )
  }
  
}


export default App
