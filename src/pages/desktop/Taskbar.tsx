import './Taskbar.css';
import AppButton from '../../components/ui/buttons/AppButton.tsx';
import BlogIcon from '../../assets/blog-icon.png';

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="taskbar__weather"></div>
      <div className="taskbar__main">
        <AppButton image={BlogIcon} url="/blog" />
      </div>
      <div className="taskbar__time"></div>
    </div>
  );
};

export default Taskbar;
