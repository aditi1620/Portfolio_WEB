import React from "react";

function App() {
  return (
    
    <div className="App xs:w-fit sm:w-fit">
    
   <nav  className="bg-[#f8f9fb] h-[8vh] w-full flex justify-center sm:w-[100%]  ">
    <ul className="flex xs:w-fit sm:w-fit xs:h-[9vh] sm:h-[10vh]  ">
      <a href="#sec1" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>Home</li></a>
      <a href="#About" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>About</li></a>
      <a href="#sec2" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>Project</li></a>
      <a href="#certi" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>Certificate</li></a>
      <a href="https://www.linkedin.com/in/aditi-mishra-996152282/" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>Linkdien</li></a>
      <a href="https://medium.com/@mishraadis1620" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>Medium</li></a>
      <a href="https://github.com/aditi1620" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4 sm:text-2xl xs:text-2xl sm:font-semibold sm:hover:font-bold sm:hover:underline sm:hover:underline-offset-4"><li>Github</li></a>
    </ul>

   </nav>
   

    <section id="sec1" className="sec1 bg-bg1  h-[100vh] w-full object-contain bg-no-repeat xs:w-[100%] sm:w-[100%]  scroll-smooth " >
        <h1 className="text-black  text-[4.2rem] flex  relative top-[57%] left-[20%] w-[65vw] font-semibold font-outfit xs:top-[60%] xs:py-1 xs:w-[75%] xs:text-[3.8rem] sm:w-[78%]">Some Things I've Worked On</h1>

          <div className='flex relative top-[60%] sm:w-[100%] xs:w-[100%]'>

          <div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl xs:w-[25%] sm:w-[25%]  ">
            <a href="https://medium.com/@mishraadis1620/company-sales-analysis-dashboard-05b6b63e351b">  <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img1.png`}  alt='ii'/>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit ">Company Sales Dashboard</h1></a>
            </div>
            <div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl xs:w-[25%] sm:w-[25%] ">
            <a href="https://medium.com/@mishraadis1620/electric-vehicles-market-size-analysis-using-python-2024-a61e163c45b7">  <img className="h-[60vh] w-[40vw] shadow-2xl rounded-xl object-fill hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img2.png`} alt='ii'/>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit">E-Vehicle Market Analysis</h1></a>
            </div>
            <div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl  xs:w-[25%] sm:w-[25%] ">
            <a href="https://medium.com/@mishraadis1620/impacts-of-remote-work-e6abafc08628">  <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 xs:w-[100%] sm:w-[100%] " src={`${process.env.PUBLIC_URL}/images/proj_img9.PNG`} alt='ii'/>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit">Impact of Remote </h1>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit"> Work</h1></a>
            </div>
          <div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl  xs:w-[25%] sm:w-[25%] ">
           <a href="https://medium.com/@mishraadis1620/zomato-sales-analysis-951693f858ce"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img4.png`} alt='ii'/>
            <h1 className=" font-bold text-black text-3xl text-center font-outfit">Zomato Sale Analysis Dashboard</h1></a>
          </div>
        </div>


        </section>


    <section id="sec2" className="sec2 h-[110vh] w-full xs:w-fit sm:w-[100%] ">
    <div className='flex relative top-[43%] sm:w-fit xs:w-fit'>

<div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl xs:w-[25%] sm:w-[25%]  ">
   <a href="https://medium.com/@mishraadis1620/model-dataset-dashboard-324872c782c8"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img5.png`} alt='ii'/>
    <h1 className=" font-bold text-black text-3xl text-center font-outfit">Model Dataset Dashboard</h1></a>
  </div>
  <div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl xs:w-[25%] sm:w-[25%]  ">
   <a href="https://medium.com/@mishraadis1620/healthcare-cost-analysis-3c1c8cd7cf6c"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img7.PNG`} alt='ii'/>
    <h1 className=" font-bold text-black text-3xl text-center font-outfit">Healthcare Cost Analysis</h1></a>
  </div>
  <div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl xs:w-[25%] sm:w-[25%]  ">
    <a href="https://medium.com/@mishraadis1620/flipkart-reviews-sentiment-analysis-73b0dc632c77"><img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img8.PNG`} alt='ii'/>
    <h1 className=" font-bold text-black text-3xl text-center font-outfit">Flipkart Review Sentimental Analysis</h1></a>
  </div>
