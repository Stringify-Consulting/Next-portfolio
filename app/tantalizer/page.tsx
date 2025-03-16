"use client"
import Image, { StaticImageData } from "next/image"
import tantalizerLogo from "../images/tantalizerLogo.png"
import mockupImage from "../images/MOCKUP_5.jpg"
import standAloneLogo from "../images/midpageLogo.png"
import tantalizer1 from "../images/Tantalizer_HomePage_1.png"
import tantalizer2 from '../images/TantalizerHomePage2.png'
import tantalizer3 from "../images/TantalizerHomePage3.png"
import slantedLogo from "../images/slantedLogo.png"
import breakfastImage from "../images/breakfast.png"
import footerImage from "../images/footerImage.png"
import { ReactNode } from "react"

interface PainpointProps{
  children: ReactNode;
  sectionHeader: string;
}
interface ThumbnailBgProps{
  imageUrl: string | StaticImageData
}
interface ThumbnailBg2Props{
  imageUrl: string | StaticImageData
  logoUrl: string | StaticImageData
}
interface RetrospectProps{
  children: ReactNode
  number: string
  heading: string
}

export function HeadImage(){
 return(
  <div className="pr-8 pl-8">
    <Image className="rounded-2xl" src={mockupImage} width={400} height={350} alt="mockup image"/>
  </div>
 )
}

export function MidPageLogo(){
  return(
   <>
     <Image className="w-[31rem] mt-16 mb-16" src={standAloneLogo} width={400} height={350} alt="mockup image"/>
   </>
  )
 }

export function PainpointBox({children, sectionHeader}: PainpointProps){
  return(
    <div className="rounded-2xl border p-4 mt-4">
      <button className="p-2 rounded-1xl border">{sectionHeader}</button>
      <span className="inline-block mt-2">{children}</span> 
    </div>
  )
}

export function ThumbnailBg({imageUrl}: ThumbnailBgProps){
  return(
    <div className="p-4 rounded-2xl bg-gray-600">
        <Image src={imageUrl} alt="tantalizer" width={350} height={350}/>
    </div>
  )
}

export function ThumbnailBg2({imageUrl, logoUrl}: ThumbnailBg2Props){
  return(
    <div className="p-4 rounded-2xl bg-gray-600 flex flex-col gap-8">
        <Image src={logoUrl} alt="slantedLogo" width={150} height={150}/>
        <Image src={imageUrl} alt="tantalizer" width={350} height={350}/>
    </div>
  )
}

export function RetrospectBoxes({number, heading, children}: RetrospectProps){
  return(
    <div className="rounded-2xl border p-4">
      <h2 className="text-orange-400 font-bold">{number}</h2>
      <span className="inline-block mt-3.5 mb-4">{heading}</span>
      <span className="block text-[15px]">{children}</span>

    </div>
  )
}

export function Button(){
  return(
    <div className="rounded-4xl pt-3 pb-3 pl-8 pr-8 border-2 border-amber-400 bg-gray-400 w-[15rem] mt-4">
        Next Project
    </div>
  )
}

