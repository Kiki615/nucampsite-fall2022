import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    const [campsiteId222, setCampsiteId] = useState(0);  
    // identifying to campsite222 so you can see the connection here where useState changes it
    const selectedCampsite = selectCampsiteById(campsiteId222);
  
    return (
        <Container>
           
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId}/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;