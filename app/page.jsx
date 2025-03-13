import Link from 'next/link';


const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f5f5f5', 
        flexDirection: 'column'
      }}
    >
      
       {/* Link to another page */}
   <Link href="/about-me-card" style={{ color: '#3182ce', textDecoration: 'underline' }}>
   About Me Card Component
 </Link>
 <Link href="/about-first-card" style={{ color: '#3182ce', textDecoration: 'underline' }}>
 About First Card Component
 </Link>
 <Link href="/button" style={{ color: '#3182ce', textDecoration: 'underline' }}>
 Button Component
 </Link>
 <Link href="/work-together" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  Let Work Together Component
 </Link>
    </div>
      
  );
};

export default Home;




