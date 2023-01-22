import React,{useCallback, useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { getDoctors } from '../../redux/actions/docActions';
import DoctorCard from '../../components/DoctorCard';

function DoctorList() {
    const {speciality} = useParams()
    console.log(speciality);

    const dispatch = useDispatch()
    const doctor = useSelector(state => state.doctor)

    const getDoctorList = useCallback(() => {
        dispatch(getDoctors(speciality))
    }, [speciality])

    useEffect(() => {
        console.log(speciality);
        getDoctorList()
    }, [speciality])

    console.log('Docs: ',doctor?.doctors);

  return (
    <div className='pt-4 text-black'>
        {doctor?.loading && <p>Loading...</p>}
        {!doctor?.loading && <div className='flex flex-wrap flex-col md:flex-row gap-2 items-stretch justify-center pb-8 gap-4 m-auto md:gap-8'>
            {doctor?.doctors?.map(doc => <DoctorCard doc={doc}/>)}
            {doctor?.doctors?.length === 0 && 
            <div className='w-[60%] flex items-center m-auto'>
            <img draggable={false} src={'https://cdn.dribbble.com/users/1242216/screenshots/9326781/dribbble_shot_hd_-_3_4x.png'} className='w-full'/>
            </div>
            }
        </div>}
    </div>
  )
}

export default DoctorList