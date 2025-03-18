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
 <Link href="/image-card-structure" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  image card components
 </Link>
 <Link href="/toggle-button" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  toggle button
 </Link>
 <Link href="/arrow-button" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  arrow button
 </Link>
 <Link href="/sliding-image" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  sliding image card 
 </Link>
 <Link href="/want-to-know" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  want to know card 
 </Link>
 <Link href="/project-card" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  product card 
 </Link>
 <Link href="/thank-you-card" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  Thank you card 
 </Link>
 <Link href="/my-care-assistants" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  MyCare Assistants Design 
 </Link>
 <Link href="/slider-bar" style={{ color: '#3182ce', textDecoration: 'underline' }}>
 Sidebar Design 
 </Link>
    </div>
      
  );
};

export default Home;




