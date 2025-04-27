import './Desktop.css';
import Slot from '../../components/slot/Slot.tsx';
import WindowLayout from '../../components/layouts/WindowLayout.tsx';
import { Route, Routes } from 'react-router-dom';
import Blog from '../Blog.tsx';
import Taskbar from './taskbar/Taskbar.tsx';
import HealthReport from '../health-report/HealthReport.tsx';

const Desktop = () => {
  return (
    <div>
      <WindowLayout>
        <Slot name="default">
          <div className="desktop__main">
            <Routes>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/health" element={<HealthReport />}></Route>
            </Routes>
          </div>
        </Slot>
        <Slot name="footer">
          <div className="desktop__taskbar">
            <Taskbar />
          </div>
        </Slot>
      </WindowLayout>
    </div>
  );
};

export default Desktop;
