import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootStore } from '../../utils/TypeScript'

const SideBar = () => {
const { homeBlogs } = useSelector((state: RootStore) => state)

  return (
        <div className="sidebar ">
         <div className="d-flex justify-content-center border-left border-muted border-2">
            <div className="position-fixed">
              <h3 className="text-center mt-4 text-dark">Category</h3>
              <hr className="border border-dark border-2"></hr>
              <ul className="mt-3">
                  {
                    homeBlogs.map(homeBlog =>(
                        <li className="d-flex justify-content-center">
                            <Link to={ `/blogs/${(homeBlog.name).toLowerCase()}` }>
                                { homeBlog.name }
                            </Link>
                        </li>
                    ))
                }
              </ul>
          </div>
         </div>
        </div>
        // {/* <div classNameName="sidebar-content mt-5" style={{ margin:'0 auto'}} >
        //     <h3 classNameName="text-center">Categories</h3>
        //     <ul>
        //     {
        //         homeBlogs.map(homeBlog =>(
        //             <li>
        //                 <Link to={ `/blogs/${(homeBlog.name).toLowerCase()}` }>
        //                     { homeBlog.name } <small>({ homeBlog.count })</small>
        //                 </Link>
        //             </li>
        //         ))
        //     }
        //     </ul>
        // </div> */}

  )
}

export default SideBar