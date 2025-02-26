import styles from './Button.module.scss';

const Button = ({ text, type, onClick }) => {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button onClick={onClick} className={`${styles.Button} ${styles[`Button__${type}`]}`}>
      {text}
    </button>
  );
};

export { Button };
