import '../global.module.css';

const MainLayout: React.FC = ({ children }: {children: any}) => {
  return (
    <div className="blue-main-bg">
      {children}
    </div>
  );
};

export default MainLayout;
