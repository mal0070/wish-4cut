import styles from './Home.module.scss';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const members = [
    { name: '시온', id: 'sion' },
    { name: '리쿠', id: 'riku' },
    { name: '유우시', id: 'yushi' },
    { name:'재희', id: 'jaehee' },
    { name:'료', id: 'ryo' },
    { name: '사쿠야',id: 'sakuya' },
  ];
  const nav = useNavigate();

  return (
    <div>
      <h1 className={styles.title}>NCT WISH 4-CUT</h1>
      <div className={styles.buttonContainer}>
        {members.map((member) => (
          <Button key={member} text={member.name} onClick={() => nav(`/frame/${member.id}`)} />
        ))}
      </div>
    </div>
  );
}

export { Home };
