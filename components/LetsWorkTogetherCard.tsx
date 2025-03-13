"use client";
import Image from 'next/image';
import ButtonWithIcon from './Buttons';

const WorkTogether: React.FC = () => {
  return (
    
      <div
        style={{
          backgroundColor: 'rgba(174, 174, 174, 0.2)', 
          padding: '20px',
          margin: '0 auto', 
          width: '1272px', 
          height: '479px', 
          borderRadius: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          flexShrink: '0',
          top: '355px',
          zIndex: '1',
        }}
      >
        {/* Image Section (takes 40% of the div) */}
        <div
          style={{
            zIndex: 1,
            flex: '0 0 40%', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #3B3B3B',
            height: '439px',
            borderRadius: '24px',
            top: '8px',
            left: '22px',
            backgroundColor: 'rgba(30, 30, 30, 1.0)',
          }}
        >
          <Image
            style={{
              zIndex: 1,
              top: '8px',
              left: '22px',
              bottom: '20px',
            }}
            src="/image/image.png"
            alt="Profile"
            width={376}
            height={439}
          />
        </div>

        {/* Text and Button Section (takes 60% of the div) */}
        <div
          style={{
            flex: '0 0 60%', 
            paddingLeft: '20px',
          }}
        >
          <p
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontSize: '52px',
              fontWeight: '500',
              fontStyle: 'normal',
              lineHeight: '100%',
              marginBottom: '10px',
              marginLeft: '50px',
              left: '548px',
              top: '122px',
              zIndex: '1',
            }}
          >
            Let’s{' '}
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'poppins',
                fontSize: '52px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              work
            </span>{' '}
            together on your
          </p>
          <p
            style={{
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'poppins',
                fontSize: '42px',
                fontWeight: '500',
                fontStyle: 'normal',
                lineHeight: 'normal',
                marginLeft: '50px',
              }}
            >
              next project
            </span>
          </p>
          <div
            style={{
              paddingTop: '20px',
              paddingRight: '32px',
              paddingBottom: '20px',
              paddingLeft: '32px',
              marginRight: '150px',
              marginLeft: '50px',
              borderRadius: '70px',
              padding: '15px 28px',
            }}
          >
            <ButtonWithIcon email="lajimohofficial@gmail.com" />
          </div>
        </div>
      </div>
    
  );
};

export default WorkTogether;
