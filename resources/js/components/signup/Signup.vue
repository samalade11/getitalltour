<template>
    <div>
        <img src="../../../../public/assets/signupbgimg.png" alt="" class="h-screen w-screen absolute top-0 -z-10">
        <div class=" w-full h-screen flex ">
            <div class="bg-[#161515] bg-opacity-60  md:rounded-[39px] h-full w-full md:w-3/4 lg:w-3/4 md:h-fit md:mx-auto md:my-auto overflow-auto py-12 px-6 md:px-12 lg:px-32">
                <div class="w-full flex place-content-center mt-6 md:mt-0">
                    <img src="../../../../public/assets/loginlogo.png" alt="">
                </div>
                <p class="text-white text-center text-[35px] pb-8 pt-2">Sign Up</p>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
                    <div class="border border-white rounded-[10px]">
                        <input type="text" placeholder="Enter First Name" class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>

                    <div class="border border-white rounded-[10px]">
                        <input type="text" placeholder="Enter Last Name" class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>

                    <div class="border border-white rounded-[10px]">
                        <select  class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                            <option value="" selected>Select Country</option>
                            <option value="">Select Country</option>
                            <option value="">Select Country</option>
                            <option value="">Select Country</option>
                        </select>
                    </div>

                    <div class="border border-white flex  rounded-[10px]">
                        <span class=' bg-white rounded-l-[10px] text-[#1889FC] h-fit my-auto py-4 px-5 text-[16px] font-medium'>+123</span>
                        <input type="text" placeholder="Enter Mobile Number" class="w-full rounded-r-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>

                    <div class="border border-white rounded-[10px]">
                        <input type="text" placeholder="Enter Username" class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>

                    <div class="border border-white rounded-[10px]">
                        <input type="text" placeholder="Enter Email Address" class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>

                    <div class="border border-white rounded-[10px]">
                        <input type="password" placeholder="Enter Password" class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>

                    <div class="border border-white rounded-[10px]">
                        <input type="password" placeholder="Confirm Password" class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    </div>
                </div>
                

                <div class="flex place-content-center my-6">
                    <div class="flex">
                        <input type="checkbox" name="" id="" class="mr-2 my-auto bg-transparent border-white rounded-[3px] h-4">
                        <span class="text-white text-xs my-auto">I agree <a href="/login" class="text-[#FECC3B] hover:underline">with Privacy and Policy , Terms and Condition</a></span>
                    </div>
                    
                </div>

                <div class="lg:mx-48">
                    <button class="text-sm bg-transparent rounded-[10px] border-[1px] border-[#1889FC] text-white font-medium w-full py-4">Register Now</button>
                </div>

                <p class="text-white text-center text-sm tracking-wider mt-4">I have an account?  <a href="/login" class="text-[#FECC3B] hover:underline">Sign In</a></p>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
