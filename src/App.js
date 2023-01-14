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
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/posts/:title' element={<Post />} />
            </Routes>
        </div>
    )
}

export default App
