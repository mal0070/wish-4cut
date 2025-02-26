import styles from './Frame.module.scss';
import { Button } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { frameData } from '../../utils/constant';

function Frame() {
  const { id } = useParams();
  const nav = useNavigate();
  const [selectedFrame, setSelectedFrame] = useState(null);

  const frames = frameData[id] || []; //존재하지 않는 id일 경우 빈 배열 반환

  const handleNext = () => {
    if (selectedFrame) {
      nav('/shoot');
    } else {
      alert('프레임이 선택되지 않았어요.');
    }
  };

  return (
    <div className={styles.Frame}>
      <h1>프레임을 선택해주세요!</h1>
      <ul className={styles.FrameList}>
        {frames.map((item) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
          <li
            key={item.id}
            className={selectedFrame === item ? styles.FrameItem : 'none'}
            onClick={() => setSelectedFrame(item)}
          >
            <img
              src={`/src/assets/images/${id}/${item.image}`}
              alt={`프레임 ${item.id + 1}`}
              width={200}
              height={300}
            />
          </li>
        ))}
      </ul>
      <Button text={'선택'} onClick={handleNext} />
    </div>
  );
}

export { Frame };
