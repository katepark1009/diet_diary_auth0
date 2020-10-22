import React from 'react'
import { Typography } from 'antd';
import { PageWrapper } from '../components/index'
const { Title, Text } = Typography;

const Trending = () => {
  return (
    <div className='col-12'>
      <PageWrapper>
        <Title>Trending</Title>
        <Text type='primary'>You can track your workouts progress by simply adding YouTube videos!</Text>
      </PageWrapper>
    </div>
  )
}

export default Trending