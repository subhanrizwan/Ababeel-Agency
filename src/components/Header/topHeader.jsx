import { useNavigate } from 'react-router'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function TopHeader() {
    const navigate = useNavigate();

    const ShopNow=()=>{
        navigate('/shop')
    }
  return (
    <>
    <section
    style={{
    background: "linear-gradient(90deg, rgb(120, 96, 252) 0%, rgb(33, 183, 222) 50%, rgb(127, 235, 140) 100%)"
  }}
     className='top-header w-full text-white p-5 text-center text-xs lg:text-lg md:text-sm'>
        <p>⚡ Hurry! Last Chance for Scholarship - Enroll before 20th Jul ⚡️ <a className='text-black' href=""><b onClick={ShopNow}> Apply Now {" "}
        <ArrowOutwardIcon fontSize="small"  />
 </b></a>  </p>
    </section>
    </>
  )
}

export default TopHeader