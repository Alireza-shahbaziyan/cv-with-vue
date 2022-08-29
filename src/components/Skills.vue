<template>
  <!-- flex flex-col justify-center items-center -->
  <div class="flex h-full flex-col justify-center items-center">
    <div class="w-full h-96 flex flex-col  justify-evenly items-center">
      <!-- ---------------- -->
    <div class="flex flex-row  justify-between md:justify-evenly w-full">
      <div class="radial-progress bg-warning text-primary-content border-4 border-warning" style="--value:70;">J S</div>
    <div class="radial-progress bg-error text-primary-content border-4 border-error" style="--value:70;">HTML</div>
    <div class="radial-progress bg-cyan-500 text-primary-content border-4 border-cyan-500" style="--value:70;">CSS</div>
    </div>    
    <!-- --------------------- -->
    <div class="flex flex-row  justify-between md:justify-evenly w-full">
      <div class="radial-progress bg-teal-600 text-primary-content border-4 border-teal-600" style="--value:70;">Vue-js</div>
    <div class="radial-progress bg-sky-700 text-primary-content border-4 border-sky-700" style="--value:70;">Tailwind</div>
    <div class="radial-progress bg-primary text-primary-content border-4 border-primary" style="--value:70;">Bootstrap</div>
    </div>
    <!-- -------------------------- -->
    <div class="flex flex-row  justify-center  w-full">
      <div class="radial-progress bg-gray-900 text-primary-content border-4 border-gray-900" style="--value:70;">Git</div>
    </div>
  </div>
  </div>
  
</template>
<script>
export default {
  name: "skills",
};
</script>