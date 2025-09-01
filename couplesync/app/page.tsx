"use client"
import React, { useState, useEffect } from 'react';

const CoupleOfmeLanding: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCreateRoom = () => {
    alert('Create Room functionality would be implemented here!');
  };

  const handleGetStarted = () => {
    alert('Get Started functionality would be implemented here!');
  };

  // Inline styles for the component
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #ff94b9, #ff6384)', 
      color: 'white',
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative',
      padding: isMobile ? '15px' : '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '15px 20px' : '20px 40px',
      zIndex: 10,
    },
    appName: {
      fontWeight: 'bold',
      fontSize: isMobile ? '1.5rem' : '1.8rem',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
    },
    createRoomBtn: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(5px)',
      border: '2px solid white',
      borderRadius: '25px',
      padding: isMobile ? '8px 16px' : '10px 25px',
      fontWeight: 'bold',
      color: 'white',
      cursor: 'pointer',
      boxShadow: '0 0 15px rgba(255, 99, 132, 0.5)',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.9rem' : '1rem',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      textAlign: 'center',
      zIndex: 10,
      padding: isMobile ? '20px' : '40px',
    },
    ribbon: {
      width: isMobile ? '120px' : '200px',
      height: isMobile ? '8px' : '12px',
      background: 'linear-gradient(90deg, #ff6384, #f49fb7)',
      borderRadius: '30px',
      marginBottom: isMobile ? '20px' : '30px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: isMobile ? '2.5rem' : '4rem',
      fontWeight: 900,
      margin: 0,
      lineHeight: 1.1,
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      marginBottom: '15px',
    },
    tagline: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      margin: '10px 0 40px 0',
      fontStyle: 'italic',
      maxWidth: '500px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    },
    getStartedBtn: {
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '30px',
      padding: isMobile ? '14px 40px' : '18px 60px',
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: 'bold',
      color: '#ff6384',
      cursor: 'pointer',
      boxShadow: '0 0 25px rgba(255, 148, 185, 0.7)',
      transition: 'all 0.3s ease',
    },
    heartsBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    },
    heart: {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      display: 'inline-block',
      height: '30px',
      width: '30px',
      transform: 'rotate(-45deg)',
    },
  };

  // Generate heart elements for background
  const renderHearts = () => {
    const hearts = [];
    const positions = [
      { top: '10%', left: '10%', animationDelay: '0s' },
      { top: '25%', left: '80%', animationDelay: '1s' },
      { top: '60%', left: '15%', animationDelay: '2s' },
      { top: '45%', left: '70%', animationDelay: '3s' },
      { top: '75%', left: '60%', animationDelay: '4s' },
      { top: '30%', left: '40%', animationDelay: '5s' },
    ];

    for (let i = 0; i < positions.length; i++) {
      hearts.push(
        <div
          key={i}
          className="heart"
          style={{
            ...styles.heart,
            top: positions[i].top,
            left: positions[i].left,
            animationDelay: positions[i].animationDelay,
          }}
        />
      );
    }

    return hearts;
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.appName}>CoupleSync</div>
        <button 
          style={styles.createRoomBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          onClick={handleCreateRoom}
        >
          Create Room
        </button>
      </header>
      
      <main style={styles.main}>
        <div style={styles.ribbon}></div>
        <h1 style={styles.title}>Chat and Listen<br />Together</h1>
        <p style={styles.tagline}>Listen To Top Romantic Songs While Chatting</p>
        <button 
          style={styles.getStartedBtn}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 148, 185, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 148, 185, 0.7)';
          }}
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </main>
      
      <div style={styles.heartsBackground}>
        {renderHearts()}
      </div>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(-45deg) scale(1);
            }
            50% {
              transform: translateY(-20px) rotate(-45deg) scale(1.1);
            }
            100% {
              transform: translateY(0) rotate(-45deg) scale(1);
            }
          }
          
          .heart {
            animation: float 6s ease-in-out infinite;
          }
          
          .heart:before,
          .heart:after {
            content: "";
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            height: 30px;
            position: absolute;
            width: 30px;
          }
          
          .heart:before {
            top: -15px;
            left: 0;
          }
          
          .heart:after {
            left: 15px;
            top: 0;
          }
        `}
      </style>
    </div>
  );
};

export default CoupleOfmeLanding;