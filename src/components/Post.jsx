import { useMemo } from 'react'
import Markdown from './Markdown'
import { useParams } from 'react-router-dom'

const Post = () => {
    const params = useParams()
    
    const file = useMemo(() => {
        return `/${params.title}.md`
    }, [params])
    return (
        <div className='post-container'>
            <Markdown file={file} />
        </div>
    )
}

export default Post