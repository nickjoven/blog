import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className='header'>
            <div className='header-icons'>
                <a className='redirect' href='https://github.com/nickjoven'>
                    <img className='icon' src='https://nickjoven.github.io/blog/githubwhite.png' />
                </a>
                <a className='redirect' href='https://www.linkedin.com/in/nick-joven/'>
                    <img className='icon' src='https://nickjoven.github.io/blog/linkedinwhite.png' />
                </a>
                <a className='redirect' href='https://nickjoven.github.io/earworm-react/'>
                    <img className='icon' src='https://nickjoven.github.io/blog/eighth.png' />
                </a>
                <div className='redirect' onClick={handleClick}>
                    <img className='icon' src='https://nickjoven.github.io/blog/house.png' />
                </div>
            </div>
        </div>
    )
}

export default Header