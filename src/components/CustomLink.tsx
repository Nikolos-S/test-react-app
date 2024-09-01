import { Link, useMatch } from "react-router-dom";
import styles from './MyComponent.module.scss';

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
}
const CustomLink:React.FC<CustomLinkProps> = ({ children, to }) => {
  const match = useMatch(to);

  return (
    <Link to={to} className={match ? styles.active : ''}>
    {children}
    </Link>
  )
};

export { CustomLink };