import React, {useState} from 'react'
import {AiOutlineCloud,GiShoppingCart,BsThreeDotsVertical,AiOutlineShareAlt,CgProfile,RxDashboard,AiOutlineDatabase,AiOutlineSchedule,GiSkills,FaTasks,MdOutlineAssessment,MdOutlineAssignmentTurnedIn,MdOutlineManageAccounts,HiOutlineDocumentReport,TbReportAnalytics} from 'react-icons/all'

const Homepage = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    return (
        <section className='flex '>
        <div className=' h-{100%} w-72 bg-[#26496E] '>
            <div className=' text-white text-sm '>
                <h1 className='pl-6 pt-4 pb-4'>My Reports</h1>
                <ul className='pl-8 pr-12'>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><RxDashboard /></span> <span className='pl-0 pt-2'>My Dashboard</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><TbReportAnalytics /></span> <span className='pl-0 pt-2'>Department</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><AiOutlineDatabase /></span> <span className='pl-0 pt-2'>Skillwise Date</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><AiOutlineSchedule /></span> <span className='pl-0 pt-2'>View Schedule</span></li>
                </ul>
                <h1 className='pl-6 pt-4 pb-4'>Assesments</h1>
                <ul className='pl-8 pr-12'>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><GiSkills /></span> <span className='pl-0 pt-2'>Explore Skills</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><FaTasks /></span> <span className='pl-0 pt-2'>Placement Tests</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><MdOutlineAssessment /></span> <span className='pl-0 pt-2'>Pre Assessments</span></li>
                </ul>
                <h1 className='pl-6 pt-4 pb-4'>Organization</h1>
                <ul className='pl-8 pr-12'>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><MdOutlineAssignmentTurnedIn/></span> <span className='pl-0 pt-2'>Assign Skills</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><MdOutlineManageAccounts /></span> <span className='pl-0 pt-2'>Manage Students</span></li>
                    <li className='pb-3 hover:opacity-60 cursor-pointer flex hover:bg-white hover:rounded hover:text-blue-700'><span className='p-3'><HiOutlineDocumentReport /></span> <span className='pl-0 pt-2'>Report</span></li>
                </ul>
        
            <div className='p-6 flex'>
            <span className='text-6xl pr-3 hover:cursor-pointer'><CgProfile/></span>
                    <div>
                        <h1 className='pb-2'>College Admin</h1>
                        <p className='text-xs'>College Main</p>
                    </div>
            </div>
           </div>  
        </div>
        <div className='w-full'>
            <div className='mt-8 grid md:grid-cols-3 text-white pl-10 pr-10 pt-8 '>
                <div className='p-2 bg-red-500 ml-4 mt-0 mb-5 rounded opacity-90'>Students<CgProfile className=' text-xl float-right'></CgProfile><span className='flex pt-4 pl-2 pb-1 text-5xl '>26</span><span></span></div>
                <div className='p-2 bg-blue-500 ml-4 mt-0 mb-5 rounded opacity-90'>Departments<GiShoppingCart className=' text-xl float-right'></GiShoppingCart><span className='flex pt-4 pl-2 pb-1 text-5xl'>5</span></div>
                <div className='p-2 bg-green-500 ml-4 mt-0 mb-5 mr-3 rounded opacity-90'>Placements<AiOutlineCloud className=' text-xl float-right'></AiOutlineCloud><span className='flex pt-4 pl-2 pb-1 text-5xl'>0</span></div>
            </div> 
            
            <div className='p-6 w-full '>
                <div className='float-right'><button className=' bg-orange-500 flex p-3 text-sm rounded-2xl text-white'><span>Share with Facebook</span><span className='pl-4 pt-1'><AiOutlineShareAlt/></span></button></div>
            </div> 
            <div className='mt-8 pl-3 pt-5 pb-4'>
                <h1 className=' text-xl text-green-500 pl-20'>Upcoming Placement Oppertunities</h1>
            </div> 
            <div className='grid md:grid-cols-2  justify-items-center'>
                <div className='p-2 rounded opacity-90 '><span className=' text-blue-700 text-lg p-3'>Placement Tests</span><span className='flex p-3 text-sm text-gray-600 '>No placement tests scheduled yet</span></div>
                <div className='p-2 rounded opacity-90'><span className='text-blue-700 text-lg p-3'>Pre-assessments</span><span className='flex p-3 text-sm text-gray-600'>No pre assessments scheduled yet</span></div>
        </div>
        <div className='grid md:grid-cols-2 justify-items-center'>
            <div className='py-5 '>
                <div className='rounded overflow-hidden shadow-md max-w-md '>
                    <div className='flex text-red-600 p-3'>
                        <h1>Placement Exams History</h1>
                        <BsThreeDotsVertical className=' ml-40'/>
                    </div>
                    <div className=' text-center'>
                        chart goes here
                    </div>
                    <div className='flex text-blue-600 justify-items-center'>
                        <h1 className='p-3'>Total Students Attempted</h1>
                        <h1 className='p-3'>Total Students cleared</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-3 p-3'>
                        <div className='rounded-xl bg-green-400 text-white text-center'>1</div>
                        <div className='rounded-xl bg-green-400 text-white text-center'>1</div>
                    </div>
                    <div className=' text-amber-800 justify-items-center text-xs pt-3'>
                        <h1 className=' text-center'>Not Visible</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-3 pt-3 text-xs'>
                        <div className=' text-purple-600 text-center'>Not visible</div>
                        <div className=' text-purple-600 text-center'>Not visible</div>
                    </div>
                    <div className='grid grid-cols-2 gap-3 p-5 '>
                        <div className=' rounded-xl bg-purple-700 text-white text-center'>368</div>
                        <div className='rounded-xl bg-purple-700 text-white text-center'>86</div>
                    </div>
                    
                </div>
            </div>
            <div className='py-5'>
                <div className='rounded overflow-hidden shadow-md max-w-md '>
                    <div className='flex text-red-600 p-3'>
                        <h1>Pre-assessment Reports</h1>
                        <BsThreeDotsVertical className=' ml-40'/>
                    </div>
                    <div className=' text-center'>
                        chart goes here
                    </div>
                    <div className='flex text-blue-600 justify-items-center'>
                        <h1 className='p-3'>Total Students Attempted</h1>
                        <h1 className='p-3'>Total Students cleared</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-3 p-3'>
                        <div className='rounded-xl bg-green-400 text-white text-center'>86</div>
                        <div className='rounded-xl bg-green-400 text-white text-center'>8</div>
                    </div>
                    <div className=' text-amber-800 justify-items-center text-xs pt-3'>
                        <h1 className='text-center'>Not Visible</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-3 pt-3 text-xs'>
                        <div className=' text-purple-600 text-center'>Not visible</div>
                        <div className=' text-purple-600 text-center'>Not visible</div>
                    </div>
                    <div className='grid grid-cols-2 gap-3 p-5'>
                        <div className='rounded-xl bg-purple-700 text-white text-center'>368</div>
                        <div className='rounded-xl bg-purple-700 text-white text-center'>86</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
      )
}

export default Homepage