import Markdown from './Markdown'

const files = ['BigO.md']
const Posts = () => {
    return (
        <div className='posts'>
            {files?.map((file) => {
                return (
                    <Markdown file={file} />
                )
            })}
        </div>
    )
}

export default Posts