import React from 'react';
import { Field, Form, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import styles from './UserProfileForm.module.scss';
import { FormValues, OtherProps } from '../../pages/UserProfilePage';

const UserProfileForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { t } = useTranslation();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    isReadOnly,
  } = props;
  return (
    <Form>
      <div className={styles.userProfileForm}>
        {/* <h1>{message}</h1> */}
        <div className={styles.formField}>
          <label htmlFor="name">{t('userProfile.form.name')}</label>
          <Field
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={styles[touched.name && errors.name ? 'invalid' : '']}
            readOnly={isReadOnly}
          />
          {touched.name && errors.name && (
            <div className={styles.errorMessage}>{errors.name}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="username">{t('userProfile.form.userName')}</label>
          <Field
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            className={
              styles[touched.username && errors.username ? 'invalid' : '']
            }
            readOnly={isReadOnly}
          />
          {touched.username && errors.username && (
            <div className={styles.errorMessage}>{errors.username}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">{t('userProfile.form.email')}</label>
          <Field
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={styles[touched.email && errors.email ? 'invalid' : '']}
            readOnly={isReadOnly}
          />
          {touched.email && errors.email && (
            <div className={styles.errorMessage}>{errors.email}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="street">{t('userProfile.form.street')}</label>
          <Field
            type="text"
            name="street"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.street}
            className={styles[touched.street && errors.street ? 'invalid' : '']}
            readOnly={isReadOnly}
          />
          {touched.street && errors.street && (
            <div className={styles.errorMessage}>{errors.street}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="city">{t('userProfile.form.city')}</label>
          <Field
            type="text"
            name="city"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            className={styles[touched.city && errors.city ? 'invalid' : '']}
            readOnly={isReadOnly}
          />
          {touched.city && errors.city && (
            <div className={styles.errorMessage}>{errors.city}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="zipcode">{t('userProfile.form.zipCode')}</label>
          <Field
            type="text"
            name="zipcode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.zipcode}
            className={
              styles[touched.zipcode && errors.zipcode ? 'invalid' : '']
            }
            readOnly={isReadOnly}
          />
          {touched.zipcode && errors.zipcode && (
            <div className={styles.errorMessage}>{errors.zipcode}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="phone">{t('userProfile.form.phone')}</label>
          <Field
            type="tel"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            className={styles[touched.phone && errors.phone ? 'invalid' : '']}
            readOnly={isReadOnly}
          />
          {touched.phone && errors.phone && (
            <div className={styles.errorMessage}>{errors.phone}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="website">{t('userProfile.form.website')}</label>
          <Field
            type="text"
            name="website"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.website}
            className={
              styles[touched.website && errors.website ? 'invalid' : '']
            }
            readOnly={isReadOnly}
          />
          {touched.website && errors.website && (
            <div className={styles.errorMessage}>{errors.website}</div>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor="comment">{t('userProfile.form.comment')}</label>
          <textarea
            name="comment"
            rows={4}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
            readOnly={isReadOnly}
          />
        </div>
      </div>
      <div className={styles.userProfileSubmitForm}>
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={
            isSubmitting ||
            isReadOnly ||
            !!(errors.name && touched.name) ||
            !!(errors.username && touched.username) ||
            !!(errors.email && touched.email) ||
            !!(errors.street && touched.street) ||
            !!(errors.city && touched.city) ||
            !!(errors.zipcode && touched.zipcode) ||
            !!(errors.phone && touched.phone) ||
            !!(errors.website && touched.website)
          }
        >
          {t('userProfile.form.submitBtn')}
        </button>
      </div>
    </Form>
  );
};

export default UserProfileForm;
