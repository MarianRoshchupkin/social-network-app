import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import styles from './downloadmodal.css';

export function DownloadModal() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate('/edit');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <p className={styles.modalDesc}>
        Друзьям будет проще узнать вас, если вы загрузите свою настоящую фотографию.
        Вы можете загрузить изображение в формате JPG, GIF или PNG.
      </p>
      <form className={styles.modalForm}>
        <label className={styles.modalButton}>
          Выберите файл
          <input className={styles.modalInput} />
        </label>
      </form>
    </div>
  ), node);
}
