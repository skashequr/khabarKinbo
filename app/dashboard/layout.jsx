import React from 'react';
import Aside from './shared/Aside';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-4 dashboard-container'>
            <Aside />
            <div className='col-span-3 border'>
            {
                children
            }
            </div>
        </div>
    );
};

export default DashboardLayout;