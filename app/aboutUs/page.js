import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import React from 'react'

function page() {
  return (
    <>   
    <Navbar/> 
          <div className="h-screen xl:h-[1101px] w-full bg-[url('/museum.png')] bg-cover bg-center bg-no-repeat mt-[15px] sm:mt-[50px] lg:mt-[80px]">
          <div className="absolute inset-0"></div>
        <div className="relative z-10 px-6 sm:px-10 pt-16 sm:pt-20">
          <h1 className="text-white text-lg font-bold">ABOUT US </h1>
          <p className="text-white text-20px sm:text-lg mt-[10px]">Lorem ipsum dolor sit amet consectetur. Sagittis feugiat a et egestas enim sit est. Malesuada auctor vitae faucibus porttitor venenatis purus. Id pellentesque a eget semper scelerisque arcu phasellus netus. In morbi in a facilisi ipsum at urna id phasellus. Aliquam nunc sodales pulvinar sed erat eu est auctor. Est id tellus eu eget fermentum ipsum quisque massa mauris.
Accumsan ornare faucibus dolor mi eget adipiscing nullam imperdiet. Mauris purus sed orci quis elementum. Nec ornare ultrices netus est. Non sed tincidunt faucibus at. Maecenas mattis blandit libero sed. Quis bibendum cras neque massa amet vulputate pharetra viverra. Proin diam egestas id lectus mi et. Malesuada faucibus sit egestas nec elementum nisi quam duis.
Placerat elementum ultrices sit malesuada eu vel sociis vitae sit. Odio nec diam ac amet in sem. Nunc sodales nisi turpis tincidunt. In suspendisse laoreet iaculis integer nibh sapien sit. Gravida adipiscing facilisis varius cursus consequat facilisis dui leo. Scelerisque ornare semper sed leo elit quis ullamcorper a.
Risus sapien iaculis adipiscing cursus vulputate ridiculus tempus purus. Ullamcorper convallis nunc felis varius at eu. Accumsan diam massa aenean faucibus semper urna fames volutpat. Sollicitudin ut quis ullamcorper neque. Ipsum a augue scelerisque pharetra pellentesque venenatis enim turpis. Scelerisque venenatis faucibus faucibus et adipiscing blandit pellentesque. Sit amet massa ultrices.
          </p>
        </div>

         </div>
    <Footer/>
    </>

  )
}

export default page