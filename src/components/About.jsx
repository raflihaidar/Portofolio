import React from 'react'
import MyPhoto from '../img/myphoto.png'

const About = () => {

  const skills = [
    {name : "Vanilla Js"},
    {name : "React Js"},
    {name : "Vue Js"},
    {name : "C"},
  ]
  return (
    <div className='w-4/5 m-auto text-center py-56' id='About'>
        <div className='text-3xl font-semibold mb-5'>About Me</div>
        <div className='flex flex-col xl:flex-row md:justify-evenly items-center gap-5 md:align-middle'>
          <div className="w-4/3 hidden md:block">
            <img src={MyPhoto} alt="gambar" />
          </div>
          <div className='text-justify md:w-1/3'>
            <p className='text-2xl my-2'>My Name is Rafli Haidar Nashif</p>
            <p className='my-2'>
            I have been working as a <span className='text-red-700'>front-end developer </span>since 2022. 
            I’ve always been someone who has both a creative and a logical side.
             When I discovered web design in college, I realized it would be the perfect fit. 
             I could use my creative side to design and my logical side to code. 
             As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.
            </p>
            <p>
              Here are a few technologies i've been working with recently :
            <div className='grid grid-cols-2'>
                {skills.map((item) => {
                  return(
                      <p className='text-red-700'>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-right-circle inline mr-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                          </svg>
                        </span>
                        {item.name}
                      </p>
                  )
                })}
            </div>
            </p>
          </div>
        </div>
    </div>
  )
}

export default About;