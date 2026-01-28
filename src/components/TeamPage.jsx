import { useEffect } from 'react';
import Teams from './Teams';
import './TeamPage.css';

const TeamPage = () => {
  useEffect(() => {
    // Ensure we land at the top of the Team page on navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <Teams />
    </main>
  );
};

export default TeamPage;
