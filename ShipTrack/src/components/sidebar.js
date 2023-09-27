import React, {useState} from "react";
import '../../src/styles.scss'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-icon.png'
import dashboardIcon from '../assets/images/dash-board-icon.png'
import shipmentIcon from '../assets/images/shipmentIcon.png'
import ordersIcon from '../assets/images/ordersIcon.png'
import clientsIcon from '../assets/images/clientsIcon.png'
import flleetIcon from '../assets/images/flleetIcon.png'
import wherehouseIcon from '../assets/images/wherehouseIcon.png'
import reportsIcon from '../assets/images/reportsIcon.png'
import billingIcon from '../assets/images/billingIcon.png'
import securityIcon from '../assets/images/securityIcon.png'
import preferencesIcon from '../assets/images/preferencesIcon.png'


export default function Sidebar  () {
    const initialActiveItem = 'dashboard';
    const [activeItem, setActiveItem] = useState(initialActiveItem);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
    return(
<>
<div className="toggle-par">
    <button className="toggle-button" onClick={toggleMenu}>
        Toggle Menu
</button>
</div>
<div className={`sidebar ${isOpen ? 'open' : ''}`}> 
<div className="logo"><span className="logo-bg"><img src={logo}/></span>Shiptrack</div>

<ul className="sidenavlist">
   
    <li className={activeItem === 'dashboard' ? 'active' : ''} onClick={() => handleItemClick('dashboard')}><NavLink to='/'><img src={dashboardIcon} />Dashboard</NavLink></li>
    <li className={activeItem === 'item2' ? 'active' : ''} onClick={() => handleItemClick('item2')}><NavLink to='shipment'><img src={shipmentIcon} />Shipment</NavLink></li>
    <li className={activeItem === 'item3' ? 'active' : ''} onClick={() => handleItemClick('item3')}><img src={ordersIcon} />Orders</li>
    <li className={activeItem === 'item4' ? 'active' : ''} onClick={() => handleItemClick('item4')}><img src={clientsIcon} />Clients</li>
    <li className={activeItem === 'item5' ? 'active' : ''} onClick={() => handleItemClick('item5')}><img src={flleetIcon} />Fleet management</li>
    <li className={activeItem === 'item6' ? 'active' : ''} onClick={() => handleItemClick('item6')}><img src={wherehouseIcon} />Warehousing</li>
    <li className={activeItem === 'item7' ? 'active' : ''} onClick={() => handleItemClick('item7')}><img src={reportsIcon} />Report & analytics</li>
    <li className={activeItem === 'item8' ? 'active' : ''} onClick={() => handleItemClick('item8')}><img src={billingIcon} />Billing & payment</li>
    <li className={activeItem === 'item9' ? 'active' : ''} onClick={() => handleItemClick('item9')}><img src={securityIcon} />Security</li>
    <li className={activeItem === 'item10' ? 'active' : ''} onClick={() => handleItemClick('item10')}><img src={preferencesIcon} />Preferences</li>
 </ul>
</div>

</>


    )
}