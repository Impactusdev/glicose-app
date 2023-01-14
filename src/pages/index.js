import React from "react"
// image
import Img from '../assets/images/imgHome.png'
// components
import Test from '../components/Test'

const IndexPage = () => {

  return (
    <>
      <div className='flex flex-col w-full bg-[#E5E7EB] sm:w-[500px] sm:h-screen sm:items-center sm:mx-auto'>
        <img src={Img} className="w-full mt-[-50px]"/>
        <div className='flex flex-col py-8 px-6'>
          <div className="mb-7">
            <p>Bem-vindo(a)</p>
            <h1 className='text-3xl font-semibold text-cyan-700'>Exame de Glicemia</h1>
          </div>
          <Test/>
        </div>
      </div>
    </>
  )
}

export default IndexPage
