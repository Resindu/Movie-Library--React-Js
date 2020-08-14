import React from 'react';
import '../App.css';

const Header = ({search,moviesearch,handleinput,searchbyenter}) => {
    return (
        
        <div className="headercontainer">
            <div className="headerbar">
            <p className="logo">Aflix</p>
            <p className="movietext">Movie Library</p>
            <div className="searchBarContainer">
                <input type="text" className="searchbar" value ={moviesearch} onChange={handleinput} onKeyPress={searchbyenter}/>
                            
                <button className="searchbtn" onClick={search}> <i className="fa fa-search fa-2x"/></button>

            </div>
            </div>
            
        </div>
    )
}

export default Header
