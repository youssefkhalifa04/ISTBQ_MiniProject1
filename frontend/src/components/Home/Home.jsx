import React from 'react'


import { Footer } from '../footer/Footer'
import { Context } from '../../App'
import { useContext } from 'react'
import { Settings } from '../header/settings/Settings'

export const Home = () => {
  const [profile , setProfile] = useContext(Context);
  // setProfile("hello world");
  return (
    <div>
        
          <Settings />
        <Footer/>
        
    </div>
  )
}
