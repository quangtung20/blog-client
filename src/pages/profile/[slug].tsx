import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IParams, RootStore } from '../../utils/TypeScript'

import UserInfo from '../../components/profile/UserInfo'
import OtherInfo from '../../components/profile/OtherInfo'
import UserBlogs from '../../components/profile/UserBlogs'

const Profile = () => {
  const { slug }: IParams = useParams()
  const { auth } = useSelector((state: RootStore) => state)
  const [checkOther,setCheckOther] = useState(false)
  if(auth.user?._id === slug){
    setCheckOther(true)
  }
  return (
    <div className="row my-3">
      <div className="col-md-5 mb-3">
        {
          checkOther
          ? <UserInfo />
          : <OtherInfo id={slug} />
        }
      </div>

      <div className="col-md-7">
        <UserBlogs check={checkOther} />
      </div>
    </div>
  )
}

export default Profile
