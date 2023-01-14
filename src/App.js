import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Posts from './components/Posts'

const App = () => {
    return (
        <div className="App">    
            <Header />
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/big-o-notation' element={<Posts />} />
            </Routes>
        </div>
    )
}

export default App
