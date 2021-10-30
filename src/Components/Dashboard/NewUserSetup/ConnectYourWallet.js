import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { ReactComponent as PngkitIcon } from '../../../img/svg/pngkitIcon.svg';

function ConnectYourWallet()  {  

  return (
               <div className="connect-user-new text-center">
                    <div className="mb-4 height-heading">
                      <h2>Starstake setup</h2>
                    </div>
                   <div className="setup-bg-box p-md-5 p-3  m-auto">
                      <PngkitIcon className="mt-4" />
                     <div className="mt-4">
                      <h3>Add metamask to connect wallet</h3>
                      <p className="px-2">We use metamask because it’s perfect and secure for you to start your journey on starstake.</p>
                      <Button className="mt-4">Get metamask for chrome</Button>
                      <Link to="/" className="d-block mt-4">Don’t know how it works?</Link>
                      </div>
                    </div>
               </div>
    )
  
  }
export default ConnectYourWallet;
