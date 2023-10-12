import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import mypic from '../../assets/myimage.png.jpg'
import mine from '../../assets/mypic.jpg'
import can from '../../assets/Untitled design.png'
const intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
           <spna className='hello'>Hello,</spna>
           <span className='introtext'>I'm <span className='introName'>Hariharan </span><br/>React developer</span>
           <p className="introPara">I am a skilled and passionate web developer with proven ability<span><br/> to design and develop JavaScript based application</span></p>
           <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={can} alt='Profile' className='bg'/>
    </section>
  )
}

export default intro
