import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IBlog, RootStore } from '../../utils/TypeScript'


interface IProps {
  blog: IBlog
}

const CardHoriz: React.FC<IProps> = ({blog}) => {
   const { auth } = useSelector((state: RootStore) => state)
   console.log(auth.user?.name)
  return (
    <div className="card mb-3" style={{minWidth: "280px"}}>
      <div className="row g-0 p-2">
        <div className="col-md-4" style={{
          minHeight: '150px', overflow: 'hidden', borderRadius:'3px',
        }}>
          {
            blog.thumbnail && 
            <>
              {
                typeof(blog.thumbnail) === 'string'
                ? <Link to={`/blog/${blog._id}`}>
                    <img src={blog.thumbnail} 
                    className="w-100 h-100" 
                    alt="thumbnail" style={{objectFit: 'cover'}} />
                </Link>
                :<img src={URL.createObjectURL(blog.thumbnail)} 
                className="w-100 h-100" 
                alt="thumbnail" style={{objectFit: 'cover'}} />
              }
            </>
          }
          
        </div>
        
        <div className="col-md-8">
          <div className="card-body h-75">
            <h5 className="card-title ">
              <Link to={`/blog/${blog._id}`} style={{
                textDecoration: 'none', textTransform: 'capitalize'
              }}>
                {blog.title}
              </Link>
            </h5>
            <p className="card-text">
              { blog.description}
            </p>
          </div>
          <div className="m-3">
              <p className="card-text d-flex justify-content-between">
                <small className="text-primary text-capitalize fw-bold">
                  by:{auth.user?.name}
                </small>

                <small className="text-muted fw-bold">
                  { new Date(blog.createdAt).toLocaleString().split(',')[1] }
                </small>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardHoriz
