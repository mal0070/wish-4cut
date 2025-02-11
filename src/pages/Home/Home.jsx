import styles from './Home.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate} from 'react-router-dom';

function Home() {
  const members = ['시온', '리쿠', '유우시', '재희', '료', '사쿠야'];
  const nav = useNavigate();

  return (
     <div>
      <h1 className={styles.title}>NCT WISH 4-CUT</h1>
      <div className={styles.buttonContainer}>
        {members.map((member)=>
          <Button key={member} text={member} onClick={()=>nav('/photo')}/>
        )
        }
      </div>
     </div>
  )
}

export { Home };
