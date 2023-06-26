import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className="post">
        <Link to={`/post/${post.id}`} className='Links'>
            <h2>
                {post.title}
            </h2>
        </Link>
            <Link className='postGithub' to={post.githublink}> view code</Link>
            <p className='postBody'> 
                {
                    (post.body).length <=20 ? post.body:`${(post.body).slice(0,25)}...`
                }
            </p>
    </article>
  )
}

export default Post