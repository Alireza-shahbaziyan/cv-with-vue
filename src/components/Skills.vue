<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div
      class="
        text-white
        w-5/6
        h-3/5
        lg:h-2/4 lg:w-11/12
        flex flex-col
        justify-around
        md:border
        lg:border-0
        p-1
        rounded-lg
        border-t-zinc-300
        md:border-emerald-500 md:bg-zinc-900/[.7]
        bg-zinc-900/[0.5]
        lg:bg-zinc-900/[.5]
      "
    >
      <div>
        <label for="vueProgress" class="text-success">Vue-js</label>
        <progress
          class="progress progress-success w-full"
          value="70"
          max="100"
        ></progress>
      </div>
      <div>
        <label for="vueProgress" class="text-warning">JavaScript</label>
        <progress
          class="progress progress-warning w-full"
          value="85"
          max="100"
        ></progress>
      </div>
      <div>
        <label for="vueProgress" class="text-info">HTML & CSS</label>
        <progress
          class="progress progress-info w-full"
          value="90"
          max="100"
        ></progress>
      </div>
      <div>
        <label for="vueProgress" class="text-error">git</label>
        <progress
          class="progress progress-error w-full"
          value="70"
          max="100"
        ></progress>
      </div>
      <div>
        <label for="vueProgress" class="text-accent">React</label>
        <progress
          class="progress progress-accent w-full"
          value="60"
          max="100"
        ></progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "skills",
};
</script>