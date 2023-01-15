import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import PostFooter from './PostFooter'

const Markdown = ({ file }) => {
    const [content, setContent] = useState('')

    const navigate  = useNavigate()

    useEffect(() => {
        const getPost = async () => {
            const req = await fetch(file)
            if (req.ok) {
                const res = await req.text()
                setContent(res)
            } else {
                navigate(`/${file.split('https:/nickjoven.github.io/blog')[1].split('.md')[0]}`)
            }
        }
        getPost()
    }, [file])

    return (
        <>
            {content === '' ? (
                null
            ) : (
                <div className='post'>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
                    <PostFooter />
                </div>
            )}   
        </>
    )
}

export default Markdown