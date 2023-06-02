import '../css_pages/Banner.css'
import '../responsive_pages/Banner.css'
import Button from './Button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Banner(){
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 60000);
    return () => clearInterval(interval);
    }, [imageIndex]);
    return <div id='banner' style={{
                                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageBG[imageIndex].src})`,
                                backgroundPosition: 'top center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>

        <div className='content'>
            <div className='content_introduce'>
                <h1 className='content_heading'>Trang Thông Tin Nông Nghiệp</h1>
                <p className='content_logo_1'>Agri &nbsp;</p>
                <p className='content_logo_3'>Mate</p>
                <Link to='/IntroducePage'>
                    <button class="content_learn-more-btn" type="button">
                        <strong>TÌM HIỂU</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>              
                </Link>
            </div>
        </div>
    </div>
}



const imageBG = [
    {src:'./webImage/S4E8_banner.jpg'},
    {src:'./webImage/banner_img4.jpg'},
    {src:'./webImage/unnamed.jpg'},
    {src:''},
]
export default Banner;