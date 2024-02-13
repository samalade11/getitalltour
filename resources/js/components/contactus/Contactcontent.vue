<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 mx-4 md:mx-8 lg:mx-0 gap-12 my-12">
            <div class="flex place-content-center lg:place-content-start">
                <img src="../../../../public/assets/contacthetintouch.png" alt="" class="rounded-[16px] lg:rounded-l-[0] h-fit">
            </div>
            <div class=" lg:mr-32">
                <p class="text-[40px] font-medium text-[#1889FC] mb-6 mt-8 text-center lg:text-left">Get in Touch</p>
                <div>
                    <input type="text" placeholder="Enter First Name" class="border-[2px] border-[#1889FC] text-opacity-50 placeholder:text-opacity-50 text-[#434642] text-sm placeholder:text-[#434642] placeholder:text-sm font-medium py-4 mt-4 rounded-[06px] px-6 w-full">
                </div>
                <div>
                    <input type="text" placeholder="Enter Email Address" class="border-[2px] border-[#1889FC] text-opacity-50 placeholder:text-opacity-50 text-[#434642] text-sm placeholder:text-[#434642] placeholder:text-sm font-medium py-4 mt-8 rounded-[06px] px-6 w-full">
                </div>
                <div>
                    <input type="text" placeholder="Subject" class="border-[2px] border-[#1889FC] text-opacity-50 placeholder:text-opacity-50 text-[#434642] text-sm placeholder:text-[#434642] placeholder:text-sm font-medium py-4 mt-8 rounded-[06px] px-6 w-full">
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="8" 
                    placeholder="Write your message here...." class="border-[2px] border-[#1889FC] text-opacity-50 placeholder:text-opacity-50 text-[#434642] text-sm placeholder:text-[#434642] placeholder:text-sm font-medium py-4 mt-8 rounded-[06px] px-6 w-full"></textarea>
                </div>
                <div class="flex place-content-center lg:place-content-start">
                    <button class="text-white text-sm w-fit bg-[#1889FC] py-4 px-16 rounded-[8px] mt-12">Reach Us Now</button>
                </div>
            </div>
        </div>
        <div class="my-24 lg:my-32">
            <img src="../../../../public/assets/largemap.png" alt="" class="w-screen">
        </div>

        <div class="flex place-content-center bg-[#FECC3B] py-32 px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="flex bg-white w-fit px-4 pr-12 lg:pr-24 py-12 rounded-[16px]">
                    <div class="my-auto h-fit bg-[#FECC3B] w-fit px-4 py-4 rounded-full">
                        <img src="../../../../public/assets/addressico.png" alt="">
                    </div>
                    <div class="my-auto h-fit ml-6">
                        <h4 class="text-black text-[20px] font-medium">Address</h4>
                        <p class="text-[#434642] text-[16px] w-[237px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>


                <div class="flex bg-white w-fit px-4 pr-12 lg:pr-24 py-12 rounded-[16px]">
                    <div class="my-auto h-fit bg-[#FECC3B] w-fit px-4 py-4 rounded-full">
                        <img src="../../../../public/assets/addressico.png" alt="">
                    </div>
                    <div class="my-auto h-fit ml-6">
                        <h4 class="text-black text-[20px] font-medium">Address</h4>
                        <p class="text-[#434642] text-[16px] w-[237px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>


                <div class="flex bg-white w-fit px-4 pr-12 lg:pr-24 py-12 rounded-[16px]">
                    <div class="my-auto h-fit bg-[#FECC3B] w-fit px-4 py-4 rounded-full">
                        <img src="../../../../public/assets/addressico.png" alt="">
                    </div>
                    <div class="my-auto h-fit ml-6">
                        <h4 class="text-black text-[20px] font-medium">Address</h4>
                        <p class="text-[#434642] text-[16px] w-[237px] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-4 md:mx-8 lg:mx-32 mt-28">
            <h4 class="text-[#434642] font-medium text-[20px] md:text-[25px] lg:text-[40px]">Frequently  Asked Questions</h4>
            <p class="text-black text-xs lg:text-sm mt-4 w-7/8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus mi enim est, et lacus nunc nunc sit. Ac risus, ut commodo vitae. Parturient sed velit donec ac turpis eget sed orci ut. Risus pulvinar fringilla vitae ut venenatis, quam morbi. Elementum, non ipsum, eget ornare aliquam feugiat vel. Diam cras odio euismod non fermentum purus massa</p>
            <div class="mt-12">
                <button class="text-[#1889FC] border-[2px] border-[#1889FC] text-[30px] w-fit py-1 px-12 rounded-[10px]">FAQS</button>
            </div>

            <!--  -->
            <div class="mt-12">
                
                <div id="accordion-flush" data-accordion="collapse"  data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <h2 id="accordion-flush-heading-1">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-[#434642] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                        <span class="text-[#434642]">How Get it all tours work?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0 text-[#434642]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                    </h2>
                    <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        
                    </div>
                    </div>
                    <h2 id="accordion-flush-heading-2">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                        <span class="text-[#434642]">How can i become a vendor?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0 text-[#434642]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                    </h2>
                    <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        
                    </div>
                    </div>
                    <h2 id="accordion-flush-heading-3">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                        <span class="text-[#434642]">What happens to my bookings if vacation plan changes?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0 text-[#434642]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                    </h2>
                    <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        
                    </div>
                    </div>
                </div>
  
            </div>
        </div>

        <div class="my-20 mx-4 md:mx-8 lg:mx-32">
            <img src="../../../../public/assets/largeimg1.png" alt="">
        </div>
    </div>
</template>
<script setup>

</script>