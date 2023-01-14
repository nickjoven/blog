import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div className='not-found'>
            <h1>404, O 404!</h1>
            <h3>
                <div className='home-link' onClick={handleClick}>Take me home</div>
            </h3>

        </div>
    )
}

export default NotFound