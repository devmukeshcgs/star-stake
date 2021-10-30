import React from 'react';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";

function SimilarArtitstsCard(props) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const FakeData = [
        {
            id: 0,
            album: "Sheng Belmonte",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/01.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/001.png"
        },
        {
            id: 1,
            album: "The chainsmokers",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/02.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/002.png"
        },
        {
            id: 2,
            album: "Ed Sheeran",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/03.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/003.png"
        },
        {
            id: 3,
            album: "Eminem",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/04.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/004.png"
        },
        {
            id: 4,
            album: "The chainsmokers22",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/01.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/001.png"
        },
        {
            id: 5,
            album: "Ed Sheeran3333",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/02.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/002.png"
        },
        {
            id: 6,
            album: "Ed Sheeran444",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/03.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/003.png"
        },
        {
            id: 7,
            album: "Ed Sheeran555",
            bgImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/04.png",
            proImg: "https://star-stake-public-images-bucket.s3.us-east-2.amazonaws.com/images/similar-artist/004.png"
        },
    ]
    return (
        <div className="similar-artist-cards  mt-5">
            <Slider className="similarSlider " {...settings}>
                {FakeData.map(item => {
                    return (
                        <div key={item.id} className="similar-artist-card-box mb-4 text-center">
                            <div className="pro-img-bg position-relative">
                                <img src={item.bgImg} alt="" />
                            </div>
                            <div className="pro-img-cont">
                                <div className="pro-img">
                                    <img src={item.proImg} alt="" />
                                </div>
                            </div>
                            <div className="album-name py-2">
                                {item.album}
                            </div>
                            <div className="cta mb-4">
                                <Button variant="primary">See profile</Button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
export default SimilarArtitstsCard;