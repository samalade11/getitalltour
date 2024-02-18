<template>
    <div>
        <div @click="scrollToTop" v-if="showscrolltotop" class="transition ease-in-out delay-300 z-40 cursor-pointer fixed right-[30px] bottom-[60px] lg:right-[60px] lg:bottom-[70px]">
            <!-- <a href="#" class="scroll-smooth"> -->
                <img src="../.././../../public/assets/scrollupimg.png" alt="" class="bg-[#1889FC] py-2 px-2 rounded-full">
            <!-- </a> -->

        </div>

        <nav class=" border border-gray-100 py-1 z-40" :class="tofixed ? 'fixed top-0 right-0 left-0 bg-gray-300' : 'bg-white' ">
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
            <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-300 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  " :class="tofixed ? 'bg-white lg:bg-transparent' : 'lg:bg-white' ">
                <li>
                    <a href="/" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">Home</a>
                </li>
                <li>
                    <a href="/aboutus" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">About Us</a>
                </li>
                <li>
                    <a href="/tour" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">Tour Packages</a>
                </li>
                
                <li>
                    <a href="/vendor" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-white bg-[#1889FC] text-[16px] font-medium rounded lg:bg-transparent lg:text-[#1889FC] " aria-current="page">Become a Vendor</a>
                </li>
                <li>
                    <a href="/contactus" class="block py-2 px-3 my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">Contact Us</a>
                </li>

                <li>
                    <a href="#" class="block py-2 px-3 flex my-1 lg:my-0 lg:p-0 text-[#181C17] text-[16px] font-medium rounded hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-[#1889FC] ">
                        <i class='bx bx-globe my-auto mr-1' ></i>
                        <span class="my-auto">EN</span>
                    </a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
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
