import React from 'react';

export default function Page() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#030303',
      backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #030303 80%)',
      color: '#ffffff',
      fontFamily: '"Inter", "Outfit", system-ui, sans-serif',
      padding: '2rem',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 242, 254, 0.05) 0%, rgba(0,0,0,0) 70%)',
        top: '-10%',
        left: '-10%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 172, 254, 0.05) 0%, rgba(0,0,0,0) 70%)',
        bottom: '-10%',
        right: '-10%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Main Card */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '600px',
        padding: '3.5rem 2.5rem',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Badge */}
        <span style={{
          fontSize: '0.85rem',
          fontWeight: '700',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          background: 'rgba(0, 242, 254, 0.1)',
          border: '1px solid rgba(0, 242, 254, 0.2)',
          color: '#00f2fe',
          marginBottom: '2rem',
          display: 'inline-block'
        }}>
          Coming Soon
        </span>

        {/* Title */}
        <h1 style={{
          fontSize: '2.75rem',
          fontWeight: '900',
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          fontFamily: '"Outfit", system-ui, sans-serif'
        }}>
          Ayato Studio
          <span style={{
            display: 'block',
            fontSize: '2rem',
            background: 'linear-gradient(to right, #00f2fe, #4facfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: '0.5rem'
          }}>
            Finance & AI
          </span>
        </h1>

        {/* Description */}
        <p style={{
          color: '#94a3b8',
          fontSize: '1.05rem',
          lineHeight: '1.6',
          marginBottom: '2.5rem',
          maxWidth: '460px'
        }}>
          金融市場分析の知見と最先端のAI技術を融合させ、これまでにない投資インテリジェンスと意思決定の自動化を提供します。
        </p>

        {/* Loading / Progress bar mockup */}
        <div style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '10px',
          position: 'relative',
          marginBottom: '1rem',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '35%',
            background: 'linear-gradient(to right, #00f2fe, #4facfe)',
            borderRadius: '10px'
          }} />
        </div>

        {/* Status Text */}
        <p style={{
          fontSize: '0.8rem',
          color: '#475569',
          fontWeight: '500',
          margin: 0
        }}>
          Project Initialized &bull; Architecture Set
        </p>
      </div>

      {/* Footer */}
      <footer style={{
        position: 'absolute',
        bottom: '2rem',
        fontSize: '0.75rem',
        color: '#475569',
        letterSpacing: '0.05em',
        zIndex: 10
      }}>
        &copy; {new Date().getFullYear()} Ayato Studio. All rights reserved.
      </footer>
    </div>
  );
}
