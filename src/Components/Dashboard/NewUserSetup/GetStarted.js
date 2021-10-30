import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import { ReactComponent as TutorialVideoImg } from '../../../img/svg/Tutorial-video-img.svg';
import { ReactComponent as PlayIcon } from '../../../img/svg/play-icon-A.svg';

function GetStarted()  {  
 
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="connect-user-new text-center">
      <div className="mb-4 height-heading">
        <h2 className="position-absolute start-0 end-0 text-center">Congratulations, You are ready to stake your favorite stars!</h2>
      </div>
      <div className="setup-bg-box px-md-5 py-4 px-3  m-auto">
        <div className="">
          <h3 className="mb-4 pb-2">Watch A quick 3 Minute Tutorial</h3>
               <div className="video-boxs-Tutorial position-relative">
                   <TutorialVideoImg />
                   <div className="play-ico position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                     <Nav.Link onClick={()=> setOpen(true)} className="position-relative">
                     <PlayIcon className="position-relative z-index-1" />
                     </Nav.Link>
                     <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="RCFucPefx_A" onClose={() => setOpen(false)} />
                   </div>
               </div>
               <p className="px-2 mt-4">Watch the video to learn how to get started with StarStake™ and start staking your favorite stars!</p>
              <Button className="mt-2">Get started</Button>
          <p className="mt-2"><Link to="/" >I’ll come back later</Link></p>
          </div>
        </div>
      </div>
    )
  
  }
export default GetStarted;
