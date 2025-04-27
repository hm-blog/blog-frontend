import './HealthReport.css';
import AppCard from '../../components/ui/card/AppCard.tsx';

const HealthReport = () => {
  const body =
    '구디 이사 후 첫 아침 운동\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자\n 열심히하자';

  return (
    <div className="health-report-container">
      <AppCard
        imageUrl="/hoeminj/20250419203922_01.jpg"
        title="1일차 러닝"
        body={body}
        postDate={new Date()}
        imageDate="2025-04-19"
      />
      <AppCard
        imageUrl="/hoeminj/20250419203922_01.jpg"
        title="1일차 러닝"
        body={body}
        postDate={new Date()}
        imageDate="2025-04-19"
      />
      <AppCard
        imageUrl="/hoeminj/20250419203922_01.jpg"
        title="1일차 러닝"
        body={body}
        postDate={new Date()}
        imageDate="2025-04-19"
      />
      <AppCard
        imageUrl="/hoeminj/20250419203922_01.jpg"
        title="1일차 러닝"
        body={body}
        postDate={new Date()}
        imageDate="2025-04-19"
      />
    </div>
  );
};

export default HealthReport;
