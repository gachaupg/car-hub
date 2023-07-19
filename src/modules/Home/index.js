import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import ReactPlayer from 'react-player';
import './Home.css';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const videos = [
  {
    url: 'https://youtu.be/6gO_FGd6u2w',
    id: 9,
  },
  {
    url: 'https://youtu.be/l_kblKxqvOY',
    id: 1,
  },
  {
    url: 'https://youtu.be/CLnY78Z7bwU',
    id: 9,
  },
  {
    url: 'https://youtu.be/d-5ZjsAYLIY',
    id: 2,
  },
  {
    url: 'https://youtu.be/Tuya5E86LCw',
    id: 3,
  },
  {
    url: 'https://youtu.be/XYy-v3_4K1Q',
    id: 4,
  },
  {
    url: 'https://www.youtube.com/live/KTVlaMfldEM?feature=share',
    id: 5,
  },
];

const images = [
  'https://www.smartautos.co.ke/images/special-offer.jpg',
  'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2023-Toyota-Hilux-SR5-Ute-White-1001x565-%281%29.jpg',
  'https://gl.digital/static/fb6c47027fec88b9275861c6a356d347/59894/ultimate-guide-to-car-dealer-marketing.jpg',
  'https://www.carimports.co.ke/stats_images/c5At9Pmx48mHVSbCrEbUxzOQFJBab9Q2ltddlIgOrMpegPY.jpg',
  'https://luxandsportcars.com/wp-content/uploads/2019/03/C3C0D02A-B9E2-4141-9A40-EEBF74BA6B7C-1200x900.jpeg',
  'https://media.hatla2eestatic.com/uploads/ncarteraz/18145/big-up_fffbd9b819b942f4b6c92b65bb89187f.png',
  'https://www.motortrend.com/uploads/sites/5/2018/09/2019-Subaru-Forester-39.jpg?fit=around%7C875:492',
];

const videoDuration = 70000;
const slideDuration = 5000;

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let videoTimeout;
    let imageTimeout;

    const playNextVideo = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const playNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    videoTimeout = setTimeout(playNextVideo, videoDuration);
    imageTimeout = setTimeout(playNextImage, slideDuration);

    return () => {
      clearTimeout(videoTimeout);
      clearTimeout(imageTimeout);
    };
  }, [currentVideoIndex, currentImageIndex]);

  return (
    <div>
      <header></header>

      <div className="home">
        <div className="home__container">
          <Card>
            <img className="home__image" src={images[currentImageIndex]} alt="" />
          </Card>
        </div>
      </div>

      <Card style={{ background: 'black' }}>
        <div className="video-container">
          <ReactPlayer
            url={videos[currentVideoIndex].url}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            controls={false}
            playing
            loop
            muted
          />
        </div>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <Link to="/car">
              <b>CARS</b>
            </Link>
          </Col>
          <Col span={3}>ALL STOCK</Col>
          <Col span={3}>IN STOCK</Col>
          <Col span={3}>
            SHIPPING
            <Row span={6}>Office Hours 8 am - 5 pm daily</Row>
            <Row span={3}>0727200200, 0798500000</Row>
            <Row span={3}>info@motorhub.co.ke</Row>
          </Col>
          <Col span={3}>NEW ARRIVALS</Col>
        </Row>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <b>TRADE IN</b>
          </Col>
          <Col span={3}>FINANCING</Col>
          <Link to="/blog">
            <Col span={3}>OUR BLOG</Col>
          </Link>
          <Col span={3}></Col>
          <Col span={3}></Col>
        </Row>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <b>TOP BRANDS</b>
          </Col>
          <Col span={3}>TOYOTA</Col>
          <Col span={3}>NISSAN</Col>
          <Col span={3}></Col>
          <Col span={3}></Col>
        </Row>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <b>VOLKSWAGEN</b>
          </Col>
          <Col span={3}>MERCEDES</Col>
          <Col span={3}>PEUGEOT</Col>
          <Col span={3}></Col>
          <Col span={3}></Col>
        </Row>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <b>AUDI</b>
          </Col>
          <Col span={3}>ISUZU</Col>
          <Col span={3}>LAND ROVER</Col>
          <Col span={3}></Col>
          <Col span={3}></Col>
        </Row>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <b>HONDA</b>
          </Col>
          <Col span={3}>MITSUBISHI</Col>
          <Col span={3}>MAZDA</Col>
          <Col span={3}></Col>
          <Col span={3}></Col>
        </Row>
        <Row gutter={[16, 16]} style={{ color: 'white' }}>
          <Col span={3}>
            <Link to="/about">
              <b>ABOUT US</b>
            </Link>
          </Col>
          <Link to="/contact">
            <Col span={3}>CONTACT US</Col>
          </Link>
          <Col span={6}></Col>
          <Col span={3} style={{ textAlign: 'right' }}>
            <FacebookIcon style={{ color: 'white' }} />
          </Col>
          <Col span={3} style={{ textAlign: 'right' }}>
            <TwitterIcon style={{ color: 'white' }} />
          </Col>
          <Col span={3} style={{ textAlign: 'right' }}>
            <InstagramIcon style={{ color: 'white' }} />
          </Col>
          <Col span={3} style={{ textAlign: 'right' }}>
            <YouTubeIcon style={{ color: 'white' }} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
