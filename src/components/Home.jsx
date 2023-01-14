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
            <p>There's not a lot here right now!</p>
            <h2>Articles</h2>
            {posts?.map((post) => {
                const {title, url, postDate} = post
                return (
                    <h3 key={title} className='slim link' onClick={(() => handleClick(url))}>{title}</h3>
                )
            })}
        </div>
    )
}

export default Home