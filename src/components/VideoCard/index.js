import React from 'react'
import { useDispatch } from 'react-redux'
import { Card } from 'antd';

const { Meta } = Card;

const VideoCard = ({data, key}) => {
  return (
    <div key={key} className='p-3'>
      <Card
        hoverable
        style={{ width: 310 }}
        cover={<img alt="" src={data.snippet.thumbnails.high.url} />}
      >
        <Meta title={data.snippet.title} description={data.snippet.description} />
      </Card>
    </div>
  )
}

export default VideoCard