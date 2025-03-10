import Image from "next/image";
import greyImage1 from '../images/recentCards (3).png'
import greyImage2 from '../images/recentCards (5).png'
import greyImage3 from '../images/recentCards (2).png'
import coloredImage1 from '../images/recentCards (4).png'
import coloredImage2 from '../images/recentCards (6).png'
import coloredImage3 from '../images/recentCards (1).png'

export function RecentProjectSection(){
 return(
  <>
     <div className="text-7xl text-white mt-8 recentProjectHeading">
        <span className="font-bold">RECENT</span> <span   className="italic">PROJECTS</span> 
      </div>

    <section className="flex justify-center gap-2.5 align-middle subheader">
       <div>CASE STUDIES</div>
       <div className="w-2xs h-0.5 bg-amber-50 flex justify-center mt-2.5"></div>
       <div>LIVE PROJECTS</div>
       <div className="w-2xs h-0.5 bg-amber-50 flex justify-center mt-2.5"></div>
       <div>DESIGN PROCESS</div>
    </section>

    <section className="flex gap-11 pl-17 pr-14 pt-11 justify-center recentProjects">
      <div className="relative w-64 h-64">
        <Image src={greyImage1} className="absolute inset-0 w-max h-[20rem] object-cover transition-opacity duration-300 hover:opacity-0" alt="image"/>

        <Image src={coloredImage1} className="absolute inset-0 w-max h-[20rem] object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
      </div>
      <div className="relative w-64 h-64">
        <Image src={greyImage2} className="absolute inset-0 w-max h-[20rem] object-cover transition-opacity duration-300 hover:opacity-0" alt="image"/>

        <Image src={coloredImage2} className="absolute inset-0 w-[30rem] h-[20rem] object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
      </div>
      <div className="relative w-64 h-64">
        <Image src={greyImage3} className="absolute inset-0 w-max h-[20rem] object-cover transition-opacity duration-300 hover:opacity-0" alt="image"/>

        <Image src={coloredImage3} className="absolute inset-0 w-[25rem] h-[20rem] object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
      </div>

    </section>
  </>
 )
}

export default RecentProjectSection