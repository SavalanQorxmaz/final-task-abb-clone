import React from 'react'

import { useSelector } from 'react-redux'
import { selectScreenW } from '../../screenSlice'

const KorporativStaticSlider1 = () => {

    const screenW = useSelector(selectScreenW)


  return (
  
   <>
    {
       ( screenW === 'web') ? 
        <div className='grid grid-cols-2 gap-4 h-96 overflow-hidden mt-20'>
        <div className=' bg-gray-100 h-96 flex justify-end'>
           <div className='max-w-2xl flex h-full items-end '>
           <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
           <div className=''>
                <h2 className='text-2xl font-bold mb-6'>Məsafədən korporativ hesab</h2>
                <p>Korporativ hesabınızı banka gəlmədən açın</p>
            </div>
            <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer"></i>
           </div>
            <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/korporativ/onlayn_hesab_ac.png'} alt="" />
        
           </div>
           </div>
        <div className=' bg-blue-100 flex h-96 '>
           <div className='max-w-2xl h-full flex items-end'>
           <div className='w-1/2 h-full p-12  flex flex-col justify-between'>
           <div className=''>
            <h2 className='text-2xl font-bold mb-6'>InternetBank</h2>
            <p>Bir toxunuşla bankınız hər zaman yanınızda</p>
            </div>
            <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer"></i>
           </div>

            <img className='object-contain h-4/5  w-1/2' src={process.env.PUBLIC_URL + 'images/korporativ/laptop_man-01.png'} alt="" />
            
        
           </div>
           </div>
        
            </div>
            :
           <div className='relative w-full h-64 overflow-hidden overflow-x-auto p-4'>
             <div className='absolute flex w-3/4 h-52 '>
              
              <div className='min-w-full mr-5 flex h-full justify-between items-end bg-gray-100'>
              <div className='w-1/2 h-full  flex flex-col justify-between'>
       
                   <h2 className='text-sm font-bold m-6'>Məsafədən korporativ hesab</h2>
                
               <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer m-6"></i>
              </div>
               <img className='object-contain h-4/5 ' src={process.env.PUBLIC_URL + 'images/korporativ/onlayn_hesab_ac.png'} alt="" />
           
              </div>
              
           <div className='min-w-full flex h-full justify-between items-end bg-blue-100 '>
              <div className='w-1/2 h-full  flex flex-col justify-between'>
             
               <h2 className='text-sm font-bold m-6'>InternetBank</h2>
              
               <i className="fa-solid fa-arrow-right text-2xl hover:text-blue-700 hover:cursor-pointer m-6"></i>
              </div>
   
               <img className='object-contain h-4/5 ' src={process.env.PUBLIC_URL + 'images/korporativ/laptop_man-01.png'} alt="" />
               
           
              
              </div>
               </div>
           </div>
    }
   </>
  )
}

export default KorporativStaticSlider1