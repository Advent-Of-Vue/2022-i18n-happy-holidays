<template>
  <main class="flex flex-col justify-center h-full mx-auto max-w-600px">
    <section class="flex flex-col items-center leading-loose text-center">
      <div class="text-3xl">
        <span class="i-twemoji-christmas-tree"></span>
        Happy Holidays!
        <span class="i-twemoji-world-map"></span>
      </div>
      <!-- Dates - Check out locales/en.json for the key -->
      <!-- Controls - I give you an .icon-button class if you want to use it -->
      <!-- Flags - the current locale -->
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

// See the README about tricky timezone issues!
// I figured since this is i18n-friendly, we'd wanna
// make sure the timezones were right :-)
const christmasDate = new Date('2022/12/25')
</script>

<style scoped>
.icon-button {
  @apply text-xl
    w-32px
    h-32px
    rounded-full
    border-1
    border-transparent
    bg-transparent
    cursor-pointer
    duration-300
    hover:ring-2
    hover:border-green-500
    hover:ring-green-500
    hover:ring-opacity-40
    hover:text-green-600;
}
</style>
