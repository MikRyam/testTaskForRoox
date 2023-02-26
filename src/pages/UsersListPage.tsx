import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './UsersListPage.module.scss';
import Users from '../components/Users';

const UsersListPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.usersList}>
      <span className={styles.usersListTitle}>{t('usersList.title')}</span>
      <Users />
    </div>
  );
};

export default UsersListPage;
