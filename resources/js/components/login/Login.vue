<template>
    <div>
        <img src="../../../../public/assets/loginbgimg.png" alt="" class="h-screen w-screen absolute top-0 -z-10">
        <div class=" w-full h-screen flex ">
            <div class="bg-[#161515] bg-opacity-60  md:rounded-[39px] h-full w-full md:w-3/4 lg:w-1/2 md:h-fit md:mx-auto md:my-auto py-14 md:py-20 px-8 md:px-20 lg:px-36">
                <div class="w-full flex place-content-center mt-12 md:mt-0">
                    <img src="../../../../public/assets/loginlogo.png" alt="">
                </div>

                <div class="border border-white flex mt-20 md:mt-12 rounded-[10px]">
                    <i class='bx bxs-user-circle bg-white rounded-l-[10px] text-[#1889FC] h-fit my-auto py-5 px-5 text-[20px] font-medium'></i>
                    <input type="text" placeholder="Enter your email or username" class="w-full rounded-r-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                </div>

                <div class="border border-white flex mt-8 rounded-[10px]">
                    <i class='bx bxs-lock bg-white rounded-l-[10px] text-[#1889FC] h-fit my-auto py-5 px-5 text-[20px] font-medium'></i>
                    <input type="text" placeholder="Enter your password" class="w-full h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                    <div class="cursor-pointer">
                        <i class="fa fa-eye-slash text-gray-800 rounded-r-[10px] h-fit my-auto py-5 px-5 text-[20px] font-medium"></i>
                    </div>
                    
                </div>

                <div class="border border-white mt-8 rounded-[10px]">
                    <input type="text" placeholder="Enter the given code " class="w-full rounded-[10px] h-fit text-[16px] text-white placeholder:text-white px-6 py-4 bg-transparent border-none outline-none focus:outline-none focus:ring-0">
                </div>

                <div class="flex justify-between my-6">
                    <div class="flex">
                        <input type="checkbox" name="" id="" class="mr-2 my-auto bg-transparent border-white rounded-[3px]">
                        <span class="text-white text-sm my-auto">Remember me</span>
                    </div>
                    <p class="text-white text-sm">Forget Password?</p>
                </div>

                <div>
                    <button class="text-sm bg-transparent rounded-[10px] border-[1px] border-[#1889FC] text-white font-medium w-full py-4">Sign In</button>
                </div>

                <p class="text-white text-center text-sm tracking-wider mt-8">Create an account? <a href="#" class="text-[#FECC3B]">Sign Up  now</a></p>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
