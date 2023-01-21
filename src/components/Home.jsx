import postData from '../postData.json'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getPosts = async () => {
            const req = JSON.stringify(postData)
            const res = await JSON.parse(req)
            setPosts(res)
        }
        getPosts()
    }, [])

    const handleClick = (url) => {
        navigate(`posts/${url}`)
    }
    return (
        <div className='home'>
            <p>I'm up to THREE posts!</p>
            <h2>Articles</h2>
            {posts?.sort((a, b) => new Date(b.postDate) - new Date(a.postDate)).map((post) => {
                const {title, url, postDate} = post
                return (
                    <div key='url' className='post-card'>
                        <h3 key={title} className='slim link post-card-title' onClick={(() => handleClick(url))}>{title}</h3>
                        <p>{new Date(postDate).toDateString()}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home