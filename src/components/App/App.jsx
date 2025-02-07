import styles from './App.module.scss';

function App() {

  return (
     <div className={styles.appContainer}>
      <h1 className={styles.appContainer__title}>NCT WISH 4-CUT</h1>
      <div className="">
        <button type="button">시온</button>
        <button type="button">리쿠</button>
        <button type="button">유우시</button>
        <button type="button">재희</button>
        <button type="button">료</button>
        <button type="button">사쿠야</button>
      </div>
     </div>
  )
}

export default App
