import React from 'react'
import { Typography } from 'antd';
import { PageWrapper } from '../components/index'
const { Title, Text } = Typography;

const Video = () => {
  return (
    <div className='col-12'>
      <PageWrapper>
        <Title>Video</Title>
        <Text type='primary'>You can track your workouts progress by simply adding YouTube videos!</Text>
      </PageWrapper>
    </div>
  )
}

export default Video