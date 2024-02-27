<template>
<div>
  <div class="relative -z-10">
    <img src="../../../../public/assets/newdesbgimg.png" alt="" class="w-screen">
    <img src="../../../../public/assets/newdesprebg.png" alt="" class="w-screen absolute top-0">
    <div class="absolute text-white top-0 w-full h-full ">
        <p class="text-center font-medium text-[18px] md:text-[28px] lg:text-[46px] tracking-wider mt-12 md:mt-32 lg:mt-[350px]">Explore New Destination with Us</p>
        <p class="text-center text-[12px] md:text-[16px] tracking-wider mt-2 md:mt-4 mb-4 md:mb-8">Explore trips made easier for you</p>
        <div class="flex place-content-center cursor-pointer">
            <img src="../../../../public/assets/arrowdown.png" alt="" class="h-12 md:h-auto cursor-pointer">
        </div>
    </div>

  </div>

  <div class="border border-[#1889FC] rounded-b-[14px] pb-4 pt-3 mb-4 mx-4 lg:mx-32">
    <!-- <div class="bg-red-600 flex place-content-center w-full"> -->
        <div class="flex pt-6 font-medium gap-12 md:gap-16 mx-6 overflow-auto place-content-center">
            <p class=" w-fit px-3 pb-1 md:text-[16px] cursor-pointer" :class="activetab == 1 ? 'border-b-[2px] border-[#1889FC] text-[#1889FC]' : 'text-[#434642]' " @click="activetab = 1">Stays</p>
            <p class=" w-fit px-3 pb-1 md:text-[16px] cursor-pointer" :class="activetab == 2 ? 'border-b-[2px] border-[#1889FC] text-[#1889FC]' : 'text-[#434642]' " @click="activetab = 2">Flights</p>
            <p class=" w-fit px-3 pb-1 md:text-[16px] cursor-pointer" :class="activetab == 3 ? 'border-b-[2px] border-[#1889FC] text-[#1889FC]' : 'text-[#434642]' " @click="activetab = 3">Cars</p>
            <p class=" w-fit px-3 pb-1 md:text-[16px] cursor-pointer" :class="activetab == 4 ? 'border-b-[2px] border-[#1889FC] text-[#1889FC]' : 'text-[#434642]' " @click="activetab = 4">Packages</p>
            <p class=" w-fit px-3 pb-1 md:text-[16px] cursor-pointer" :class="activetab == 5 ? 'border-b-[2px] border-[#1889FC] text-[#1889FC]' : 'text-[#434642]' " @click="activetab = 5">Bucket List</p>
            <p class=" w-fit px-3 pb-1 md:text-[16px] cursor-pointer" :class="activetab == 6 ? 'border-b-[2px] border-[#1889FC] text-[#1889FC]' : 'text-[#434642]' " @click="activetab = 6">Cruises</p>
        </div>
        <hr class="border-b border-[#1889FC]">
    <!-- </div> -->

    <div>
        <div class="flex place-content-center md:place-content-end mx-24 my-3">
            <select class="border-none text-[#1889FC] text-sm font-medium bg-transparent">
                <option value="" >1 room, 1 traveler</option>
                <option value="">1 room, 1 traveler</option>
                <option value="">1 room, 1 traveler</option>
            </select>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 mx-4 md:mx-16 my-4">
            <div class="flex">
                <i class='bx bxs-location-plus text-[18px] text-[#434642] my-auto mr-2'></i>
                <p class="text-[#999A98] text-[16px] my-auto">Going to</p>
            </div>

            <div class="flex">
                <i class="fa fa-calendar-check text-[18px] text-[#434642] my-auto mr-3"></i>
                <div class="text-[#999A98] text-[15px] my-auto leading-5">
                    <p >CHECK-IN</p>
                    <p>Nov 25</p>
                </div>
            </div>

            <div class="flex">
                <i class="fa fa-calendar-check text-[18px] text-[#434642] my-auto mr-3"></i>
                <div class="text-[#999A98] text-[15px] my-auto leading-5">
                    <p>CHECK-OUT</p>
                    <p>Oct 5</p>
                </div>
            </div>
        </div>
        <div class="flex mx-16">
            <div class="text-[14px] font-medium text-[#434642] flex">
                <input type="checkbox" class="my-auto bg-transparent h-4 rounded-[5px] mr-1"/>
                <span class="my-auto">Add a flight</span>
            </div>
            <div class="text-[14px] font-medium text-[#434642] flex ml-3">
                <input type="checkbox" class="my-auto bg-transparent h-4 rounded-[5px] mr-1"/>
                <span class="my-auto">Add a car</span>
            </div>
        </div>

        <div class="flex place-content-center py-4">
            <button class="bg-[#1889FC] text-white text-sm py-3 px-8 rounded-[5px]">
                Search
            </button>
            
        </div>
    </div>
  </div>



    


</div>
</template>
<script setup>
import { ref } from "vue";


const activetab = ref(1)
</script>
