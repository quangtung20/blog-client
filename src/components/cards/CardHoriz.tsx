import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteBlog } from '../../redux/actions/blogAction'

import { IBlog, IParams, IUser, RootStore } from '../../utils/TypeScript'


interface IProps {
  blog: IBlog,
}

const CardHoriz: React.FC<IProps> = ({blog}) => {
  const { auth } = useSelector((state: RootStore) => state)
  const { slug } = useParams<IParams>()
  const dispatch = useDispatch()
  const user = blog.user as IUser

  const handleDelete = () => {
    if(!auth.user || !auth.access_token) return;

    if(slug !== auth.user._id) return dispatch({
      type: 'ALERT',
      payload: { errors: 'Invalid Authentication.' }
    })

    if(window.confirm("Do you want to delete this post?")){
      dispatch(deleteBlog(blog, auth.access_token))
    }
  }
  return (
    <div className="card mb-3 border border-secondary border-2" style={{minWidth: "280px"}}>
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
                <small className="text-capitalize fw-bold">
                  by:{
                    (auth.user?._id === slug?auth.user.name:user.name)
                  }
                </small>

                {
                  (slug === auth.user?._id) &&
                  <div style={{cursor: 'pointer'}}>
                    <Link to={`/update_blog/${blog._id}`}>
                      <i className="fas fa-edit" title="edit" />
                    </Link>

                    <i className="fas fa-trash text-danger mx-3" 
                    title="edit" onClick={handleDelete} />
                  </div>
                }

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
