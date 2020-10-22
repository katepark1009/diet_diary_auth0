import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from 'antd';
import { PageWrapper, VideoCard } from '../components/index'
import { Input, Card } from 'antd';
import { startGetVideos } from '../redux/actions/youtube'
const { Title, Text } = Typography;
const { Search } = Input;
const { Meta } = Card;

const Diary = () => {
  const data = useSelector(state => state.youtube.data.items)
  const dispatch = useDispatch()
  const onSearch = (value, e) => {
    dispatch(startGetVideos(value))
  }
  return (
    <div className='col-12'>
      <PageWrapper>
        <Title>YouTube Diary</Title>
        <Text type='primary'>You can track your workouts progress by simply adding YouTube videos!</Text>
        
        <div className='py-2' style={{ width: '500px' }}>
          <Search placeholder="Type a keyword" onSearch={onSearch} enterButton />
        </div>

        <div className='row'>
          {data && data.map((v, i) => <VideoCard data={v} key={i}/>)}
          {data && <div className='p-3'>
            <Card
              hoverable
              style={{ width: 310 }}
              cover={<img alt="" src={''} />}
            >
              <Meta title={<span className='text-primary'>Load more results..</span>}/>
            </Card>
          </div>}
        </div>
      </PageWrapper>
    </div>
  )
}

export default Diary