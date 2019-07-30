import React from 'react'
import searchIcon from '../img/search-13-xxl.png'

const Header = ()=> {
    return (
        <header className="header">
            <div className="header-title">
                <h2>Notes
                    </h2>
                    </div>
            <div className="header-management">
                <div className="search-div">
                    <input className="search"
                    type="text"
                    placeholder="Search" />
                    <div className="search-img-div">
                        <img className="search-img" alt="search" src={searchIcon}/>
                        </div>
                    </div>
                <div className="avatar-div">
                
                    </div>    
            </div>
        </header>
    )
}

export default Header;