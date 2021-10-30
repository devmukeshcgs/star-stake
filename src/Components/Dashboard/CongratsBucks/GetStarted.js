import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import { ReactComponent as TutorialVideoImg } from '../../../img/svg/Video-Img.svg';
import { ReactComponent as PlayIcon } from '../../../img/svg/play-icon-A.svg';

function GetStarted()  {  
 
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="connect-user-new text-center">
      <div className="mb-5 height-heading">
        <h2 className="position-absolute start-0 end-0 text-center">Congratulations, You’ve got bucks to spend!</h2>
      </div>
      <div className="Bucks-To-Stake d-inline-block ps-lg-5">
      <div className="setup-bg-box px-md-5 py-5 px-3  m-auto position-relative z-index-1">
        <div className="">
          <h3 className="mb-2 ">How To Use Your Bucks To Stake</h3>
          <p className="px-3">Watch the video to learn how to use your NFTbucks to stake your favorite stars.</p>
               <div className="video-boxs-Tutorial position-relative mt-lg-5">
                   <TutorialVideoImg />
                   <div className="play-ico position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                     <Nav.Link onClick={()=> setOpen(true)} className="position-relative">
                     <PlayIcon className="position-relative z-index-1" />
                     </Nav.Link>
                     <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RCFucPefx_A" onClose={() => setOpen(false)} />
                   </div>
               </div>
               <Button className="mt-lg-5 mt-4">Go to marketplace</Button>
               <p className="mt-lg-4 mt-3"><Link to="/" >View my bucks collection</Link></p>
          </div>
        </div>
        </div>
      </div>
    )
  
  }
export default GetStarted;
