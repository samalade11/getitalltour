<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-8 lg:mx-32 mt-12">
            <button @click="showvendor = 1" class="text-[20px] md:text-[24px] rounded-[8px] py-2" :class="showvendor == 1 ? 'bg-[#1889FC] text-white' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1]' ">Tour Details</button>
            <button @click="showvendor = 2" class="text-[20px] md:text-[24px] rounded-[8px] py-2" :class="showvendor == 2 ? 'bg-[#1889FC] text-white' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1]' ">Tour Plan</button>
            <button @click="showvendor = 3" class="text-[20px] md:text-[24px] rounded-[8px] py-2" :class="showvendor == 3 ? 'bg-[#1889FC] text-white' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1]' ">Tour Gallery</button>
            <button @click="showvendor = 4" class="text-[20px] md:text-[24px] rounded-[8px] py-2" :class="showvendor == 4 ? 'bg-[#1889FC] text-white' : 'border-[1px] border-[#CDCFD1] text-[#CDCFD1]' ">Tour Reviews</button>
        </div>







        <!-- last sec -->
        <div class="my-20 mx-4 md:mx-8 lg:mx-32">
            <img src="../../../../public/assets/largeimg1.png" alt="">
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

    const showvendor = ref(1)

</script>