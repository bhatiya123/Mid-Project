import React from 'react'
import './aboutd.css'
const Aboutd = () => {
  return (
    <div className='container'>
        <div className="content1 container">
        <h2 className='aboutdhead'>Our Activities</h2>
        <p className='aboutdcontent'>Since its inception, BloodConnect has developed a 360-degree solution to cater to the problem of blood shortage in the country. The model revolves around four focal points:</p>
            <div className="activities">
                <div className="activity">Ensuring continuous, sufficient blood supply to blood banks through blood donation camps and weekly donations</div>
                <div className="activity">Helping those in dire need by operating an emergency 24x7 helpline</div>
                <div className="activity">Increasing awareness by organizing Street Plays, Info-Talks, Competitions</div>
                <div className="activity">Establishing a network of youth across the country to lead the movement</div>
            </div>
        </div>
    </div>
  )
}

export default Aboutd
