import React from 'react';
import { LoginForm } from '../../components/forms/LoginForm';
import { AppLayout } from '../../layout/AppLayout';

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = ({}) => {
  return (
    <AppLayout>
      <div>
        <LoginForm />
      </div>
    </AppLayout>
  );
};

export default LoginPage;
