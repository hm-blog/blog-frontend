import './AppCard.css';
import CardLayout from '../../layouts/CardLayout.tsx';
import Slot from '../../slot/Slot.tsx';
import * as dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { SERVER_IMAGE_URL } from '../../../config';

interface AppCardProps {
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
  imageUrl: string;
  imageDate: string;
  title: string;
  body: string;
  postDate: Date;
}

const AppCard = ({ imagePosition, imageUrl, imageDate, title, body, postDate }: AppCardProps) => {
  const [postDateTime, setPostDateTime] = useState<string>('');

  if (imagePosition === undefined) imagePosition = 'left';
  const imageFullPath = `${SERVER_IMAGE_URL}/${imageUrl}`;

  useEffect(() => {
    const dateTime = dayjs(postDate);
    setPostDateTime(dateTime.format('YYYY-MM-DD HH:mm:ss'));
  }, []);

  return (
    <CardLayout imagePosition={imagePosition}>
      <Slot name="image">
        <div className="card-image">
          <img src={imageFullPath} alt="이미지_01" />
          <p className="card-image__date">{imageDate}</p>
        </div>
      </Slot>
      <Slot name="content">
        <div className="card-content">
          <h2 className="card_content__title">{title}</h2>
          <p className="card-content__time">{postDateTime}</p>
          <p className="card-content__body">{body}</p>
        </div>
      </Slot>
    </CardLayout>
  );
};

export default AppCard;
