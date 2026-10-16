import Logo from '../assets/logo-text.png'
function Footer() {
    return (
        <div>
            <hr className="border-gray-200 mt-7" />
            <div className="mt-16 maincontainter flex justify-center lg:justify-between container mx-auto">
           
           
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
    <img src={Logo} alt="" />
    <p className="w-94.5 h-9.75 text-[12px] text-[#64748B mt-3 mb-3]">
        Curated tools, technologies, and resources for developers building
        modern software.
    </p>
<ul className="gap-4 flex list-disc lg:list-none">       
         <li className='font-semibold text-[12px] text-[#475569]'>Github</li>
        <li className='font-semibold text-[12px] text-[#475569]'>Twitter</li>
        <li className='font-semibold text-[12px] text-[#475569]'>Linkedin</li>
    </ul>
</div>
            <div className='hidden lg:block lg:w-53 lg:h-29.75'>
                <h1 className='font-bold text-[12px] mb-3'>Product</h1>
<ul className="text-[12px] font-bold text-[#64748B] gap-3 [&>li]:mb-2.5">                     <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
                
            </div>

             <div className='hidden lg:block lg:w-53 lg:h-29.75'>
                <h1 className='font-bold text-[12px] mb-3'>Company</h1>
<ul className="text-[12px] font-bold text-[#64748B] gap-3 [&>li]:mb-2.5">                     <li>About</li>
                    <li>Contacts</li>
                    <li>Legal</li>
                </ul>
                
            </div>

 <div className='hidden lg:block lg:w-53 lg:h-29.75'>
                <h1 className='font-bold text-[12px] mb-3'>Legal</h1>
<ul className="text-[12px] font-bold text-[#64748B] gap-3 [&>li]:mb-2.5">                    <li >Privacy Policy</li>
                    <li>Terms Of Service</li>
                   
                </ul>
                
            </div>

            </div>
                       <div>
                         <hr className="border-gray-200 mt-7" />
                        </div>
<div className="flex justify-center gap-10 lg:justify-between container mx-auto mt-8 mb-8">
                                <p>© 2026 Dev Stack. All rights reserved.</p>
                            <ul className='flex gap-10'>
                                <li>Privacy</li>
                                <li>Terms</li>
                            </ul>
                        </div>

        </div>
    );
}

export default Footer;