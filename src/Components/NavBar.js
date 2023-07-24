import React, { useState } from 'react';
import './NavBar.css';
const NavBar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
        <nav className='nav'>
            {/* Logo Section */}
            <div className='nlogo'><img src='logo.png' alt='Logo' width={'244px'} height={'83px'} /></div>

            {/* Navigation Section */}
            <div className='rnavlinks'>
            <ul className='navlinks'>
                {['Home', 'Pricing', 'Why Choose Us', 'Contact Us'].map((tab) => (
                    <li
                        key={tab}
                        className='linkItem'
                        style={{
                            // ...styles.linkItem,
                            //   backgroundColor: activeTab === tab ? 'blue' : 'white',
                            //   borderRadius: '45px',
                            color: activeTab === tab ? 'yellow' : 'white',
                        }}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            </div>
            {/* Buttons Section */}
            <div className='buttonsSection'>
                <button className='nbutton'>Sign Up</button>
                <button className='nbutton'>Login</button>
            </div>
            </nav>
             {/* phone responsive */}
             <div className='pnavlinks'>
            <ul className='navlinks'>
                {['Home', 'Pricing', 'Why Choose Us', 'Contact Us'].map((tab) => (
                    <li 
                    className='linkItem'
                        key={tab}
                        style={{
                            color: activeTab === tab ? 'yellow' : 'white',
                        }}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            </div>
       
        </div>
    );
};

const styles = {
   
    navLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        backgroundColor: 'blue',
        borderRadius: '45px',
        height: '53px'
    },
    
};

export default NavBar;
