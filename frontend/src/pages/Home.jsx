import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Category from '../components/Category'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useUpdateLocationMutation } from '../redux/api/api'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const Home = () => {
  const {user} = useSelector((state)=>state.auth)
  const [updateLocation] = useUpdateLocationMutation()

  useEffect(()=>{
    if (!user) return;
    if(!navigator.geolocation){
      toast.error("geolocation is not supported by your browser")
      return;
    }
    // Ask For a location
    navigator.geolocation.getCurrentPosition(
      async  (position) => {
        try {
          const {latitude, longitude} = position.coords;
         let res =  await updateLocation({
            latitude, 
            longitude
          }).unwrap();
          if(res.success) {
            toast.success("Location Updated successfully")
          } else {
            toast.error(res.message || "Location did not updated")
          }
        } catch (error) {
          toast.error(error?.data?.message || "Failed to update the location")
        }
      },
       
       (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        toast.error("Location permission denied ❌");
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        toast.error("Location unavailable");
      } else if (error.code === error.TIMEOUT) {
        toast.error("Location request timed out");
      } else {
        toast.error("Failed to get location");
      }
    },

    {
      enableHighAccuracy: true, 
      timeout: 10000,           
      maximumAge: 0,            
    }
    )
    
  },[user, updateLocation])
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />

      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
