import Link from 'next/link';
import navStyle from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={navStyle.container}>
      <ul className={navStyle.ul}>
        <li className={navStyle.li}>
          <Link href='/'>Home</Link>
        </li>
        <li className={navStyle.li}>
          <Link href='/about'>About</Link>
        </li>
        <li className={navStyle.li}>
          <Link href='/services'>Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
