<template>
    <div>
       <div class="mx-4 md:mx-8 lg:mx-32">
            <div class="my-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 lg:gap-8 mx-6 lg:mx-0">
                    <div class=" w-full">
                        <p class="text-black font-medium text-[18px] text-center md:text-left">Search</p>
                        <div class="flex border-[2px] border-[#1889FC] rounded-[10px] my-6">
                            <i class='bx bx-search rounded-l-[10px] h-fit my-auto text-lg text-[#434642] text-opacity-50 font-medium bg-white pl-4 pr-2 py-3'></i>
                            <input type="search" name="" id="" placeholder="Search packages here.." class="w-full rounded-r-[10px] text-sm text-[#434642] py-4 px-0 my-auto  text-opacity-50 placeholder:text-[#434642] placeholder:text-opacity-50 outline-0 font-medium border-0 focus:ring-0">
                        </div>
                        <div class="flex gap-8">
                            <div class="flex">
                                <input type="checkbox" name="" id="" class="my-auto mr-2 rounded-[4px] focus:ring-0 outline-0">
                                <p class="my-auto text-[13px] text-[#434642] font-medium h-fit">Add a flight</p>
                            </div>


                            <div class="flex">
                                <input type="checkbox" name="" id="" class="my-auto mr-2 rounded-[4px] focus:ring-0 outline-0">
                                <p class="my-auto text-[13px] text-[#434642] font-medium h-fit">Add a car</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-black font-medium text-[18px] text-center md:text-left">Filter by Price</p>

                        <div class="mt-12">
                            <div class="relative mb-1">
                                <label for="labels-range-input" class="sr-only">Labels range</label>
                                <input id="labels-range-input" type="range" value="35000" min="300" max="100000" class="w-full h-4 bg-[#C4C4C4] rounded-lg  cursor-pointer ">
                                <span class="text-xs text-black  absolute start-0 -bottom-6 font-medium top-4">$300</span>
                                <!-- <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span> -->
                                <span class="text-xs text-black font-medium absolute end-0 -bottom-6 top-4">$100,000</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="text-black font-medium text-[18px] text-center md:text-left">Filter by Categories</p>

                        <div class="my-6">
                            <select name="" id="" class="w-full rounded-[10px] text-sm text-[#434642] py-3.5 px-6 border-[2px] border-[#1889FC] text-opacity-50 placeholder:text-[#434642] placeholder:text-opacity-50 outline-0 font-medium focus:ring-0">
                                <option value="">Select Categories</option>
                                <option value="">Select Categories</option>
                                <option value="">Select Categories</option>
                                <option value="">Select Categories</option>
                            </select>
                        </div>

                        <div class="flex gap-2 md:gap-4">
                            <p class="my-auto h-fit"><i class='bx bxs-calendar text-[20px] text-[#434642] my-auto'></i></p>
                            <select name="" id="" class="border-0 outline-0 focus:ring-0 text-[#434642] my-auto h-fit text-xs  font-medium lg:mr-2">
                                <option value="">Check in - Check out</option>
                                <option value="">Check in - Check out</option>
                                <option value="">Check in - Check out</option>
                            </select>

                            <select name="" id="" class="border-0 outline-0 focus:ring-0 text-[#434642] my-auto h-fit text-xs  font-medium">
                                <option value="">1 room, 1 traveler</option>
                                <option value="">1 room, 1 traveler</option>
                                <option value="">1 room, 1 traveler</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div class="flex place-content-center mt-8">
                    <button class="bg-[#1889FC] text-white text-sm w-fit py-4 px-16 rounded-[8px]">Filter Now</button>
                </div>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 mt-24">
                <div class=" flex my-auto mx-auto md:mx-0">
                    <p class=" font-medium text-[30px] text-black text-center md:text-left">Plan, book,<br> travel with pride</p>
                </div>

                <div class="flex gap-3 py-5 px-6 rounded-[16px] border-[1px] border-[#434642] border-opacity-50">
                    <img src="../../../../public/assets/tourpeopleico.png" alt="" class="h-fit mt-2">
                    <div class="h-fit">
                        <p class="font-medium text-[24px] text-black">Better together</p>
                        <p class="text-[#434642] text-[16px] w-[192px] mt-2">Save up to $585 when you book a flight and hotel together*</p>
                    </div>
                </div>

                <div class="flex gap-3 py-5 px-6 rounded-[16px] border-[1px] border-[#434642] border-opacity-50">
                    <img src="../../../../public/assets/tourhouseico.png" alt="" class="h-fit mt-2">
                    <div class="h-fit">
                        <p class="font-medium text-[24px] text-black">Find the right fit</p>
                        <p class="text-[#434642] text-[16px] w-[192px] mt-2">With over 300,000 hotels worldwide, it's easy to create a perfect package</p>
                    </div>
                </div>

                <div class="flex gap-3 py-5 px-6 rounded-[16px] border-[1px] border-[#434642] border-opacity-50">
                    <img src="../../../../public/assets/tourpaperico.png" alt="" class="h-fit mt-2">
                    <div class="h-fit">
                        <p class="font-medium text-[24px] text-black">Rest with peace</p>
                        <p class="text-[#434642] text-[16px] w-[192px] mt-2">Plan, book, and manage your trip all in one place</p>
                    </div>
                </div>
            </div>

            <div class="mt-24">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <button @click="showpackage = 1" class="w-full text-[24px]  py-1.5 rounded-[8px]" :class="showpackage == 1 ? 'text-white bg-[#1889FC]' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1] bg-white' ">Gold Packages</button>
                    <button @click="showpackage = 2" class="w-full text-[24px]  py-1.5 rounded-[8px]" :class="showpackage == 2 ? 'text-white bg-[#1889FC]' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1] bg-white' ">Silver Packages</button>
                    <button @click="showpackage = 3" class="w-full text-[24px]  py-1.5 rounded-[8px]" :class="showpackage == 3 ? 'text-white bg-[#1889FC]' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1] bg-white' ">Bronze Packages</button>
                </div>

            </div>


            <!-- product type toggle -->
            <div class="mt-12">
                <!-- start -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-4">
                    <div>
                        <div class="relative w-fit">
                            <img src="../../../../public/assets/bestimg1.png" alt="">
                            <p class="bg-[#FECC3B] text-[#434642] text-[18px] w-fit px-6 py-3 font-medium rounded-[10px] absolute top-8 left-4">Available Now</p>
                            <p class="text-white bg-[#1889FC] text-[27px] w-fit font-medium px-8 py-2 rounded-[10px] absolute -bottom-4 right-6 ">$300</p>
                        </div>
                        <div class="mt-4 mx-2">
                            <p class="text-[#434642] text-[32px] font-medium text-center md:text-left">Gold Packages</p>
                            <div class="text-[#434642] text-sm grid grid-cols-2 gap-4 mt-2">
                                <p class="flex">
                                    <img src="../../../../public/assets/foodico.png" alt="" class="h-8 my-auto mr-2">
                                    <span class="text-[#434642] text-[16px] my-auto">All-round trip</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/bedico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">1 Bed Ensuite</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/blenderico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">Spa Session</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/bathico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">1 Bathroom</span>
                                </p>
                            </div>
                        </div>
                    </div>
    
                    <!-- 222 -->
    
                    <div>
                        <div class="relative w-fit">
                            <img src="../../../../public/assets/bestimg2.png" alt="">
                            <p class="bg-[#FECC3B] text-[#434642] text-[18px] w-fit px-6 py-3 font-medium rounded-[10px] absolute top-8 left-4">Available Now</p>
                            <p class="text-white bg-[#1889FC] text-[27px] w-fit font-medium px-8 py-2 rounded-[10px] absolute -bottom-4 right-6 ">$300</p>
                        </div>
                        <div class="mt-4 mx-2">
                            <p class="text-[#434642] text-[32px] font-medium text-center md:text-left">Gold Packages</p>
                            <div class="text-[#434642] text-sm grid grid-cols-2 gap-4 mt-2">
                                <p class="flex">
                                    <img src="../../../../public/assets/foodico.png" alt="" class="h-8 my-auto mr-2">
                                    <span class="text-[#434642] text-[16px] my-auto">All-round trip</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/bedico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">1 Bed Ensuite</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/blenderico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">Spa Session</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/bathico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">1 Bathroom</span>
                                </p>
                            </div>
                        </div>
                    </div>
    
    
                    <!-- 33 -->
    
                    <div>
                        <div class="relative w-fit">
                            <img src="../../../../public/assets/bestimg3.png" alt="">
                            <p class="bg-[#FECC3B] text-[#434642] text-[18px] w-fit px-6 py-3 font-medium rounded-[10px] absolute top-8 left-4">Available Now</p>
                            <p class="text-white bg-[#1889FC] text-[27px] w-fit font-medium px-8 py-2 rounded-[10px] absolute -bottom-4 right-6 ">$300</p>
                        </div>
                        <div class="mt-4 mx-2">
                            <p class="text-[#434642] text-[32px] font-medium text-center md:text-left">Gold Packages</p>
                            <div class="text-[#434642] text-sm grid grid-cols-2 gap-4 mt-2">
                                <p class="flex">
                                    <img src="../../../../public/assets/foodico.png" alt="" class="h-8 my-auto mr-2">
                                    <span class="text-[#434642] text-[16px] my-auto">All-round trip</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/bedico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">1 Bed Ensuite</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/blenderico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">Spa Session</span>
                                </p>
                                <p class="flex">
                                    <img src="../../../../public/assets/bathico.png" alt="" class="h-8 my-auto mr-2">
                                    <span  class="text-[#434642] text-[16px] my-auto">1 Bathroom</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end -->

                <!-- section 2 start -->
                <div class="mt-16">
                    <h4 class="text-[#434642] text-[20px] md:text-[30px] font-medium">The Latest Destinations in Gold Package</h4>

                    <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
                        <div class="flex place-content-center">
                            <div class="relative">
                                <img src="../../../../public/assets/tourdes1.png" alt="">
                                <div class=" w-full flex justify-between px-6 absolute top-4">
                                    <p class="bg-[#50BA6F] text-white text-[13px] w-fit py-2 px-6 rounded-[5px] h-fit cursor-pointer">Fully Booked</p>
                                    <div class="flex h-fit gap-4">
                                        <img src="../../../../public/assets/tourhouseicowhite.png" alt="" class="h-fit w-fit bg-[#50BA6F] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                        <img src="../../../../public/assets/tourplaneicowhite.png" alt="" class="h-fit w-fit bg-[#50BA6F] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" lg:col-span-2 flex justify-between lg:my-auto">
                            <div>
                                <h4 class="text-[#434642] font-medium text-[15px] md:text-[24px] mb-3">Couples Tours in Puerto Rico</h4>
                                <div class="flex gap-2">
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bx-star text-[#434642] text-[20px]' ></i>
                                </div>
                                <p class="text-[#434642] text-[12px] md:text-[16px] w-[207px] my-4">Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit.</p>
                                <p class="text-[#434642] text-[12px] md:text-[16px] lg:mt-16">(50 Reviews)</p>
                            </div>
                            <!--  -->
                            <div class="text-right">
                                <h4 class="text-[#434642] font-medium text-[20px] md:text-[30px] ">$300</h4>
                                <p class="text-[#434642] text-[12px] md:text-[18px] ">per person</p>
                                <p class="text-[#434642] text-[12px] md:text-[18px]">Mar 12 - Mar 25</p>
                            </div>
                        </div>
                    </div>

                    <!-- 222 -->
                    <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
                        <div class="flex place-content-center">
                            <div class="relative">
                                <img src="../../../../public/assets/tourdes2.png" alt="">
                                <div class=" w-full flex justify-between px-6 absolute top-4">
                                    <p class="bg-[#FECC3B] text-black text-[13px] w-fit py-2 px-6 rounded-[5px] h-fit cursor-pointer">Fully Booked</p>
                                    <div class="flex h-fit gap-4">
                                        <img src="../../../../public/assets/tourhuseicoblack.png" alt="" class="h-fit w-fit bg-[#FECC3B] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                        <img src="../../../../public/assets/tourplaneicoblack.png" alt="" class="h-fit w-fit bg-[#FECC3B] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" lg:col-span-2 flex justify-between lg:my-auto">
                            <div>
                                <h4 class="text-[#434642] font-medium text-[15px] md:text-[24px] mb-3">Adventure Tours in Netherlands</h4>
                                <div class="flex gap-2">
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bx-star text-[#434642] text-[20px]' ></i>
                                </div>
                                <p class="text-[#434642] text-[12px] md:text-[16px] w-[207px] my-4">Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit.</p>
                                <p class="text-[#434642] text-[12px] md:text-[16px] lg:mt-16">(50 Reviews)</p>
                            </div>
                            <!--  -->
                            <div class="text-right">
                                <h4 class="text-[#434642] font-medium text-[20px] md:text-[30px] ">$700</h4>
                                <p class="text-[#434642] text-[12px] md:text-[18px] ">per person</p>
                                <p class="text-[#434642] text-[12px] md:text-[18px]">Mar 12 - Mar 25</p>
                            </div>
                        </div>
                    </div>

                    <!-- 333 -->
                    <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
                        <div class="flex place-content-center">
                            <div class="relative">
                                <img src="../../../../public/assets/tourdes3.png" alt="">
                                <div class=" w-full flex justify-between px-6 absolute top-4">
                                    <p class="bg-[#FECC3B] text-black text-[13px] w-fit py-2 px-6 rounded-[5px] h-fit cursor-pointer">Fully Booked</p>
                                    <div class="flex h-fit gap-4">
                                        <img src="../../../../public/assets/tourhuseicoblack.png" alt="" class="h-fit w-fit bg-[#FECC3B] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                        <img src="../../../../public/assets/tourplaneicoblack.png" alt="" class="h-fit w-fit bg-[#FECC3B] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" lg:col-span-2 flex justify-between lg:my-auto">
                            <div>
                                <h4 class="text-[#434642] font-medium text-[15px] md:text-[24px] mb-3">Couples Tours United Kingdom</h4>
                                <div class="flex gap-2">
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bx-star text-[#434642] text-[20px]' ></i>
                                </div>
                                <p class="text-[#434642] text-[12px] md:text-[16px] w-[207px] my-4">Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit.</p>
                                <p class="text-[#434642] text-[12px] md:text-[16px] lg:mt-16">(50 Reviews)</p>
                            </div>
                            <!--  -->
                            <div class="text-right">
                                <h4 class="text-[#434642] font-medium text-[20px] md:text-[30px] ">$300</h4>
                                <p class="text-[#434642] text-[12px] md:text-[18px] ">per person</p>
                                <p class="text-[#434642] text-[12px] md:text-[18px]">Mar 12 - Mar 25</p>
                            </div>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
                        <div class="flex place-content-center">
                            <div class="relative">
                                <img src="../../../../public/assets/tourdes4.png" alt="">
                                <div class=" w-full flex justify-between px-6 absolute top-4">
                                    <p class="bg-[#FECC3B] text-black text-[13px] w-fit py-2 px-6 rounded-[5px] h-fit cursor-pointer">Fully Booked</p>
                                    <div class="flex h-fit gap-4">
                                        <img src="../../../../public/assets/tourhuseicoblack.png" alt="" class="h-fit w-fit bg-[#FECC3B] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                        <img src="../../../../public/assets/tourplaneicoblack.png" alt="" class="h-fit w-fit bg-[#FECC3B] py-1.5 px-2 rounded-[3px] cursor-pointer">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" lg:col-span-2 flex justify-between lg:my-auto">
                            <div>
                                <h4 class="text-[#434642] font-medium text-[15px] md:text-[24px] mb-3">Group Tours in Haiti</h4>
                                <div class="flex gap-2">
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bxs-star text-[#434642] text-[20px]' ></i>
                                    <i class='bx bx-star text-[#434642] text-[20px]' ></i>
                                </div>
                                <p class="text-[#434642] text-[12px] md:text-[16px] w-[207px] my-4">Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit.</p>
                                <p class="text-[#434642] text-[12px] md:text-[16px] lg:mt-16">(50 Reviews)</p>
                            </div>
                            <!--  -->
                            <div class="text-right">
                                <h4 class="text-[#434642] font-medium text-[20px] md:text-[30px] ">$700</h4>
                                <p class="text-[#434642] text-[12px] md:text-[18px] ">per person</p>
                                <p class="text-[#434642] text-[12px] md:text-[18px]">Mar 12 - Mar 25</p>
                            </div>
                        </div>
                    </div>
                </div>


                
                
                <!-- section 2 end -->
            </div>


       </div> 

       <div class="bg-[#FECC3B] mt-24 py-16">
            <h4 class="text-[#434642] text-[22px] md:text-[32px] font-medium text-center">We don’t have your desired package?</h4>
            <p class="text-[#434642] text-[18px] text-center mt-2 mb-6">Feel free to create your own package</p>
            <div class="flex place-content-center">
                <button class="w-fit bg-[#1889FC] text-white text-sm py-2.5 px-16 rounded-[6px]">Create your desired package now</button>
            </div>
       </div>

        <div class="my-20 mx-4 md:mx-8 lg:mx-32">
            <img src="../../../../public/assets/largeimg1.png" alt="">
        </div>


    </div>
</template>
<script setup>
import { ref } from "vue";


const showpackage = ref(1)
</script>