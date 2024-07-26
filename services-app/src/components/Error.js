import { Alert, Button } from 'react-bootstrap';

const Error = ({ message, onRetry }) => (
  <Alert variant="danger" className="d-flex justify-content-between align-items-center">
    <span>Произошла ошибка: {message}</span>
    <Button variant="danger" onClick={onRetry}>Повторить запрос</Button>
  </Alert>
);

export default Error;
