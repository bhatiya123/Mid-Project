import React from 'react'
import Reachus from './contactcomponent/Reachus'
import Contact1 from './contactcomponent/Contact1'
import Contact2 from './contactcomponent/Contact2'
import Map from './contactcomponent/Map'
import BackToTopButton from '../components/BackToTopButton'
import Socialicons from './SocialIcons'
import Contact3 from './contactcomponent/Contact3'


const Contact = () => {
  return (
    <div>
      <Contact1/>
      <Reachus/>
      <Contact2/>
      <Contact3/>
      <Map/>
      <Socialicons/>
      <BackToTopButton />

    </div>
  )
}

export default Contact
