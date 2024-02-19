<template>
    <div class="relative  h-[860px] lg:h-[985px]">
        <div @click="scrollToTop" v-if="showscrolltotop" class="transition ease-in-out delay-300 z-40 cursor-pointer fixed right-[30px] bottom-[60px] lg:right-[60px] lg:bottom-[70px]">
            <!-- <a href="#" class="scroll-smooth"> -->
                <img src="../.././../../public/assets/scrollupimg.png" alt="" class="bg-[#1889FC] py-2 px-2 rounded-full">
            <!-- </a> -->

        </div>

        <nav class="  py-1 z-40" :class="tofixed ? 'fixed top-0 right-0 left-0 bg-gray-300' : 'bg-transparent' ">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../.././../../public/assets/loginlogo.png" class="h-8" alt="logo" />

            </a>
            <div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white bg-[#1889FC] text-xs px-8 py-2.5 rounded-[8px] hover:bg-opacity-90">
                    <a href="/login">Sign In</a>

                </button>
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            </div>
            <div class="items-center z-40 justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta">
            <ul class="flex flex-col  font-medium p-4 lg:p-0 mt-4  rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  " :class="tofixed ? 'bg-white lg:bg-transparent' : 'lg:bg-transparent' ">
                
                <li>
                    <a href="/" class="block py-1 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">Home</a>
                </li>
                <li>
                    <a href="/aboutus" class="block py-1 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">About Us</a>
                </li>
                <li>
                    <a href="/tour" class="block py-1 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">Tour Packages</a>
                </li>
                
                <li>
                    <a href="/vendor" class="block py-1 px-3 my-1 lg:my-0 lg:p-0 text-white bg-[#1889FC] text-[16px] font-medium rounded lg:bg-transparent lg:text-[#1889FC] " aria-current="page">Become a Vendor</a>
                </li>
                <li>
                    <a href="/contactus" class="block py-1 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">Contact Us</a>
                </li>
                <li>
                    <a href="#" class="block py-1 px-3 flex my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">
                        <i class='bx bx-globe my-auto mr-1' ></i>
                        <span class="my-auto">EN</span>
                    </a>
                </li>
            </ul>
            </div>
            </div>
        </nav>

        <div class="absolute top-0 -z-10">
            <img src="../../../../public/assets/contactimg1.png" alt="" class="w-screen h-[360px] lg:h-auto">
        </div>

        <div class=" w-full z-20 grid grid-cols-1 lg:grid-cols-3 px-4 md:px-8 lg:px-32 gap-6 absolute bottom-0">
            <div class="lg:col-span-2 hidden lg:block relative">
                <div>
                    <h4 class="text-white text-[40px] font-medium">Couples Tour Puerto Rico</h4>
                    <div class="text-[#FECC3B] text-[24px] gap-2 flex font-medium my-3">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bx-star' ></i>
                    </div>
                    <div class="flex h-fit gap-2">
                        <button class="bg-[#50BA6F] text-[12px] text-white w-fit py-2.5 px-6 h-fit my-auto rounded-[5px]">
                            Fully Booked
                        </button>
                        <button class="bg-[#50BA6F] text-[12px] text-white w-fit py-1.5 px-2 h-fit my-auto rounded-[5px]">
                            <img src="../../../../public/assets/tourhouseicowhite.png" alt="" class="h-fit">
                        </button>
                        <button class="bg-[#50BA6F] text-[12px] text-white w-fit py-1.5 px-2 h-fit my-auto rounded-[5px]">
                            <img src="../../../../public/assets/tourplaneicowhite.png" alt="" class="h-fit">
                        </button>
                        
                    </div>
                    
                </div>
                
                <div class="absolute bottom-0">
                    <img src="../../../../public/assets/tselectimg2.png" alt="">
                </div>
            </div>
            <div class="flex place-content-center ">
                <div class="bg-[#FECC3B] rounded-[16px] flex place-content-center w-fit px-3 md:px-4 md:py-4 py-3">
                    <div>
                        <div class="relative mb-5">
                            <img src="../../../../public/assets/tselectimg3.png" alt="">
                            <p class="bg-[#1889FC] w-fit text-white text-[27px] md:text-[30px] font-medium py-1.5 md:py-1 px-8 rounded-[10px] absolute -bottom-4 right-8">$300</p>
                        </div>

                        <div class="bg-white grid grid-cols-3 mt-[35px] py-4 px-3 md:px-6 md:gap-2 rounded-[16px]">
                            <div class=" w-fit text-center">
                                <div class="flex place-content-center">
                                    <img src="../../../../public/assets/tcalanderico.png" alt="" >
                                </div>
                                <p class="text-[#434642] text-[16px] font-medium mt-2">Feb 12, 2024</p>
                            </div>

                            <div class=" w-fit text-center">
                                <div class="flex place-content-center">
                                    <img src="../../../../public/assets/tclockico.png" alt="" >
                                </div>
                                <p class="text-[#434642] text-[16px] font-medium mt-2">9:00 GMT</p>
                            </div>

                            <div class=" w-fit text-center">
                                <div class="flex place-content-center">
                                    <img src="../../../../public/assets/tuserico.png" alt="" >
                                </div>
                                <p class="text-[#434642] text-[16px] font-medium mt-2">0 Availability</p>
                            </div>
                        </div>

                        <div class="mt-4">
                            <div class=" flex h-fit font-medium">
                                <p class="text-[#434642] w-[90px]  leading-5.5 text-[16px] my-auto h-fit mr-6 md:mr-12">Departure<br>Time</p>
                                <p class="text-[#434642] text-[16px] my-auto h-fit mr-8 md:mr-16">:</p>
                                <p class="text-[#434642] text-[16px] my-auto h-fit">2024-02-12 9:00 PM</p>
                            </div>
                            <hr class="border-b-[1px] border-[#434642] border-opacity-50 my-1 h-fit">

                            <div class=" flex h-fit font-medium">
                                <p class="text-[#434642] w-[90px]  leading-5.5 text-[16px] my-auto h-fit mr-6 md:mr-12">Return
                                    <br>Time</p>
                                <p class="text-[#434642] text-[16px] my-auto h-fit mr-8 md:mr-16">:</p>
                                <p class="text-[#434642] text-[16px] my-auto h-fit">2024-02-27 10:00 PM</p>
                            </div>
                            <hr class="border-b-[1px] border-[#434642] border-opacity-50 my-1 h-fit">

                            <div class=" flex h-fit font-medium">
                                <p class="text-[#434642] w-[90px]  leading-5.5 text-[16px] my-auto h-fit mr-6 md:mr-12">Total Tourist
                                    <br>Capacity</p>
                                <p class="text-[#434642] text-[16px] my-auto h-fit mr-8 md:mr-16">:</p>
                                <p class="text-[#434642] text-[16px] my-auto h-fit">30 people</p>
                            </div>
                            
                        </div>

                        <div class="flex place-content-center mt-12 mb-8">
                            <button class="w-fit text-[16px] text-[white] bg-[#1889FC] font-medium py-2 px-16 rounded-[8px] cursor-pointer">Let go on a tour</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>



</template>
<script setup>

import { onMounted, onUnmounted,  ref } from "vue";


const showscrolltotop = ref(false)
const scrollPosition = ref(0);
const tofixed = ref(false)
// const changetofixed = () => {
//     tifixed.value = true
// }
const handleScroll = () => {
    scrollPosition.value = window.scrollY;
    showscrolltotop.value = scrollPosition.value > 100;
    tofixed.value = scrollPosition.value > 50;
};


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // console.log(scrollPosition.value)

});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

</script>
