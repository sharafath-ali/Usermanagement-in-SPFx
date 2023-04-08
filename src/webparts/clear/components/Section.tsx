import styles from './Clear.module.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SContext } from './searchcontext';
import * as React from 'react';

const Section: React.FC = () => {
  const { filter, setfilter } = useContext(SContext);
  const navigate = useNavigate();
  return (
    <div className={styles.section}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search for ..."
          value={filter}
          onChange={(e) => setfilter(e.target.value.toLowerCase())}
        />
      </div>
      <button className={styles.button} onClick={() => navigate('/add')}>
        Add User
      </button>
    </div>
  );
};

export default Section;