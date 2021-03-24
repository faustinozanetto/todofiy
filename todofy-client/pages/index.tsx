import React from 'react';
import { SEO } from '../components/seo';
import { AppLayout } from '../layout';

export default function Home() {
  return (
    <AppLayout>
      <SEO
        title='Home | Todofy'
        description='The coolest Todo App in the web'
      />
    </AppLayout>
  );
}
