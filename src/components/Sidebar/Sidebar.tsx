import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';
import { useAppDispatch } from '../../app/hooks';
import {
  sortUsersByCity,
  sortUsersByCompany,
  sortUsersByName,
} from '../../features/users/usersSlice';

const Sidebar: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.sidebar}>
      <span className={styles.sorting}>{t('sidebar.sorting')}</span>
      <button type="button" onClick={() => dispatch(sortUsersByName())}>
        {t('sidebar.btnSortByName')}
      </button>
      <button type="button" onClick={() => dispatch(sortUsersByCity())}>
        {t('sidebar.btnSortByCity')}
      </button>
      <button type="button" onClick={() => dispatch(sortUsersByCompany())}>
        {t('sidebar.btnSortByCompany')}
      </button>
    </div>
  );
};

export default Sidebar;
