<template>
  <div>
    <div
      v-for="item in values"
      :key="item.title"
      class="text-gray-100 text-sm md:text-xl flex justify-between mt-4 mx-1"
    >
      <div class="w-1/3">{{ item.title }}</div>
      <div class="w-2/3 text-center">{{ item.result }}</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "profileInfo",
  data() {
    return {
      values: [
        { title: "Job types :", result: "Contract - Part-time" },
        { title: "Job locations:", result: "Iran(khu,esf)" },
        { title: "Workplaces :", result: "On-site" },
        { title: "Location :", result: "Iran · Khuzestan" },
        { title: "Age :", result: "21" },
        { title: "Email :", result: "alishahbazi0831@gmail" },
      ],
      about:
        ` It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and m of Lorem Ipsum.`,
    };
  },
};
</script>