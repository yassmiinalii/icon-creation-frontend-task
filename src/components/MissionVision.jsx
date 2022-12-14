import React,{useEffect}from "react";
import { API_URL, IMAGES_URL } from "../api/BaseUrls";
import { useQuery } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { Col, Container, Row, Image, Stack } from "react-bootstrap";
import PresidentSkelton from "./skelton/PresidentSkelton";
import missionIcon from '../assets/images/missionIcon.svg';
import visionIcon from '../assets/images/visionIcon.svg';
// import AOS from 'aos';
import * as AOS from 'aos';


const MissionVision = () => {

  const { isLoading, error, data } = useQuery("missionVision", () =>
    fetch(API_URL + "/missionVision").then((res) => res.json())
  );

  const mission = data?.message.mission_vision[0];
  const vision = data?.message.mission_vision[1];
  
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []); 
  

  if (isLoading) return <PresidentSkelton />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <Container   className="missionVision-container component-container ">
      <h1 data-aos="fade-in"className="section-title-container">
        Mission & Vision
      </h1>
      <Row className=" content-container align-items-center gap-5 ">
        <Col md={5} xs={12}>
          <div  data-aos="fade-left" className="img-container" 
               style={{ backgroundImage: `url(${IMAGES_URL + mission.photo_path})` }}
          >
          </div>
        </Col>
        <Col md={6} xs={12}>
          <Stack>
          <div data-aos="fade-left" className="mission-vision-content">
            <h2 className="missionVision-title">{mission.type}</h2>
            <div className="icon-text-container d-flex gap-md-5 gap-sx-1">
              <div className="missionVision-icon-container">
                <Image src={missionIcon} alt='Mission icon' />
              </div>
              <div className="missionVision-description-container">
                <p className="missionVision-description">
                  {mission.english_description}
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-in" className="mission-vision-content">
            <h2 className="missionVision-title">{vision.type}</h2>
            <div className="icon-text-container d-flex gap-2">
              <div className='missionVision-icon-container'>
                <Image src={visionIcon} alt='Mission icon' />
              </div>
              <div className="missionVision-description-container">
                <p className="missionVision-description">
                  {vision.english_description}
                </p>
              </div>
            </div>
          </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionVision;
