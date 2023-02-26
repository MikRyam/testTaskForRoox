import * as Yup from 'yup';

export const formValidation = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[A-Za-z-. ]*$/,
      'Только буквы латинского алфавита в любом регистре',
    )
    .required('Обязательное поле'),
  username: Yup.string()
    .trim()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Некорректная электронная почта')
    .required('Обязательное поле')
    .matches(
      // eslint-disable-next-line
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Некорректная электронная почта',
    ),
  street: Yup.string().trim().required('Обязательное поле'),
  city: Yup.string().trim().required('Обязательное поле'),
  zipcode: Yup.string()
    .trim()
    .matches(/^[0-9- ]+$/, 'Только цифры')
    .required('Обязательное поле'),
  phone: Yup.string()
    .trim()
    .min(8, 'От 8 символов')
    .matches(/^[0-9-+.()x ]+$/, 'Некорректный номер')
    .required('Обязательное поле'),
  website: Yup.string().trim().required('Обязательное поле'),
});
