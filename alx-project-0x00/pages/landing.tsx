// pages/landing.tsx
import React from 'react';
import Button from '../components/Button';

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Landing Page Buttons</h1>
      
      <div className="space-y-4">
        {/* Small Buttons */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Small Buttons</h2>
          <Button title="Small Rounded-Sm" styles="text-sm rounded-sm" />
          <Button title="Small Rounded-Md" styles="text-sm rounded-md ml-2" />
          <Button title="Small Rounded-Full" styles="text-sm rounded-full ml-2" />
        </div>
        
        {/* Medium Buttons */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Medium Buttons</h2>
          <Button title="Medium Rounded-Sm" styles="text-base rounded-sm" />
          <Button title="Medium Rounded-Md" styles="text-base rounded-md ml-2" />
          <Button title="Medium Rounded-Full" styles="text-base rounded-full ml-2" />
        </div>
        
        {/* Large Buttons */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Large Buttons</h2>
          <Button title="Large Rounded-Sm" styles="text-lg rounded-sm" />
          <Button title="Large Rounded-Md" styles="text-lg rounded-md ml-2" />
          <Button title="Large Rounded-Full" styles="text-lg rounded-full ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
