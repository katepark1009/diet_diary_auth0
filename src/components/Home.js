import React from 'react'
import { Typography } from 'antd';
import { PageWrapper } from '../components/index'
const { Title, Text } = Typography;

const Home = () => {
  return (
    <div className='col-12'>
      <PageWrapper>
        <Title>Diet Diary</Title>
        <Text type='primary'>You can track your workouts progress by simply adding YouTube videos!</Text>
        <img src='/illust1.png' alt='' style={{ width: 700 }}/>
      </PageWrapper>
    </div>
  )
}

export default Home