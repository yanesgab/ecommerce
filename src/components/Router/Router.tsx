import { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../../containers';
import { Layout } from '../Layout';

export const Router: FunctionComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Navigate replace to='/home' />} />
      </Routes>
    </Layout>
  )
}