import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './UserCard.module.scss';

interface UserCardProps {
  id: number;
  name: string;
  city: string;
  company: string;
}

const UserCard: FC<UserCardProps> = ({ id, name, city, company }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.userCard}>
      <div className={styles.userInfoBox}>
        <div className={styles.userInfoField}>
          <span className={styles.cardText}>{t('usersList.fullName')}</span>
          <span className={styles.userDataText}>{name}</span>
        </div>
        <div className={styles.userInfoField}>
          <span className={styles.cardText}>{t('usersList.city')}</span>
          <span className={styles.userDataText}>{city}</span>
        </div>
        <div className={styles.userInfoField}>
          <span className={styles.cardText}>{t('usersList.company')}</span>
          <span className={styles.userDataText}>{company}</span>
        </div>
      </div>
      <Link className={styles.moreDetail} to={`${id}`}>
        {t('usersList.more')}
      </Link>
    </div>
  );
};

export default UserCard;
