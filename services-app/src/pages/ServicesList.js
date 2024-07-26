import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServicesRequest } from '../actions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Card, Button } from 'react-bootstrap';

const ServicesList = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector(state => state.services);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={() => dispatch(fetchServicesRequest())} />;

  return (
    <div className="container my-4">
      <h1 className="mb-4">Доступные сервисы</h1>
      <div className="row">
        {services.map(service => (
          <div key={service.id} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.price} руб.</Card.Text>
                <Button variant="primary" as={Link} to={`/${service.id}/details`}>Посмотреть детали</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
