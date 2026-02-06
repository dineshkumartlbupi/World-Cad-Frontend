import React from 'react';

const FooterLogo = () => {
    return (
        <div style={{ 
            width: 'fit-content', 
            display: 'flex', 
            justifyContent: 'flex-start', 
            marginBottom: '10px',
            backgroundColor: '#FFFFFF',
            padding: '10px',
            borderRadius: '8px'
        }}>
            <img 
                src="/images/logolast.png" 
                alt="World Cad Design LLP Logo" 
                style={{ height: '70px', width: 'auto', objectFit: 'contain' }} 
            />
        </div>
    );
};

export default FooterLogo;
