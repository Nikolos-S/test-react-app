import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner: React.FC = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export { Spinner };