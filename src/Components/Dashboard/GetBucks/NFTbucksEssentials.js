import React, {useState} from 'react';
import Button  from 'react-bootstrap/Button';
import ModalVideo from 'react-modal-video'
import Essentialsbanner from "../../../img/Essentials-banner.png";
import { ReactComponent as PlayIcons } from "../../../img/svg/playIcons.svg";

function NFTbucksEssentials()  {  
  const [isOpen, setOpen] = useState(false)
  return (
       <div className="Essentials-banner">
           <div className="position-relative">
             <img className="w-100" src={Essentialsbanner} alt="" />
             <div className="position-absolute top-0 start-0 px-lg-5  px-3 py-5 text-white w-50 mt-lg-4 mt-0 mb-lg-0 mb-4">
               <h3>NFTbucks: Essentials</h3>
               <p className="pe-5">NFTbucks provide a visual cryptocurrency that you can see and enjoy. NFTbucks can be collected as art or used as currency on applications like StarStake. Various design themes make purchasing and using NFTbucks simple, secure, and enjoyable.</p>
               <Button onClick={()=> setOpen(true)}  variant="light">How to use NFT bucks <PlayIcons className="ms-2"/></Button>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RCFucPefx_A" onClose={() => setOpen(false)} />
             </div>
           </div>
       </div>
    )
  
  }
export default NFTbucksEssentials;
