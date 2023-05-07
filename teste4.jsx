import styles from './styles.module.css';

function MeuComponente(props) {
  const isActive = props.isActive;

  return (
    <a className={`${styles.link} ${isActive ? styles.linkActive : ''}`} href="/">
      Meu link
    </a>
  );
}