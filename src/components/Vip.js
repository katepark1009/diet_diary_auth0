import React from 'react'
import { Typography } from 'antd';
import { PageWrapper } from '../components/index'
const { Title, Text } = Typography;

const Vip = () => {
  return (
    <div className='col-12'>
      <PageWrapper>
        <Title>Vip</Title>
        <Text type='primary'>You can track your workouts progress by simply adding YouTube videos!</Text>
      </PageWrapper>
    </div>
  )
}

export default Vip