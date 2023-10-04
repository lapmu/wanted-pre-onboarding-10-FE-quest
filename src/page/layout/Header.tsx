import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div>
        <Link to='/'>Login</Link>
      </div>
      <div>
        <Link to='/api'>Api</Link>
      </div>
    </>
  );
}

export default Header;
