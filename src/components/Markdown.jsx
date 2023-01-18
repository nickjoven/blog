import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw'
import PostFooter from './PostFooter'

const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
                {...props}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    },
}

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
                navigate('404')
            }
        }
        if (file != undefined) {
            getPost()
        }
    }, [file])

    return (
        <>
            {content === '' ? (
                null
            ) : (
                <div className='post'>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} components={CodeBlock} />
                    <PostFooter />
                </div>
            )}   
        </>
    )
}

export default Markdown