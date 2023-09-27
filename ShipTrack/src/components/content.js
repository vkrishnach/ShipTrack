import iconOne from '../assets/images/iconOne.png'
import iconTwo from '../assets/images/iconTwo.png'
import iconThree from '../assets/images/iconThree.png'
import iconProfile from '../assets/images/profileIcon.png'
import mail from '../assets/images/mail.png'
import phoneIcon from '../assets/images/phone-icon.png'




export default function Content(){


return(

    <>
    <div className="right-content">
    <h1 className="headding">Dashboard</h1>

    <div className="status-row">
        <div className="status-block">
        <div className="total-head-icon"><img src={iconOne} /></div>
        <div className="status-bot-block">
        <span>
            <span>Total Shipment</span>
           <span className='totalno'> 500</span>
        </span>
        <span className='so-ontoggle'>...</span>
        </div>
        </div>
        <div className="status-block">
        <div className="total-head-icon"><img src={iconTwo} /></div>
        <div className="status-bot-block">
        <span>
            <span>Pending Orders</span>
           <span className='totalno'> 500</span>
        </span>
        <span className='so-ontoggle'>...</span>
        </div>
        </div>
        <div className="status-block">
        <div className="total-head-icon"><img src={iconThree} /></div>
        <div className="status-bot-block">
        <span>
            <span>Revenue</span>
           <span className='totalno'> $50</span>
        </span>
        <span className='so-ontoggle'>...</span>
        </div>
        </div>
    </div>
<div className='table-block'>
<h3>Client Activity</h3>
<div className='client-status'>
    <div className='each-block'>
        <span><img src = {iconProfile} /> 5</span>
        <span className='client-week'>New Clients(this week)</span>
    </div>
    <div className='each-block'>
        <span><img src = {iconProfile} /> 5</span>
        <span className='client-week'>New Clients(this month)</span>
    </div>
</div>
<div className='table-main-block'>
    <ul className='order-list'>
        <li className='active'> Recent activity </li>
        <li> Order activity </li>
        <li> Client activity </li>
        
        
    </ul>
    <div className='table-over'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col"><input type='checkbox' /> #Clien ID</th>
      <th scope="col"><img src={iconProfile} /> Client Name</th>
      <th scope="col"><img src={mail} /> Email</th>
      <th scope="col"><img src={phoneIcon} /> Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><input type='checkbox' /> 1</td>
      <td>Mark</td>
      <td>asdf@gmail.com</td>
      <td>(+91) 9584811188 </td>
    </tr>
    <tr>
      <td scope="row"><input type='checkbox' /> 2</td>
      <td>Jacob</td>
      <td>lkgh@gmail.com</td>
      <td>(+91) 9584811188 </td>
    </tr>
    <tr>
      <td scope="row"><input type='checkbox' /> 3</td>
      <td>Larry</td>
      <td>abcd@gmail.com</td>
      <td>(+91) 9584811188 </td>
    </tr>
  </tbody>
</table>
    </div>
</div>
</div>
    </div>
    </>
)

}