<div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl xs:w-[25%] sm:w-[25%]  ">
 <a href="https://github.com/aditi1620/AI-Attorney"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 xs:w-[100%] sm:w-[100%]" src={`${process.env.PUBLIC_URL}/images/proj_img3.png`} alt='ii'/>
  <h1 className=" font-bold text-black text-3xl text-center font-outfit">Law-Homepage/Signup Page</h1></a>
</div>
</div>
        </section>


      <section id="certi" className='sec3 h-[100vh] w-full sm:w-[100%] xs:w-[100%'>
      <h1 className="text-black  text-[80px] relative top-[12%] left-[35%] w-[15vw] font-bold font-outfit sm:top-[14%]">Certificate</h1>
      <marquee scrollamount="11" behavior="alternate" className=" relative top-[16%] bg-[#212121] border-b-2 border-t-2 border-slate-600 shadow-2xl shadow-gray-600 h-[60vh]" >
              <div className='flex gap-8 h-[50vh] pt-8'>

              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img3.jpg`} alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img4.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img5.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img6.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img8.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img7.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img9.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img10.jpg`}  alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl  sm:w-[75%] xs:w-[75%]" src={`${process.env.PUBLIC_URL}/images/img2.jpg`}  alt='ii'/>
              </div>
     
      </marquee>  
      </section>

     

      <section id="About" className='sec4 h-[110vh] w-full flex sm:w-[100%] sm:h-full xs:w-[100%]'>
            <div className="resume_sec w-[50vw] xs:w-[100%]   sm:w-[100%]    ">
              <img src={`${process.env.PUBLIC_URL}/images/ADITI MISHRA.png`} className="w-[45vw] h-[120vh] relative left-[4%] shadow-2xl sm:w-[100%] xs:h-[97%] xs:w-[100%]  " alt="imgresume"  />
              </div>
              <div className="about_sec relative w-[50vw] xs:w-[100%] sm:w-[100%]">
                <h1 className='"text-black  text-[80px] relative  left-[13%] w-[15vw] font-bold font-outfit sm:left-[10%] sm:text-[70px] xs:text-[60px]'>Resume/About</h1>
                <img src={`${process.env.PUBLIC_URL}/images/About_Sec.png`} className="w-[45vw]  z-[-10] h-[90vh] relative left-[4%]  shadow-2xl rounded-2xl sm:absolute sm:left-[4%] xs:w-[96%] sm:w-[95%]"  alt="imgabout" />
              <a href="https://github.com/aditi1620/MyResume"><button className="cursor-pointer text-lg absolute xl:right-[15%] lg:top-[80.8%] xxl:top-[60%] transition-all bg-blue-500 text-white xl:px-12 xl:py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[8px] active:border-b-[4px] active:brightness-90 active:translate-y-[2px] font-bold font-outfit sm:right-[15%]
              sm:top-[85%] sm:px-12 sm:py-2 xs:top-[80%] xs:px-12 xs:py-2 xs:right-[10%]"> My Full Resume</button>
</a>
              </div>

      </section>
       
        <footer className="xxl:h-[9vh] bg-[#24231d] flex text-white p-[9px] gap-[23rem] sm:w-[100%] sm:h-[19vh]  sm:flex sm:gap-[19rem] xs:w-[100%] xs:gap-[17rem] ">
          <h1 className="text-lg font-semibold font-outfit sm:w-[35%] sm:text-xl xs:text-lg xs:w-[40vw] ">&copy;Copyright 2024, All rights reserved  </h1>
          <h1 className="text-lg font-semibold animate-pulse font-outfit sm:w-[45%] sm:text-xl ">Thanks for visiting!</h1>
          <a href="https://mail.google.com/"><h1 className="text-lg font-semibold font-outfit sm:w-[35%] sm:text-xl ">Contact:aditimishra1623@gmail.com</h1></a>
        </footer>
    </div>
  );
}

export default App;
