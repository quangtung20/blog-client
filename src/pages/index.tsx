import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootStore } from '../utils/TypeScript'

import CardVert from '../components/cards/CardVert'
import Loading from '../components/global/Loading'

const Home = () => {
  const { homeBlogs } = useSelector((state: RootStore) => state)


  if(homeBlogs.length === 0) return <Loading />;
  return (
    <div className="home_page">
      {
        homeBlogs.map(homeBlog => (
          <div key={homeBlog._id}>
            {
              homeBlog.count > 0 &&
              <>
                <h3>
                  <Link to={ `/blogs/${(homeBlog.name).toLowerCase()}` }>
                    { homeBlog.name } <small>({ homeBlog.count })</small>
                  </Link>
                </h3>
                <hr className="mt-1 mb-4 border border-2 border-dark " />

                <div className="home_blogs">
                  {
                    homeBlog.blogs.map(blog => (
                      <CardVert key={blog._id} blog={blog} />
                    ))
                  }
                </div>

              </>
            }

            {
              homeBlog.count > 2 && 
              <Link className="text-end d-block mt-2 mb-3 
              text-decoration-none"
              to={`/blogs/${homeBlog.name}`}>
                <button className="btn btn-outline-secondary border border-secondary border-2">
                  Read more
                </button>

              </Link>
            }
          </div>
        ))
      }
    </div>
  )
}

export default Home


