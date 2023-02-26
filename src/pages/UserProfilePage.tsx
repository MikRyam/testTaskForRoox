import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import styles from './UserProfilePage.module.scss';
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from '../features/users/usersApiSlice';
import UserProfileForm from '../components/UserProfileForm';
import { formValidation } from '../services/formValidation';

// Shape of form values
export interface FormValues {
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  comment: string;
}

export interface OtherProps {
  isReadOnly: boolean;
}

const UserProfilePage: FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: user, isLoading, isError } = useGetUserByIdQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);

  return (
    <div className={styles.userProfileBlock}>
      <div className={styles.userProfileTitleBox}>
        <span className={styles.userProfileTitle}>
          {t('userProfile.title')}
        </span>
        {user && (
          <button
            type="button"
            disabled={!isReadOnly}
            onClick={() => setIsReadOnly((prev) => !prev)}
          >
            {t('userProfile.editBtn')}
          </button>
        )}
      </div>
      {isLoading && (
        <div className="statusMessage">
          <h3>Loading...</h3>
        </div>
      )}
      {isError && (
        <div className="statusMessage">
          <h3>Oh no, there was an error</h3>
        </div>
      )}
      {user ? (
        <Formik<FormValues>
          initialValues={{
            name: user.name || '',
            username: user.username || '',
            email: user.email || '',
            street: user.address.street || '',
            city: user.address.city || '',
            zipcode: user.address.zipcode || '',
            phone: user.phone || '',
            website: user.website || '',
            comment: '',
          }}
          validationSchema={formValidation}
          onSubmit={(values, actions) => {
            setIsReadOnly(true);
            // console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            console.log('Submitted data: ', JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            const body = { ...values, id: user.id };
            updateUser(body);
          }}
          component={(props) => (
            <UserProfileForm isReadOnly={isReadOnly} {...props} />
          )}
        />
      ) : null}
      <Link style={{ width: 'fit-content' }} to="/users">
        <button type="button">{t('userProfile.goBackBtn')}</button>
      </Link>
    </div>
  );
};

export default UserProfilePage;
