import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="d-flex justify-content-center my-3">
    <Spinner animation="border" role="status">
    </Spinner>
  </div>
);

export default Loading;
