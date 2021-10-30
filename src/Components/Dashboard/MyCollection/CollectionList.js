import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ListImgA } from '../../../img/svg/YourCollection/listimg-A.svg';
import { ReactComponent as ListImgB } from '../../../img/svg/YourCollection/listimg-B.svg';
import { ReactComponent as ListImgC } from '../../../img/svg/YourCollection/listimg-C.svg';
import { ReactComponent as ListImgD } from '../../../img/svg/YourCollection/listimg-D.svg';
import { ReactComponent as LikeIcon } from '../../../img/svg/likeIcon.svg';
import { ReactComponent as ClickIcon } from '../../../img/svg/clickIcon.svg';
import { ReactComponent as ShapeIcon1 } from '../../../img/svg/shape1.svg';
import { ReactComponent as ShapeIcon2 } from '../../../img/svg/shape2.svg';
import { ReactComponent as ShapeIcon3 } from '../../../img/svg/shape3.svg';

function CollectionList(props) {

  return (
    <div className="collection-list pt-3">
      {props.heading == true ? <h3>More from this collection</h3> : ""}
      <div className="d-flex justify-content-between mob-wrap mt-4">
        <div className="collection-list-box mb-4">
          {/* Img List */}
          <div className="img-collection position-relative">
            {/* Img */}
            <ListImgA />
            {/* Hover Link */}
            <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
              <Link to="/BuckDetail">
                <ClickIcon />
                <p>Click for buck details</p>
              </Link>
            </div>
          </div>
          {/* Text-List */}
          <div className="collection-text pt-3">
            <div className="name-br mb-3">
              <ShapeIcon3 className="me-2" /> Rare
            </div>
            {/* Name */}
            <h5>Thomas edison bucks Founders edition</h5>
            <hr />
            <div className="d-flex justify-content-between">
              {/* Price */}
              <div className="price d-flex align-items-center justify-content-center">
                $10
              </div>
              {/* Qty */}
              <div className="qty">Qty: 3</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Locked</h6>
              {/* Like Icon */}
              <span>
                <LikeIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="collection-list-box mb-4">
          {/* Img List */}
          <div className="img-collection position-relative">
            {/* Img */}
            <ListImgB />
            {/* Hover Link */}
            <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
              <Link to="/BuckDetail">
                <ClickIcon />
                <p>Click for buck details</p>
              </Link>
            </div>
          </div>
          {/* Text-List */}
          <div className="collection-text pt-3">
            <div className="name-br mb-3">
              <ShapeIcon2 className="me-2" /> Collectable
            </div>
            {/* Name */}
            <h5>Stan lee bucks Founders edition</h5>
            <hr />
            <div className="d-flex justify-content-between">
              {/* Price */}
              <div className="price d-flex align-items-center justify-content-center">
                $1000
              </div>
              {/* Qty */}
              <div className="qty">Qty: 3</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Available</h6>
              {/* Like Icon */}
              <span>
                <LikeIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="collection-list-box mb-4">
          {/* Img List */}
          <div className="img-collection position-relative">
            {/* Img */}
            <ListImgC />
            {/* Hover Link */}
            <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
              <Link to="/BuckDetail">
                <ClickIcon />
                <p>Click for buck details</p>
              </Link>
            </div>
          </div>
          {/* Text-List */}
          <div className="collection-text pt-3">
            <div className="name-br mb-3">
              <ShapeIcon1 className="me-2" /> Standard
            </div>
            {/* Name */}
            <h5>Another Stan lee bucks Founders edition</h5>
            <hr />
            <div className="d-flex justify-content-between">
              {/* Price */}
              <div className="price d-flex align-items-center justify-content-center">
                $10
              </div>
              {/* Qty */}
              <div className="qty">Qty: 3</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Locked</h6>
              {/* Like Icon */}
              <span>
                <LikeIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="collection-list-box mb-4">
          {/* Img List */}
          <div className="img-collection position-relative">
            {/* Img */}
            <ListImgD />
            {/* Hover Link */}
            <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
              <Link to="/BuckDetail">
                <ClickIcon />
                <p>Click for buck details</p>
              </Link>
            </div>
          </div>
          {/* Text-List */}
          <div className="collection-text pt-3">
            <div className="name-br mb-3">
              <ShapeIcon3 className="me-2" /> Rare
            </div>
            {/* Name */}
            <h5>Steve jobs bucks Founders edition</h5>
            <hr />
            <div className="d-flex justify-content-between">
              {/* Price */}
              <div className="price d-flex align-items-center justify-content-center">
                $10
              </div>
              {/* Qty */}
              <div className="qty">Qty: 3</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Available</h6>
              {/* Like Icon */}
              <span>
                <LikeIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="collection-list-box mb-4">
          {/* Img List */}
          <div className="img-collection position-relative">
            {/* Img */}
            <ListImgA />
            {/* Hover Link */}
            <div className="img-hover-click position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center text-center align-items-center">
              <Link to="/BuckDetail">
                <ClickIcon />
                <p>Click for buck details</p>
              </Link>
            </div>
          </div>
          {/* Text-List */}
          <div className="collection-text pt-3">
            <div className="name-br mb-3">
              <ShapeIcon3 className="me-2" /> Rare
            </div>
            {/* Name */}
            <h5>Thomas edison bucks Founders edition</h5>
            <hr />
            <div className="d-flex justify-content-between">
              {/* Price */}
              <div className="price d-flex align-items-center justify-content-center">
                $10
              </div>
              {/* Qty */}
              <div className="qty">Qty: 3</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h6>Locked</h6>
              {/* Like Icon */}
              <span>
                <LikeIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default CollectionList;