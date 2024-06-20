import React from 'react';
import maize from '../assests/bgImages/aboutbg.jpg';
import Footer from '../components/common/Footer';
import priyam from "../assests/Team/priyam.jpg"
import nabhjeet from "../assests/Team/Nabhjeet.jpg"
import blogbackgroundd from '../assests/bgImages/blog_backgroundd.jpg';
import { FaGithub } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className='w-full flex flex-col items-center bg-white mb-[20px]'>
        <div className=' relative overflow-hidden w-[100vw] h-[80vh]'>
        <img src={blogbackgroundd} alt="Image 1" className='relative blog background'/>
        <div className='text-[90px] font-bold text-white absolute top-[35vh] left-[15vw]'>WELCOME TO AGRITECH</div>
      </div>
            <div className='w-11/12 mx-0 flex flex-col mt-5'>
                <h1 className='text-4xl text-[#06623B] font-semibold'>Seeds</h1>
                <div className='w-full flex flex-row gap-6'>
                    <div className='w-[43%] rounded-lg'>
                        <img className='relative -top-8 rounded-lg' src={maize} alt='bagOfSeeds'/>
                    </div>
                    <div className='w-[57%] -mt-7'>
                        <p className='text-lg text-gray-700'>At AGRITECH, we are dedicated to revolutionizing the agricultural sector through the integration of cutting-edge digital technologies. Our mission is to empower farmers, retailers, and agricultural enthusiasts by providing a comprehensive platform that addresses the unique challenges faced by the farming community.</p>
                        <h3 className='text-[#06623B] text-3xl font-bold py-3'>Our Story</h3>
                        <p className='text-lg text-gray-700'>Founded with the vision to bridge the gap between traditional farming practices and modern technological advancements, AGRITECH has emerged as a leader in the agritech space. Our journey began with the realization that the agricultural sector, crucial for global food security and economic stability, was struggling with numerous challenges. From market access limitations to unpredictable weather conditions, farmers were in dire need of a robust solution to enhance productivity and sustainability.</p>
                        <h3 className='text-[#06623B] text-3xl font-bold py-3'>Our Platform</h3>
                        <p className='text-lg text-gray-700'>AGRITECH is an innovative web application tailored to meet the diverse needs of the agricultural community. Our platform encompasses a wide range of features designed to streamline operations, foster collaboration, and promote informed decision-making:<ul>
                            <li><span className='text-[#06623B] font-semibold'>E-Commerce Integration:</span> Our direct-to-consumer e-commerce platform connects farmers with a broader market, reducing dependency on intermediaries and increasing profit margins.</li>
                            <li><span className='text-[#06623B] font-semibold'>Real-Time Weather Forecasting:</span> Access precise, location-based weather forecasts crucial for planning planting schedules, irrigation, and harvesting.</li>
                            <li><span className='text-[#06623B] font-semibold'>Expert Farming Tips:</span>equal Benefit from expert-curated cultivation tips and procedures that help in implementing modern farming practices effectively.</li>
                            <li><span className='text-[#06623B] font-semibold'>Financial Planning Tools:</span> Utilize specialized calculators for better financial planning, helping to estimate product quantities, forecast earnings, and manage expenses.</li>
                            <li><span className='text-[#06623B] font-semibold'>Government Services Information:</span> Stay informed about available government subsidies, grants, and regulatory frameworks to access essential resources and support.</li>
                            <li><span className='text-[#06623B] font-semibold'>Community Interaction:</span> Engage with a vibrant community of farmers and experts to share knowledge, ask questions, and collaborate on solutions to common agricultural challenges.</li>
                        </ul></p>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-6'>
                    <div className='w-full py-2 flex flex-col'>
                    <h3 className='text-[#06623B] text-3xl font-bold py-3'>Our Vision</h3>
                        <p className='text-lg text-gray-700'>We envision a world where farmers are empowered with the tools and knowledge they need to succeed. By leveraging technology, we aim to create a sustainable and profitable agricultural ecosystem that not only addresses current challenges but also paves the way for future innovations.</p>
                        <h3 className='text-[#06623B] text-3xl font-bold py-3'>Our Commitment</h3>
                        <p className='text-lg text-gray-700'>AGRITECH is committed to providing a user-friendly, reliable, and efficient platform that enhances the productivity and sustainability of the agricultural sector. We continuously strive to improve our services based on user feedback and the evolving needs of the farming community.</p>
                        <h3 className='text-[#06623B] text-3xl font-bold py-3'>Join Us</h3>
                        <p className='text-lg text-gray-700'>Become a part of the AGRITECH community today and take the first step towards a smarter, more sustainable future in agriculture. Together, we can transform the way farming is done, ensuring a better tomorrow for farmers and consumers alike.</p>
                        <h3 className='text-[#06623B] text-3xl font-bold py-3'>Our Team</h3>
                        <div className=' w-full flex gap-6 flex-row items-center justify-between my-6'>
                        <div className='w-[23%] '>
                        <img src={priyam} alt='team priyam' className='w-full h-[390px] rounded-lg object-cover'/>
                        <div className='flex flex-row gap-2 justify-between items-center my-2'>
                        <h4 className='text-2xl font-semibold text-black'>Priyam Katiyar</h4>
                        <div className='text-3xl  text-black'><FaGithub /></div>
                        </div>
                        </div>
                        <div className='w-[23%]'>
                        <img src={nabhjeet} alt='team priyam' className='w-full h-[390px] rounded-lg object-cover'/>
                        <div className='flex flex-row gap-2 justify-between items-center my-2'>
                        <h4 className='text-2xl font-semibold text-black'>Nabhjeet Katiyar</h4>
                        <div className='text-3xl  text-black'><FaGithub /></div>
                        </div>
                        </div>
                        <div className='w-[23%]'>
                        <img src={priyam} alt='team priyam' className='w-full h-[390px] rounded-lg object-cover'/>
                        <div className='flex flex-row gap-2 justify-between items-center my-2'>
                        <h4 className='text-2xl font-semibold text-black'>Priyam Katiyar</h4>
                        <div className='text-3xl  text-black'><FaGithub /></div>
                        </div>
                        </div>
                        <div className='w-[23%]'>
                        <img src={priyam} alt='team priyam' className='w-full h-[390px] rounded-lg object-cover'/>
                        <div className='flex flex-row gap-2 justify-between items-center my-2'>
                        <h4 className='text-2xl font-semibold text-black'>Priyam Katiyar</h4>
                        <div className='text-3xl  text-black'><FaGithub /></div>
                        </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;
