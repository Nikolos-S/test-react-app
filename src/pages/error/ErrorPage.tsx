import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage:React.FC = () => {
  return (
    <div id="error-page" className="text-center">
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p className="text-muted">
      Но вы можете перейти 
        <Link to="/">На главную страницу</Link>
      </p>
    </div>
  );
};

export { ErrorPage };