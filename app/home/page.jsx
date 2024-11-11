"use client"


import React, { useState } from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
import MySlider from "../../common/Slider"
import Time from '@/componets/time';



const slides = [
  { src: '/screen.png', alt: 'Slide 1' },
  { src: '/screen.png', alt: 'Slide 2' },
  { src: '/screen.png', alt: 'Slide 3' },
  { src: '/screen.png', alt: 'Slide 4' },
  { src: '/screen.png', alt: 'Slide 5' },
];



const settings = {
  dots: false,
  infinite: slides?.length > 4 ? true : false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

};



export default function Home() {

  const [flag,setFlag] = useState()
  return (
    <>
         <div className={styles.banner}>
      <div className='max-w-[1366px] mx-auto w-[90%]'>
        <div className='flex justify-between items-center mb-[30px]'>
          <div className='flex items-center w-[220px] justify-between  max-800:hidden'>
            <div className=''>
              <Image
                className={""}
                src="/circle.png"
                alt="Next.js"
                width={50}
                height={50}

              />
            </div>

            <div className='relative'>
              <Image
                className={""}
                src="/timer.png"
                alt="Next.js"
                width={120}
                height={60}

              />

              <Image
                className={styles.timer}
                src="/num.png"
                alt="Next.js"
                width={120}
                height={60}

              />

              <Image
                className={styles.plusicon}
                src="/PlusCircle.png"
                alt="Next.js"
                width={120}
                height={60}

              />



            </div>
          </div>


          <div className='w-[400px]  max-800:w-[180px]'>
            <Image
              className={""}
              src="/logopage.png"
              alt="Next.js"
              width={300}
              height={100}

            />
          </div>


          <div className='flex items-center gap-[15px]'>
            <Image
              className={""}
              src="/iconarrow.png"
              alt="Next.js"
              width={40}
              height={40}

            />


            <Image
              className={""}
              src="/menubar.png"
              alt="Next.js"
              width={40}
              height={40}
              onClick={()=>{setFlag(true)}}

            />

            
          </div>
        </div>

        <div className='flex gap-[30px]   items-center max-800:flex-wrap max-800:justify-center'>
          <div className='flex gap-[10px] items-center'>
            <div>
              <Image
                className="w-[95%]"
                src="/tabBar.png"
                alt="Next.js"
                width={300}
                height={500}

              />
            </div>

            <div>
              <Image
                className="w-[100%]"
                src="/viking.png"
                alt="Next.js"
                width={300}
                height={200}

              />
            </div>
          </div>

          <div>
            <div className='mb-4'>
              <MySlider settings={settings}>
                {
                  slides?.map((elem, index) => {
                    return (
                      <Image
                        key={index}
                        src={elem?.src}
                        alt="Next.js"
                        width={300}
                        height={200}

                      />
                    )
                  })
                }
              </MySlider>
            </div>

            <div>
              <MySlider settings={settings}>
                {
                  slides?.map((elem, index) => {
                    return (
                      <Image
                        key={index}
                        src={elem?.src}
                        alt="Next.js"
                        width={300}
                        height={200}

                      />
                    )
                  })
                }
              </MySlider>
            </div>

          </div>
        </div>
      </div>
    </div>

{
    flag &&  <Time setFlag={setFlag}/>
}
   
    </>
   



  )
}
