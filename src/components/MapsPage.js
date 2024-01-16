
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const mapStyles = {
  height: '400px',
  width: '100%',
};

const center = {
  lat: 36.854020,
  lng: 10.29,
};

const MapsPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1> Google Maps Landing Page!</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <LoadScript googleMapsApiKey=''>
            <GoogleMap mapContainerStyle={mapStyles} center={center} zoom={10}>
              {/* the code will run correctly but the google maps card will display a warning because of some 
              security restrictions related to API KEY   */}
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
    </Container>
  );
};

export default MapsPage;