import React from 'react'
import LoaderIcon from './LoaderIcon/Spin-1s-200px.png'
import style from './Loader.module.css'

const Loader = (props) => {
    return <div className={style.loader}>
        <img src={LoaderIcon} alt={LoaderIcon}/>
    </div>
}

export default Loader;