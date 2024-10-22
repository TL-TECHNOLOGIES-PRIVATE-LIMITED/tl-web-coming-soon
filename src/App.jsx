
import { useEffect, useState } from 'react';
import ComingSoon from './components/ComingSoon';


const App = () => {


// <======================================== NOTES START ==============================================>

// Libraries used: "tailwind-css" for CSS
// Read the documentation on their respective sites for the above-mentioned libraries before making changes in the code.
// To run the code: npm run dev
// First install all dependencies: npm install
// Then run the code: npm run dev

// Created date: 22-OCT-2024 || Created by: Gurudas P R || Module: 1 ||
// Modified date: 22-OCT-2024 || Modified by: Gurudas P R || Module: 1 ||

 // Technical summary(Pre-setups) created date/by :  Murthasa Ali ||
// Domain:   || 
// Hosting:   ||
// SSL:   ||
// Database:  ||

// Phase summary: || Created date/by: Gurudas P R ||
// Phase 1:  Setups ||
// Phase 2:  Development/Main page creation ||
// Phase 3:  Production ||

 // <======================================== NOTES END ==============================================> 








  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div>
      <ComingSoon loading={loading} />
    </div>
  );
};

export default App;