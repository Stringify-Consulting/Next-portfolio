// import mobileLogo from 'pub'
import mobileLogo from '../images/mobile.png'
import devicesLogo from '../images/devices.png'
import layerLogo from '../images/layer.png'
import editLogo from '../images/pen-tool.png'
import UXLogo from '../images/mouse-square.png'
import squareLogo from '../images/3square.png'
import Image from 'next/image'


export function NitcheBox({children, iconUrl, heading}){
  return(
    <>
      <div className="border-gray-300 border bg-[#0f0f0f] rounded-3xl w-96 p-5 text-left areaContainer">
        <Image src={iconUrl} alt="icon space" width={70} height={70}/>
        <h3 className='text-lg font-bold mt-1'>{heading}</h3>
        <span className="text-gray-300">{children}</span>
      </div>
    </>
  )
}

export default function ProficientAreas() {
 return(
  <div className="bg-[#090707] text-white mt-60">
    <div className="text-7xl proficientHeader">
      <span className="italic">PROFICIENT</span> <span className="font-bold">AREAS</span>
    </div>
    <div className="flex justify-center gap-2.5 align-middle specifications">
      <div>SKILL NICHE</div>
      <div className="w-2xl h-0.5 bg-amber-50 flex justify-center mt-2.5"></div>
      <div>SPECIALTIES</div>
    </div>
 
    <section className="grid grid-cols-3 gap-x-3 gap-y-10 pt-10 p-9 sm:grid-rows-1 proficientAreaGrid">
      <NitcheBox iconUrl={mobileLogo} heading={"Mobile App Design"}>Crafting mobile applications that are user-friendly, visually appealing, and optimized for performance</NitcheBox>
      <NitcheBox iconUrl={devicesLogo} heading={"Web App Design"}>Building web applications that seamlessly blend form and function for a superior online experience</NitcheBox>
      <NitcheBox iconUrl={layerLogo} heading={"Product Strategy"}>Charting the course for success with well-informed strategies that align product goals with market demands</NitcheBox>
      <NitcheBox iconUrl={editLogo} heading={"User Interface(UI)"}>Creating standard stand out user appealing interface that distinguish your products from competitors and catches the attention of users</NitcheBox>
      <NitcheBox iconUrl={UXLogo} heading={"User Experience(UX)"}>Elevating user satisfaction through user-centric design, ensuring every interaction is meaningful and delightful</NitcheBox>
      <NitcheBox iconUrl={squareLogo} heading={"Design Systems"}>Creating cohesive design ecosystems that ensure consistency and brand integrity across all touchpoints</NitcheBox>
    </section>

  </div>
 )
}