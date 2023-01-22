import React, { useEffect, useState } from 'react'
import BlogCard from '../../components/HomeBlogCard'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNav } from '../../context/NavContext';
import { getAllBlogsFromDb } from '../../redux/actions/GetAllBlogs';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CallIcon from '@mui/icons-material/Call';

function Landing() {
    const dispatch = useDispatch()
    const {blogList} = useSelector(state => state.blog)
    const {userInfo} = useSelector(state => state.userAuth)
    const {setEmail,email} = useNav()

    useEffect(() => {
        setEmail('')
        dispatch(getAllBlogsFromDb())
    }, [])
    
    
  return (
    // entire landing page
    <div className='font-manrope flex flex-col gap-16'> 
        <section className='flex flex-col md:flex-row w-full items-center pt-4 md:pt-16 justify-between gap-8 md:gap-0'>
            <div className='flex flex-col gap-2 items-start justify-center text-left' style={{flexBasis:'50%'}}>
                <p className='text-green-600 tracking-[1px] font-semibold '>MEDEASY</p>
                <h1 className='text-3xl md:text-5xl font-extrabold md:leading-normal'>Healthcare Solutions for a Better Life</h1>
                <p className=' text-xs md:text-sm md:max-w-[90%] py-4 text-gray-800 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                {!userInfo?.username && <div className='overflow-hidden flex flex-row items-center rounded-md w-full md:w-[70%] shadow-md' >
                    <input onChange={(e)=>setEmail(e.target.value)} className='w-[80%] p-4 focus:outline-none font-manrope' type='email' placeholder='Enter your email' value={email}/>
                    <Link to={'/user-authentication/signup'} className='bg-green-600 p-4 text-white text-center w-[40%]'>Get Started</Link>
                </div>}
            </div>
            <div style={{flexBasis:'50%'}}>
            <div className=' w-full relative'>
               <div className='w-10 absolute top-0 left-0 bg-yellow-300' style={{aspectRatio:1,zIndex:-1}}></div>
               <div className='w-20 absolute top-0 right-0 bg-yellow-300' style={{aspectRatio:1,zIndex:-1}}></div>
               <div className='w-20 absolute bottom-0 left-0 bg-yellow-300' style={{aspectRatio:1,zIndex:-1}}></div>
               <img draggable={false} className='m-auto p-4 md:p-6 z-10 w-full' src='https://cdn10.bigcommerce.com/s-p10g1rn/product_images/uploaded_images/medical-assistant.jpg'/>
            </div>
            </div>
        </section>
        <section className='relative bg-[#111111] text-white py-16 md:p-16 flex flex-col md:flex-row gap-4 md:gap-16 md:rounded-tr-[10em]'>
            <div className='absolute w-full h-full top-0 -left-[100%] bg-[#111111]' style={{zIndex:-1}}></div>
            <div className='flex flex-col gap-2 items-start justify-center text-left' style={{flexBasis:'50%'}}>
                <h2 className='text-5xl font-medium md:leading-snug'>Healthcare the way you want it. Simple, convinient and reliable.</h2>
            </div>
            <div style={{flexBasis:'50%'}}>
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    <div className='flex w-full items-center justify-between'>

                    </div>
                </div>
            </div>
            <div className='w-[70px] p-2 bg-red-600  right-2 -top-10 md:-top-2 rounded-full flex items-center justify-center absolute text-white' style={{aspectRatio:1}}><KeyboardVoiceIcon sx={{size:'36px'}}/></div>
            <div className='w-[80px] p-2 bg-green-600  left-2 -bottom-12 md:-bottom-10 rounded-full flex items-center justify-center absolute text-white' style={{aspectRatio:1}}><CallIcon sx={{size:'42px'}}/></div>
        </section>
        <section className='flex flex-col items-center pb-8'>
            <h2 className='capitalize text-2xl md:text-5xl text-center'>Get more important information about health</h2>
            <div className='font-manrope flex flex-col md:flex-row flex-wrap gap-2 md:gap-16 md:p-8'>
            {blogList?.slice(0,3)?.map((blog) => (
                <BlogCard key={blog._id} blog={blog}/>
            ))}
            </div>
            <Link className='p-3 rounded bg-green-600 text-white flex items-center' to='/blog'>View All Blogs <ArrowOutwardIcon className='p-1'/></Link>
        </section>
    </div>
  )
}

export default Landing