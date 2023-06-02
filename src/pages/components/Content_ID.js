import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css_pages/Content_ID.css'

function Content_ID() {
    return <>
        <div id='introduceContent'>
            <div>
                <h2 className='section-title section-title-center'>
                    <b></b>
                    <span className='section-title-main'>GIỚI THIỆU</span>
                    <b></b>
                </h2>
            </div>
            <div className='Content'>
                <p className='Content-Tilte'>Chào mừng bạn đến với Agri Mate <br></br> Agri Mate là nơi chuyên cung cấp các hướng dẫn điều trị bệnh cây trồng.</p>    
                <div className='SubContent'>
                    <div className='SubContent-Left'>
                        <img src="./webImage/gioithieu.jpg" alt="ảnh"></img>
                    </div>
                    <div className='SubContent-Right'>
                        <p className='SubContent-Tilte'>“Trang web chúng tôi cung cấp tất cả các thông tin, từ những bệnh thông thường đến những bệnh hiếm gặp, từ những cách chữa trị bệnh truyền thống đến những phương pháp mới nhất.”</p>
                    </div>
                </div>
                <div className='SubContent'>
                    <div className='SubContent-Left'> 
                        <p className='SubContent-Tilte'>“Chúng tôi hi vọng sẽ giúp bạn giải quyết các vấn đề liên quan đến sức khỏe của cây trồng của mình, từ đó đạt được năng suất và chất lượng cao nhất.”</p>
                    </div>
                    <div className='SubContent-Right'>
                        <img src="./webImage/gioithieu2.jpg" alt="ảnh"></img>
                    </div>
                </div>
                <p className='Content-Tilte'>Chúng tôi cam kết sẽ cung cấp cho bạn những hướng dẫn chính xác, hữu ích và dễ hiểu nhất.</p>
            </div>
        </div>
    </>
}


export default Content_ID