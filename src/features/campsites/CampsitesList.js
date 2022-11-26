import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
    // selectAllCampsites is a function in campsitesSlice...
    const campsites = useSelector(selectAllCampsites);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }
    console.log('campsites:', campsites);
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