import React, { FC } from 'react';
import { useForm, NestedValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Form, { FormLabel } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './login.module.css';

interface LoginPageProperty {

}

const LoginPage: FC<LoginPageProperty> = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h3>{t('loginPage.description')}</h3>
                <Form>
                    <Input />
                    <Button>{ t('loginPage.generate') }</Button>
                    <Button>{ t('loginPage.submit') }</Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage;