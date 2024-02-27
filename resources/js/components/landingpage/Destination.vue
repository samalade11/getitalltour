<template>
    <div>
       <div class="flex justify-between mx-4 md:mx-8 lg:mx-24 mt-12">
            <h4 class="text-[#1B1B1B] font-medium text-[20px] md:text-[32px] lg:text-[40px] tracking-[-2px] h-fit">Destinations travelers love</h4>
            <div class="flex gap-6 h-fit my-auto mt-2 md:mt-4 lg:mt-6">
                <img src="../../../../public/assets/desleft.png" alt="" class="cursor-pointer" @click="scrollLeft">
                <img src="../../../../public/assets/desright.png" alt="" class="cursor-pointer" @click="scrollRight">
            </div>
       </div>

       <div class="custom-scrollbar flex mt-4 gap-6  ml-4 md:ml-8 lg:ml-28 overflow-x-auto" ref="scrollContainer">
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/desoneimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">Paris, France</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <!-- 22222 -->
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/destwoimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">Rome, Italy</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <!-- 22222 -->
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/desthreeimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">United State</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>


            <!-- 22222 -->
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/desfourimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">Singapore</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>


            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/desoneimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">Paris, France</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <!-- 22222 -->
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/destwoimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">Rome, Italy</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <!-- 22222 -->
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/desthreeimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">United State</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>


            <!-- 22222 -->
            <div class=" flex-none overflow-hidden w-[310px]">
                <div class="relative ">
                    <img src="../../../../public/assets/desfourimg.png" alt="" class="h-[315px]">
                    <div class="absolute bottom-6 left-4">
                        <div class="text-[#FECC3B] text-[22px] flex gap-3">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </div>
                        <p class="text-[#FECC3B] text-[14px] mt-2 font-light">(50 Reviews)</p>
                    </div>
                </div>
                <h4 class="text-[#434642] text-[32px] mt-1">Singapore</h4>
                <p class="text-[#434642] text-[16px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
       </div>

       
    </div>
</template>
<script setup>
import { ref } from "vue";


    const scrollContainer = ref(null);

    // const scrollLeft = () => {
    //     if (scrollContainer.value) {
    //         scrollContainer.value.scrollLeft -= 300; // Adjust the scroll amount as needed
    //     }
    // };

    // const scrollRight = () => {
    //     if (scrollContainer.value) {
    //         scrollContainer.value.scrollLeft += 300; // Adjust the scroll amount as needed
    //     }
    // };

    const scrollLeft = () => {
        if (scrollContainer.value) {
            smoothScroll(scrollContainer.value, 'left', -330, 10); // Adjust the scroll amount and duration as needed
        }
    };

    // Function to smoothly scroll right
    const scrollRight = () => {
        if (scrollContainer.value) {
            smoothScroll(scrollContainer.value, 'left', 330, 10); // Adjust the scroll amount and duration as needed
        }
    };

    // Function for smooth scrolling animation
    const smoothScroll = (element, direction, distance, duration) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (timestamp) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const delta = easeInOutCubic(progress) * distance;

        if (direction === 'left') {
        element.scrollLeft = start + delta;
        } else {
        element.scrollLeft = start - delta;
        }

        if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
    };

</script>


<style scoped>
    .custom-scrollbar{
        scroll-behavior: smooth;
    }
    .custom-scrollbar::-webkit-scrollbar {
        display: none;
      }

    
</style>
