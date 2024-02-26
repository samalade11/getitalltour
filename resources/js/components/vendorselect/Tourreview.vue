<template>
    <div>
        <div class="border-[1.5px] rounded-[13px] mt-12 border-[#1889FC] px-3 md:px-8 lg:px-16 pt-8 pb-12 border-opacity-20">
            <div class="flex justify-between mb-3">
                <p class="text-[#434642] text-[30px] md:text-[50px] lg:text-[64px] font-medium h-fit my-auto">3.667</p>
                <div class="h-fit my-auto">
                    <div class="text-[#FECC3B] text-[18px] md:text-[20px] flex gap-2 md:gap-3">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bx-star' ></i>  
                    </div>
                    <p class="text-[#434642] text-[14px] md:text-[17px] text-right mt-2 md:mt-2.5">Based on 3 ratings</p>
                </div>
            </div>

            <div class="flex gap-3 md:gap-6 mt-3">
                <p class="flex gap-1 h-fit my-auto">
                    <i class='bx bxs-star text-[#FECC3B] text-[19px] md:text-[21px] h-fit my-auto'></i>
                    <span class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium">5</span>
                </p>
                
                <div class="relative h-fit my-auto w-full">
                    <label for="labels-range-input" class="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="66" min="1" max="100" class="w-full h-3 bg-gray-200 rounded-lg  cursor-pointer dark:bg-[#C4C4C4]">
                </div>

                <p class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium h-fit my-auto w-[92px] ">66.67%</p>
            </div>

            <div class="flex gap-3 md:gap-6 mt-3">
                <p class="flex gap-1 h-fit my-auto">
                    <i class='bx bxs-star text-[#FECC3B] text-[19px] md:text-[21px] h-fit my-auto'></i>
                    <span class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium">4</span>
                </p>
                
                <div class="relative h-fit my-auto w-full">
                    <label for="labels-range-input" class="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="0" min="1" max="100" class="w-full h-3 bg-gray-200 rounded-lg  cursor-pointer dark:bg-[#C4C4C4]">
                </div>

                <p class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium h-fit my-auto w-[88px] md:w-[107px] lg:w-[92px]">0%</p>
            </div>

            <div class="flex gap-3 md:gap-6 mt-3">
                <p class="flex gap-1 h-fit my-auto">
                    <i class='bx bxs-star text-[#FECC3B] text-[19px] md:text-[21px] h-fit my-auto'></i>
                    <span class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium">3</span>
                </p>
                
                <div class="relative h-fit my-auto w-full">
                    <label for="labels-range-input" class="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="0" min="1" max="100" class="w-full h-3 bg-gray-200 rounded-lg  cursor-pointer dark:bg-[#C4C4C4]">
                </div>

                <p class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium h-fit my-auto  w-[88px] md:w-[107px] lg:w-[92px]">0%</p>
            </div>

            <div class="flex gap-3 md:gap-6 mt-3">
                <p class="flex gap-1 h-fit my-auto">
                    <i class='bx bxs-star text-[#FECC3B] text-[19px] md:text-[21px] h-fit my-auto'></i>
                    <span class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium">2</span>
                </p>
                
                <div class="relative h-fit my-auto w-full">
                    <label for="labels-range-input" class="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="0" min="1" max="100" class="w-full h-3 bg-gray-200 rounded-lg  cursor-pointer dark:bg-[#C4C4C4]">
                </div>

                <p class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium h-fit my-auto  w-[88px] md:w-[107px] lg:w-[92px]">0%</p>
            </div>

            <div class="flex gap-3 md:gap-6 mt-3">
                <p class="flex gap-1 h-fit my-auto">
                    <i class='bx bxs-star text-[#FECC3B] text-[19px] md:text-[21px] h-fit my-auto'></i>
                    <span class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium">1</span>
                </p>
                
                <div class="relative h-fit my-auto w-full">
                    <label for="labels-range-input" class="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="33" min="1" max="100" class="w-full h-3 bg-gray-200 rounded-lg  cursor-pointer dark:bg-[#C4C4C4]">
                </div>

                <p class="text-[#434642] text-[18px] md:text-[24px] h-fit my-auto font-medium h-fit my-auto">33.33%</p>
            </div>

            
        </div>


        <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div class="mt-6">
                <div>
                    <button class="text-[#434642] text-[17px] font-medium md:text-[20px] border-[1.5px] py-6 rounded-[16px] border-[#1889FC] border-opacity-20 w-full">Please login to add ratings!</button>
                </div>
                <div class="flex place-content-center lg:place-content-start">
                    <div class="flex mt-8  ">
                        <div class="h-fit my-auto ">
                            <img src="../../../../public/assets/trimg1.png" alt="" class="w-auto">
                        </div>
                        
                        <div class="h-fit my-auto ">
                            <p class="text-[#434642] font-medium text-[20px] md:text-[24px]">James Wood</p>
                            <div class="text-[#FECC3B] text-[18px] md:text-[22px] flex gap-2 my-1 md:my-3">
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bx-star' ></i>
                            </div>
                            <p class="text-[#C4C4C4] text-[12px] md:text-[18px] md:w-[350px] lg:w-[318px] leading-5 md:leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="flex place-content-center lg:place-content-start">
                    <div class="flex mt-0  ">
                        <div class="h-fit my-auto ">
                            <img src="../../../../public/assets/trimg2.png" alt="" class="w-auto">
                        </div>
                        
                        <div class="h-fit my-auto ">
                            <p class="text-[#434642] font-medium text-[20px] md:text-[24px]">Jane Brown</p>
                            <div class="text-[#FECC3B] text-[18px] md:text-[22px] flex gap-2 my-1 md:my-3">
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bx-star' ></i>
                                <i class='bx bx-star' ></i>
                            </div>
                            <p class="text-[#C4C4C4] text-[12px] md:text-[18px] md:w-[350px] lg:w-[318px] leading-5 md:leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <div class="flex place-content-center lg:place-content-start">
                    <div class="flex mt-0 ">
                        <div class="h-fit my-auto ">
                            <img src="../../../../public/assets/trimg3.png" alt="" class="w-auto">
                        </div>
                        
                        <div class="h-fit my-auto ">
                            <p class="text-[#434642] font-medium text-[20px] md:text-[24px]">Katrine  Bestow</p>
                            <div class="text-[#FECC3B] text-[18px] md:text-[22px] flex gap-2 my-1 md:my-3">
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bxs-star' ></i>
                                <i class='bx bx-star' ></i>
                            </div>
                            <p class="text-[#C4C4C4] text-[12px] md:text-[18px] md:w-[350px] lg:w-[318px] leading-5 md:leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div  class="flex place-content-center lg:place-content-end">
                <img src="../../../../public/assets/tdetailsimg2.png" alt="" class="h-fit">
            </div>
        </div>
    </div>
</template>
<script setup>

</script>