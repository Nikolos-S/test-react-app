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
    </tbody>
  </Table>
  );
}
export { TableComponent };