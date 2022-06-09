import headerStyle from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>Next JS</span> vs React JS
      </h1>
      <p className={headerStyle.description}>What is the difference between?</p>
    </div>
  );
};

export default Header;
