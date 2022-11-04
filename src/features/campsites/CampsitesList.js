import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    // selectAllCampsites is a function in campsitesSlice...
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite1) => {
                return (
                <Col
                    md='5'
                    className='m-4'
                    key={campsite1.id}
                >
                    <CampsiteCard campsite={campsite1} />
                    </Col>
                    );
        })}
        </Row>
    );
};
export default CampsitesList;