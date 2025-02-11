import styles from './App.module.scss';
import Button from '../Button/Button';


function App() {
  const members = ['시온', '리쿠', '유우시', '재희', '료', '사쿠야'];

  return (
     <div className={styles.appContainer}>
      <h1 className={styles.appContainer__title}>NCT WISH 4-CUT</h1>
      <div className={styles.buttonContainer}>
        {members.map((member)=>
          <Button key={member} text={member}/>
        )
        }
      </div>
     </div>
  )
}

export default App
