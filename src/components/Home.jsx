
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {getUsername} from '../store/slices/userName.slice';
import ballup from "../assets/img/pb_up.png"
import balldown from "../assets/img/pb_down.png"
import screen from "../assets/img/screenpd.png"


const Home = () => {
    const username = useSelector(state => state.username)
    const [inputName, setImputName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

const goPokedex = () => {
    if (inputName != "") {
        dispatch(getUsername(inputName));
        navigate('/pokedex')
    }
}

    return (
        <div className='home'>
            <div className='input__container'>
                <img src={ballup} alt="" />
                <div className='screen'>
                    <img src={screen} alt="" />
                    <div className='input'>
                        <input placeholder='name' type="text" value={inputName} onChange={e => setImputName(e.target.value)} />
                        <button onClick={goPokedex}><i className='bx bxl-go-lang bx-tada bx-lg' ></i></button>
                    </div>
                </div>
                <img src={balldown} alt="" />
            </div>
        </div>
    );
};

export default Home;