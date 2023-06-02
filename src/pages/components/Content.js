import '../css_pages/Content.css'
import Button from './Button'
import React, { useEffect, useState } from 'react';

function Content(){
    const [type, setType] = useState('AT01');
    const [plant, setPlant] = useState([]);
    const [currentPlantDisease, setCurrentPlantDisease] = useState([]);//lấy ra danh sách bệnh của một loại cây trồng
    const [plantDiseases, setPlantDiseases] = useState([]);//Lấy toàn bộ danh sách bệnh
    const [harmfulInsects, setHarmfulInsects] = useState([]);
    const [numArticles, setNumArticles] = useState(2);
    const [typeButton, setTypeButton] = useState('BT01');
    const increment = 3;
    const buttonID = ["BT01", "BT02", "BT03"];
    const getImage = (id) => {
        var src = "";
        for (var i = 0; i < plant.length; i++) {
            if (plant[i].id === id) {
                src = plant[i].img;
            }
        }
        return src;
    }
    const handleShowMore = () => {
        setNumArticles(numArticles + increment);
    }

    const handleInsect = (id) => {
        const plantObj = plant.find(item => item.id === id);
        if (plantObj) {
            const plantInsectsIds = plantObj.HI.map(item => item.id);
            const commonInsects = harmfulInsects.filter(item => plantInsectsIds.includes(item.id));
            setCurrentPlantDisease(commonInsects);
        }
    }

    const handleDisease = (id) => {
        const plantObj = plant.find(item => item.id === id);
        if (plantObj) {
            const plantDiseaseIds = plantObj.PD.map(item => item.id);
            const commonDiseases = plantDiseases.filter(item => plantDiseaseIds.includes(item.id));
            setCurrentPlantDisease(commonDiseases);
        }
    }

    const handleGeneral =(id)=>{
        setCurrentPlantDisease([]);
    }
    useEffect(() => {
        fetch('./data_plants.json')
            .then(res => res.json())
            .then((data) => {
                setPlant(data.Plants);
                setPlantDiseases(data.PlantDiseases);
                setHarmfulInsects(data.HarmfulInsects);
            })
    }, [])

    const [startIndex, setStartIndex] = useState(0); // Vị trí bắt đầu hiển thị của danh sách button
  
    const handleScrollLeft = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  
    const handleScrollRight = () => {
      if (startIndex < plant.length - 5) {
        setStartIndex(startIndex + 1);
      }
    };

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return <div id='content'>
        <div className='heading'>
            <h1>Danh mục cây trồng</h1>
            <span className='heading_Triangle'></span>
            <span className='heading_foot'></span>
        </div>
        <div className='content_category'>
            <ul className='content_category_plans'>
                {plant.slice(startIndex, startIndex + 5).map((value, index) => {
                    return <button key={index} className='btn_plan' style={type === value.id ? { backgroundColor: '#00a651' } : {}} onClick={() => { setType(value.id); handleGeneral(value.id); setNumArticles(2);setTypeButton('BT01') }}>
                        <img src={value.img} />
                        <p className='name_plant'>{value.name}</p>
                        <p className='sname_plant'>{value.sname}</p>
                    </button>
                })}
            </ul>
            <div className='btn_nav_LR'>
                <button onClick={handleScrollLeft} className='button_left'>{"<"}</button>
                <button onClick={handleScrollRight} className='button_right'>{">"}</button>
            </div>
        </div>
        <div className='foot'></div>
        <div className='content_plants_disease'>
            <div className='content_plants_disease_article'>
                {currentPlantDisease.length > 0 ? (
                    currentPlantDisease.slice(0, numArticles).map((value, index) => {
                        return (
                            <div key={index} className='article_plant_disease'>
                                <h2 className='article_plant_disease_heading'>{value.PDname || value.Iname}</h2>
                                <p className='article_plant_disease_dec'>Tên khoa học: {value.SIname}</p>
                                <p className='article_plant_disease_dec'><p style={{ fontWeight: 'bold' }}>Dấu hiệu nhận biết:</p> {value.content}</p>
                                <img src={value.image} className='article_plant_disease_image' alt={"Hình ảnh " + value.PDname}/>
                                <p className='article_plant_disease_prevent'><p style={{ fontWeight: 'bold' }}>Biện pháp phòng trừ:</p> {value.PreventiveMeasures.map(item => <li>{item}</li>)}</p>
                            </div>
                        );
                    })
                ) : (
                    plant.map((value, index) => {
                        if (value.id === type) {
                            return (
                                <div className='article_plant_disease' key={index}>
                                    <h2 className='article_plant_disease_heading'>{value.name}</h2>
                                    <p className='article_plant_disease_dec'>Tên khoa học: {value.sname}</p>
                                    <p className='article_plant_disease_dec'>{value.content}</p>
                                </div>
                            );
                        }
                    })
                )}
                {numArticles < currentPlantDisease.length && <button onClick={handleShowMore} className='Show_more nav_btn'>Xem Thêm</button>}
            </div>
            <div className='content_plants_disease_nav' style={offset > 1400 && (typeButton == 'BT02' || typeButton == "BT03") ? { position: 'fixed', top: "10%", right:"160px" } : {}}>
                <div className='plant_image'>
                    <img src={getImage(type)} className='current_selected_plant' />
                </div>
                <Button onClick={() => { setTypeButton('BT01'); handleGeneral(type) }} iden='nav_btn' text='Thông tin chung' style={typeButton === buttonID[0] ? { backgroundColor: 'black', color: 'white' } : {}} />
                <Button onClick={() => { setTypeButton('BT02'); handleInsect(type) }} iden='nav_btn' text='Sâu bọ gây hại' style={typeButton === buttonID[1] ? { backgroundColor: 'black', color: 'white' } : {}} />
                <Button onClick={() => { setTypeButton('BT03'); handleDisease(type) }} iden='nav_btn' text='Bệnh thường gặp' style={typeButton === buttonID[2] ? { backgroundColor: 'black', color: 'white' } : {}} />
            </div>
        </div>
    </div>
}



export default Content;