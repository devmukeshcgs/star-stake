import React from 'react';
import { Link } from 'react-router-dom';

function Description() {

    return (
        <div className="buck-detail">
            <div className="box-address p-4 mb-4">
                <div className="text-container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div> <p>/General Info</p></div>
                        <div><p>129/135</p></div>
                    </div>
                    <div className="created-by">
                        <p>Created by <Link to="/userid">Jenifar Aniston</Link></p>
                        <p> <Link to="/userid">Rare</Link></p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="address-detail">
                            <h1>Lionardo da vinci foundr edition NFT Buck </h1>
                            <p className="collection-edition">Founder Collection - 1st Edition</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae ab. Sapiente quia dolor tempora alias, iste, in est magnam error repellendus, accusamus doloribus dignissimos nostrum itaque qui repellat. A. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptatum obcaecati, earum cumque molestias velit natus, beatae expedita debitis voluptate dolorem praesentium neque ea, repellendus quas tempore aperiam veniam voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque similique quo! Nisi perferendis adipisci culpa dolore nemo vero odio neque suscipit facere obcaecati, nostrum nulla distinctio itaque reiciendis! Tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis tempora magnam dolor cupiditate sint animi nihil dolorem molestiae beatae omnis exercitationem, mollitia quo odio, ut commodi. Omnis, cum rem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sit asperiores minima ipsum obcaecati nostrum temporibus debitis sunt explicabo suscipit neque, vel itaque nihil autem excepturi, natus sed iusto soluta!</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid quis doloribus assumenda eligendi nam exercitationem modi veniam quas ea! Cumque nesciunt sit illo id laudantium soluta quas magnam suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis laborum sit! Maiores dolorum placeat, quod aliquid deleniti eligendi ipsam laborum vitae atque nulla tenetur accusamus! Corrupti cupiditate molestias perspiciatis!</p>

                            <p className="collection-maintained">Collection Minted by - <span>Chris Hawk</span></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="box-address p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className="token-info-heading"> /Tokem Info</h3>
                    </div>
                </div>
                <div className="token-info">
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Contract address</div>
                        <div className="secondary-col">0x 9KHIUG...E48</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Token Id</div>
                        <div>49865865321..</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Token Standard</div>
                        <div>ERC-1155</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Blockchain</div>
                        <div>Ethrium</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Metadata</div>
                        <div className="secondary-col">Frozen</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <div>Dollervalue</div>
                        <div className="secondary-col">$10</div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Description;
