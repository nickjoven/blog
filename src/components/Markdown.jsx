import { useState, useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import Post from './Post'
import PostFooter from './PostFooter'

const Markdown = ({ file }) => {
    const [content, setContent] = useState('')

    useEffect(() => {
        const getPost = async () => {
            const req = await fetch(file)
            const res = await req.text()
            console.log(res)
            setContent(res)
        }
        getPost()
    }, [file])

    return (
        <>
            {content == '' ? (
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