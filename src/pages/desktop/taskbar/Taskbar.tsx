import './Taskbar.css';
import AppButton from '../../../components/ui/buttons/AppButton.tsx';
import BlogIcon from '../../../assets/blog-icon.png';
import WeatherWidget from './WeatherWidget.tsx';

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="taskbar__weather">
        <WeatherWidget />
      </div>
      <div className="taskbar__main">
        <AppButton image={BlogIcon} url="/blog" />
      </div>
      <div className="taskbar__time"></div>
    </div>
  );
};

export default Taskbar;