export function Tantalizer(){
  return(
   <div className="bg-black pb-8 pt-12 text-white text-[20px] overflow-hidden">
    
      <Image src={tantalizerLogo} className="mx-auto" width={120} height={120} alt="tantalizerLogo"/>
      <span className="max-mobile:text-amber-100 max-mobile:flex justify-center max-mobile:pt-4 max-mobile:text-2xl">TANTALIZER - 2023</span>

      <section className="pt-8 text-white flex flex-col justify-center text-center gap-6 items-center pb-4">
        <p>
          <span className="font-bold text-3xl">Resturant Website</span> <br />
          <span className="italic text-2xl">Redesign</span>
        </p>

         <HeadImage />
      </section>

      <section className="text-white mt-4 gap-0 flex pl-6">
        <div className="flex flex-col gap-4 list-none mb-2 w-[10rem]">
           <div className="flex flex-col">
             <li className="font-bold">Client:</li>
             <li className="text-[18px]">MyCare Assistant</li>
           </div>
           <div className="flex flex-col">
             <li className="font-bold">My Role:</li>
             <li>Lead Designer</li>
           </div>
           <div className="flex flex-col">
             <li className="font-bold">Timeline:</li>
             <li>2 Months</li>
           </div>
        </div>

        <div className="flex flex-col gap-4 list-none mb-2 w-[12rem]">
           <div className="flex flex-col w-80 text-[17px]">
              <li className="font-bold text-2xl">Responsibilities:</li>
              <li>User Research</li>
              <li>User flows & Wireframe</li>
              <li>Design Direction</li>
              <li>Storyboarding</li>
              <li>Visual Design</li>
            </div> 
        </div>
      </section>

       <div className="text-white mt-10 pt- pl-10 pr-10 pb-10">
          <h2>Overview:</h2>
          <section>
              <div className="pb-11">Tantalizers PLC stands as one of Nigeria&#39;s pioneering quick-service restaurant chains, established in May 1997. For over two decades, Tantalizers has been a household name, offering a diverse menu of fast food options, including both Nigerian delicacies and international dishes, to cater to the evolving tastes of Nigerians.</div>
              <div>As the world of technology revolves, Tantalizers recognised the need to evolve, particularly in making it easier for customers to order their food. Which led to optimising outlets, revising product offerings, and most importantly adopting new digital strategies to appeal to Nigeria&#39;s increasingly tech-savvy consumer base.</div>
          </section>
       </div>

       <section className="mt-8 bg-amber-900 pl-10 pt-8 pr-10 pb-10">
         <div>
           <h2 className="text-4xl pb-6">THE PROBLEM</h2>
            <ol className="list-disc">
             <li>
               <span className="font-bold">Increased Competition:</span> Tantalizers faces stiff competition from international chains like KFC and Domino&#39;s, as  well as local competitors such as Chicken Republic.
              </li> 
             <li>
               <span className="font-bold">Lack of Modernization:</span> Competitors have adapted to changing consumer preferences by offering lower-cost options and robust digital ordering systems, areas where Tantalizers has struggled to modernize.
              </li> 
             <li>
               <span className="font-bold">Financial Challenges:</span> Tantalizers has recorded losses since 2020. </li>
             <li>
                <span className="font-bold">Need for Digital Strategy:</span> Tantalizers needs to adopt new digital strategies to appeal to Nigeria&#39;s increasingly tech-savvy consumer base.
             </li>
            </ol>
            
         </div>

         <div className="mt-14">
           <h2 className="text-4xl pb-6">THE SOLUTION</h2>
             <p>In response to the challenges of increased competition, a need for modernisation, and the imperative to adopt a robust digital strategy, the core solution proposed is a comprehensive redesign of Tantalizers&#39; website. This redesign aims to transform the online customer experience, making it seamless and intuitive for users to explore the menu, place orders, and engage with the brand
             </p>
         </div>
       </section>

        <MidPageLogo />

       <div className="pl-8 pr-8">
          <h1 className="text-5xl leading-12 font-bold">THE WEBSITE UX AUDIT AND RESEARCH PROCESS</h1>
          <div className="mt-10 text-[20px]">
            To get started with the website redesign project, I had a meeting with the stakeholders about the changes they were looking forward to in the new website. This was necessary to understand and align on the desired goals.
             
            <span className="text-[20px] mt-5 inline-block">The process I took includes; </span>
             <ol className="list-disc pl-8 leading-normal">
               <li>Worked on a detailed audit of the existing platform</li>
               <li>Design thinking workshops with key stakeholders.</li>
               <li>Map out the content structure and design layout to convert customers.</li>
               <li>Test our discovery.</li> 
             </ol>

             <span className="inline-block mt-5">Below is the summary of the challenges users faced with Tantalizer’s old website.</span>
          </div>
        </div> 

      <section className="bg-amber-800 mt-8 pt-6 pl-6 pr-6 pb-8">
          <h2 className="text-[27px]">Website Visitor&#39;s Painpoint</h2>
          <div className="flex gap-4 flex-col">
            <div className="rounded-2xl border p-4 mt-4">
              <span className="inline-block mt-2 text-[28px]">I had 18 users visit the website, 12 were new visitors</span> 
            </div>
            <PainpointBox sectionHeader="Home Page">
                The menu items on the homepage are too small to see clearly, and there&#39;s no way to filter by dietary restrictions
            </PainpointBox>
            <PainpointBox sectionHeader="Ordering Process">
                The online ordering process is confusing, and i&#39;m not sure my order went through
            </PainpointBox>
            <PainpointBox sectionHeader="Customer Support">
                There&#39;s no easy way to contact customer support when i had problems with my order.
            </PainpointBox>
            <PainpointBox sectionHeader="Home Page">
                There is no clear indication of what makes Tantalizer unique or why i should order from them
            </PainpointBox>
            <PainpointBox sectionHeader="General">
                The website lacks a clear and consistent visual design, making it look unprofessional
            </PainpointBox>
            <PainpointBox sectionHeader="Ordering Process">
                The &quot;add to cart &quot; button is hard to find, and the process is not intuitive
            </PainpointBox>
            <PainpointBox sectionHeader="Delivery Information">
                The website does not provide an estimated time of arrival, just a broad delivery window
            </PainpointBox>
            <PainpointBox sectionHeader="Home Page">
                The loading speed of the homepage is very slow, especially on mobile data
            </PainpointBox>
            <PainpointBox sectionHeader="Menu Page">
                There are no user reviews or ratings for the menu items, so i don&#39;t know what&#39;s popular
            </PainpointBox>
          </div>
      </section>

      <section className="mt-12 pl-8 pr-8">
        <h1 className="text-[40px]">DIFFERENT USERS AND THEIR <br /> GOALS</h1>

        <div className="pt-8">
            <h3 className="font-bold mb-4">The Quick Bite</h3>
            <span>These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.</span>
        </div>

        <div className="pt-8">
            <h3 className="font-bold mb-4">The Family Meal Planner</h3>
            <span>These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.</span>
        </div>

        <div className="pt-8">
            <h3 className="font-bold mb-4">The Nostalgic Regular</h3>
            <span>These users are loyal Tantalizers customers who have been enjoying their food for years. They have their favorite dishes and appreciate the familiar taste.</span>
        </div>
        
        <div className="pt-8">
            <h3 className="font-bold mb-4">The New Food Explorer</h3>
            <span>These users are new to Tantalizers or are looking to try new food options. They are curious about the menu and want to explore different flavors.</span>
        </div>
      </section>
        
      <section className="mt-12 pl-8 pr-8">
        <h1 className="text-4xl">CURATING A <br /> DELECTABLE DIGITAL EXPERIENCE  TO SATISFY CRAVINGS AND BUILD <br /> LOYALTY</h1>

        <span className="inline-block pt-4 pb-4">Recognising the need for trust in online food ordering, I designed the Tantalizers website to prioritise reliability and ease of use. Authentic food photography replaced generic images, and multiple contact channels were provided.</span>
        <span className="inline-block pt-4 pb-4">The UX writing, carefully crafted with a content strategist, portrayed Tantalizers as a friendly, accessible, and value-driven brand. A responsive design was implemented, ensuring a seamless experience and easy content updates.</span>
        <span className="inline-block pt-4 pb-4">The homepage features clear copy and prominent calls-to-action, simplifying menu exploration and order placement, ultimately building customer loyalty.</span>
      </section>

      <div className="flex flex-col gap-8 pr-8 mt-8 pl-8 items-center">
        <ThumbnailBg imageUrl={tantalizer1}/>
        <ThumbnailBg imageUrl={tantalizer2}/>
        {/* slante logo */}
        <ThumbnailBg2 logoUrl={slantedLogo} imageUrl={tantalizer3}/>
      </div>

      <section className="mt-16 mb-20 pl-8 pr-8 text-[15px]">
        <h1 className="text-4xl">FROM BROWSE <br /> TO BITE: OPTIMIZING THE MENU FOR <br /> ORDERS</h1>

            <div className="mt-8">
              <span>
              Acknowledging that the menu is the heart of the Tantalizers experience, I redesigned the page to be intuitive and visually appealing.</span>
              
              <span className="inline-block mt-10">Clear categorisation and high-resolution food images were prioritised, allowing users to easily browse and discover their favourite dishes. Detailed descriptions and nutritional information were provided to empower informed choices. A streamlined ordering process, integrated directly within the menu, minimised friction and encouraged immediate action.</span>
              
              <span  className="inline-block mt-10">The design reinforced Tantalizers&#39; brand values of variety, quality, and convenience, transforming the menu page into a delightful and efficient gateway to culinary satisfaction
              </span>
            </div>
      </section>

      <div className="flex flex-col gap-8 pr-8 mt-8 pl-8 items-center mb-20">
        <ThumbnailBg imageUrl={breakfastImage}/>
      </div>
      
      <section className="p-5 bg-amber-900 mb-20">
          <h3>TIME TO RETROSPECT</h3>
          <span className="text-[14px]">So these were my learning after working on this project:</span>

          <div className="flex flex-col gap-6 mt-8">
            <RetrospectBoxes number="02" heading="Inclusive Inteface Design">
            A deep dive into the healthcare sector revealed the urgent need for user-centred solutions in Nigeria and surrounding regions. This project channeled my passion for designing for social impact.
            </RetrospectBoxes>

            <RetrospectBoxes number="02" heading="Inclusive Inteface Design">
                Designing for a multi-generational audience required a nuanced approach to accessibility and usability. I gained valuable experience in creating inclusive interfaces.
            </RetrospectBoxes>
          </div>
      </section>

      <section className="text-center flex flex-col items-center justify-center">
          <h2>NEXT PROJECT</h2>
          <h2>Real Estate Website Redesign</h2>

          <Button />
          <div className="p-8">
            <Image src={footerImage} alt="footerImage" />
          </div>
      </section>

   </div>
  )
}

export default Tantalizer