import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Post from './components/Post'

const App = () => {
    return (
        <div className="App">    
            <Header />
            <Routes>
                <Route path='/blog/*' element={<NotFound />} />
                <Route path='/blog' element={<Home />} />
                <Route path='/blog/posts/:title' element={<Post />} />
            </Routes>
        </div>
    )
}

export default App
