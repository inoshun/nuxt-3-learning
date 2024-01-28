<script lang="ts" setup>
const { counters, increment, decrement, reset, updateTitle, deleteCounter, addCounter, sum } =
  useCounters()
</script>

<template>
  <div>
    <h2 class="text-center text-6xl">Multiple Counters</h2>
    <Spacer axis="vertical" :size="36" />
    <ul class="flex flex-col gap-y-2.5 w-96 mx-auto">
      <li
        v-for="counter in counters"
        :key="counter.id"
        class="flex justify-between items-center pl-4 py-1.5 rounded shadow bg-gray-100"
      >
        <input
          type="text"
          :value="counter.title"
          class="w-32 px-2"
          @change="(event: Event) => updateTitle(counter, (event.target as HTMLInputElement).value)"
        />
        <span class="font-bold">{{ counter.count }}</span>
        <div class="flex items-center">
          <div class="flex">
            <button
              type="button"
              class="w-[34px] h-[34px] rounded-l bg-red-500 text-white"
              @click="increment(counter)"
            >
              +
            </button>
            <button
              type="button"
              class="w-[34px] h-[34px] bg-blue-600 text-white"
              @click="decrement(counter)"
            >
              -
            </button>
            <button
              type="button"
              class="w-[34px] h-[34px] rounded-r bg-yellow-500 text-white"
              @click="reset(counter)"
            >
              0
            </button>
          </div>
          <button type="button" class="w-[34px] h-[34px]" @click="deleteCounter(counter)">x</button>
        </div>
      </li>
    </ul>
    <Spacer axis="vertical" :size="16" />
    <button
      type="button"
      class="block w-96 h-6 mx-auto rounded bg-green-400 text-white"
      @click="addCounter"
    >
      new counter
    </button>
    <Spacer axis="vertical" :size="8" />
    <div class="flex w-96 gap-x-1 mx-auto">
      <p class="whitespace-nowrap">title list:</p>
      <ul class="flex flex-wrap gap-x-1">
        <li
          v-for="counter in counters"
          :key="counter.id"
          class="after:content-[','] last:after:content-none"
        >
          {{ counter.title }}
        </li>
      </ul>
    </div>
    <Spacer axis="vertical" :size="8" />
    <p class="text-center">sum of count: {{ sum }}</p>
  </div>
</template>

<style></style>
