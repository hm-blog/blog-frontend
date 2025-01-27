import './AppButton.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

interface AppButtonProps {
  url: string;
  image: string;
  size?: 'small' | 'default' | 'large';
}

const AppButton = ({ size, image, url }: AppButtonProps) => {
  const defaultPage = '/';

  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const onClickMenu = () => {
    if (location.pathname !== url) {
      return navigate(url);
    } else return navigate(defaultPage);
  };

  useEffect(() => {
    setIsActive(location.pathname === url);
  }, [location]);
  const getSize = () => {
    if (size === undefined) size = 'default';

    if (size === 'small') return '16';
    else if (size === 'default') return '32';
    else if (size === 'large') return '48';
  };

  return (
    <div onClick={onClickMenu} className={classNames({ 'app-btn': true, activate: isActive })}>
      <img src={image} alt="app-icon" width={getSize()} />
      <div className={classNames({ status: true, activate: isActive })} />
    </div>
  );
};

export default AppButton;
