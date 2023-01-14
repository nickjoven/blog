import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='not-found'>
            <h1>404, O 404!</h1>
            <p>There's nothing to see here.</p>
            <h3>
                <div className='home-link link' onClick={handleClick}>Take me home</div>
            </h3>

        </div>
    )
}

export default NotFound