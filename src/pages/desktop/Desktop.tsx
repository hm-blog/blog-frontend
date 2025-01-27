import './Desktop.css';
import Slot from '../../components/slot/Slot.tsx';
import WindowLayout from '../../components/layouts/WindowLayout.tsx';
import { Route, Routes } from 'react-router-dom';

const Desktop = () => {
  return (
    <div>
      <WindowLayout>
        <Slot name="default">
          <div className="desktop__main">
            <Routes>
            </Routes>
          </div>
        </Slot>
        <Slot name="footer">
          <div className="desktop__taskbar">
          </div>
        </Slot>
      </WindowLayout>
    </div>
  );
};

export default Desktop;
