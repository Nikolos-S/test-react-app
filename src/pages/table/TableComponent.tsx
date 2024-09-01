import Table from 'react-bootstrap/Table';
import styles from './table.module.scss';
import { Spinner } from './Spinner';
import { useGetLaunchesQuery, Launch } from './services/rocketApi';

const header = [
  {name: 'ID', key: 'id' },
  {name: 'Дата', key: 'date_utc' },
  {name: 'Название', key: 'rocket' },
  {name: 'Описание', key: 'details' },
];
const TableComponent: React.FC = () => {
  const { data, isLoading } = useGetLaunchesQuery();
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Table striped bordered hover className={styles.table}>
    <thead>
      <tr>
        {header.map(({ name }, i) => <th key={i}>{name}</th>)}
      </tr>
    </thead>
    <tbody>
      {data && data.map((body) => 
        <tr key={body.id}>
          {header.map(({ name, key }, i) =>
            <td key={i} data-th={name}>
              {body[key as keyof Launch]}
            </td>
          )}
        </tr>
      )}
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td >Larry</td>
        <td >qBird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  );
}
export { TableComponent };