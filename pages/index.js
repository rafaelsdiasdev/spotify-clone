import React from 'react';
import Layout from '../components/Layout';
import Home from '../pages/home';

const Index = () => {
  return <Home />;
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
