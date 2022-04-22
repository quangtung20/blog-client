import React from 'react'
import { Link} from 'react-router-dom'

import { IBlog } from '../../utils/TypeScript'

interface IProps {
  blog: IBlog
}

const CardVert: React.FC<IProps> = ({blog}) => {
  return (
    <div className="card border border-secondary border-2 mb-5" >
      {
        typeof(blog.thumbnail) === 'string' &&
        <img src={blog.thumbnail} className="card-img-top p-2" alt="..."
        style={{height: '180px', objectFit: 'cover', borderRadius:'11px'}} />
      }

      <div className="card-body">
        <h5 className="card-title ">
          <Link to={`/blog/${blog._id}`} style={{
            textDecoration: 'none', textTransform: 'capitalize'
          }}>
            {(blog.title.length>50)?(blog.title.slice(0,50) + '...'):(blog.title)}
          </Link>
        </h5>
        <p className="card-text">
          { (blog.description.length>100)?(blog.description.slice(0,100) + '...'):(blog.description) }
        </p>
      </div>
      <div className="m-3">
        <p className="card-text d-flex justify-content-between">
          <small className="text-muted text-capitalize fw-bold">
            {
              typeof(blog.user) !== 'string' &&
              <Link to={`/profile/${blog.user._id}`} style={{
                textDecoration: 'none', textTransform: 'capitalize'
              }}>
                By: {blog.user.name}
              </Link>
            }
          </small>

          <small className="text-muted fw-bold">
            { new Date(blog.createdAt).toLocaleString().split(',')[1] }
          </small>
        </p>
      </div>
    </div>
  )
}

export default CardVert
