import React from "react";

const features = [
  {
    number: "01",
    title: "Designing for Social Impact",
    text: "A deep dive into the healthcare sector revealed the urgent need for user-centered solutions in Nigeria and surrounding regions. This project channeled my passion for designing for social impact.",
  },
  {
    number: "02",
    title: "Inclusive Interface Design",
    text: "Designing for a multi-generational audience required a nuanced approach to accessibility and usability. I gained valuable experience in creating inclusive interfaces.",
  },
  {
    number: "03",
    title: "Admin Workflow & UX",
    text: "Understanding the administrator's workflow was paramount. I learned how to design intuitive admin interfaces that directly impact the end-user experience.",
  },
  {
    number: "04",
    title: "Data-Driven Design Rationale",
    text: "Data-driven design is essential. Every UI element must be justified and aligned with user needs and business goals. I honed my ability to articulate design rationale to stakeholders.",
  },
];

const AdminPortal: React.FC = () => {
  return (
    <div className="admin-portal">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">ADMIN PORTAL</h1>
        <p className="description">
          The admin portal was designed to manage the requests from the client
          and also the care professional. To ensure proficient services are
          being delivered appropriately.
        </p>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* iMac Preview */}
        <div className="imac-preview">
          <img
            src="/assets/iMac 24 inch.png"
            alt="Admin Portal Preview"
            className="imac-image"
          />
        </div>

        {/* Retrospective Section */}
        <section className="retro-section">
          <h2 className="retro-title">Time to retrospect!</h2>
          <p className="retro-description">
            So these were my learnings after working on this project:
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-number">{feature.number}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        /* Base Styles */
        .admin-portal {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          padding: 80px 0;
        }

        .title {
          font-family: 'Figtree', sans-serif;
          font-size: 80px;
          font-weight: 900;
          line-height: 96px;
          color: #ffffff;
          margin: 0;
        }

        .description {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 40px;
          color: #aaaaaa;
          max-width: 568px;
          margin: 0;
        }

        .imac-preview {
          width: 100%;
          max-width: 932px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .imac-image {
          width: 100%;
          height: auto;
        }

        .retro-section {
          background: #1b1b1b;
          border-radius: 40px;
          padding: 60px;
          margin: 80px 0;
        }

        .retro-title {
          font-family: 'Figtree', sans-serif;
          font-size: 48px;
          font-weight: 900;
          line-height: 58px;
          color: #ffffff;
          margin: 0 0 24px 0;
        }

        .retro-description {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          line-height: 32px;
          color: #a2a2a2;
          margin: 0 0 40px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .feature-card {
          background: #272727;
          border-radius: 24px;
          padding: 32px;
        }

        .feature-number {
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #e8ac31;
          display: block;
          margin-bottom: 16px;
        }

        .feature-title {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 32px;
          color: #ffffff;
          margin: 0 0 16px 0;
        }

        .feature-text {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          line-height: 24px;
          color: #a2a2a2;
          margin: 0;
        }

        /* Tablet Styles (768px - 1024px) */
        @media (max-width: 1024px) {
          .header {
            flex-direction: column;
            padding: 60px 0;
            gap: 24px;
          }

          .title {
            font-size: 64px;
            line-height: 72px;
            text-align: center;
          }

          .description {
            font-size: 20px;
            line-height: 32px;
            text-align: center;
            max-width: 100%;
          }

          .retro-section {
            padding: 40px;
            margin: 60px 0;
            border-radius: 32px;
          }

          .retro-title {
            font-size: 40px;
            line-height: 48px;
          }

          .features-grid {
            gap: 32px;
            grid-template-columns: repeat(2, minmax(300px, 1fr));
          }

          .feature-card {
            padding: 24px;
          }

          .feature-title {
            font-size: 20px;
            line-height: 28px;
          }

          .feature-text {
            font-size: 14px;
            line-height: 20px;
          }
        }

        /* Mobile Styles (<768px) */
        @media (max-width: 768px) {
          .title {
            font-size: 48px;
            line-height: 56px;
          }

          .description {
            font-size: 18px;
            line-height: 28px;
          }

          .retro-section {
            padding: 32px 24px;
            margin: 40px 0;
            border-radius: 24px;
          }

          .retro-title {
            font-size: 32px;
            line-height: 38px;
          }

          .retro-description {
            font-size: 18px;
            line-height: 24px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .feature-card {
            padding: 20px;
          }
        }

        /* Small Mobile (<480px) */
        @media (max-width: 480px) {
          .title {
            font-size: 36px;
            line-height: 44px;
          }

          .description {
            font-size: 16px;
            line-height: 24px;
          }

          .retro-section {
            padding: 24px 16px;
          }

          .feature-number {
            font-size: 28px;
          }

          .feature-title {
            font-size: 18px;
            line-height: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminPortal;