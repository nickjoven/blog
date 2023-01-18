import { useMemo } from 'react'
import Markdown from './Markdown'
import { useParams } from 'react-router-dom'
import { config } from '../Constants'

const publicUrl = config.url.PUBLIC_URL

const Post = () => {
    const params = useParams()
    
    const file = useMemo(() => {
        return `${publicUrl}${params.title}.md`
    }, [params])
    return (
        <div className='post-container'>
            <Markdown file={file} />
        </div>
    )
}

export default Post