import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchServiceDetailsRequest } from '../actions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Card, Button } from 'react-bootstrap';

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { service, loading, error } = useSelector(state => state.serviceDetails);

  useEffect(() => {
    dispatch(fetchServiceDetailsRequest(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={() => dispatch(fetchServiceDetailsRequest(id))} />;

  if (!service) return null;

  return (
    <div className="container my-4">
      <Card>
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> {service.price} руб.
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {service.content}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/')}>Вернуться к списку услуг</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
