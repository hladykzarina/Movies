import { Link } from 'react-router-dom';

export default function NotFoundView() {
  return (
    <h1>
      Page is not found :( Go to <Link to="/">Home page</Link> )
    </h1>
  );
}
