<template>
    <div>
        <h2 class="sm:mt-10 mt-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to to find your favourite images</span>
            <span class="block text-yellow-600">Start searching today.</span>
        </h2>
        <div class="sm:mt-5 mt-5">
            <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center sm:pl-3 pl-2">
                    <svg class="sm:h-7 sm:w-7 h-5 w-5 fill-slate-400" viewBox="0 0 24 24">
                        <use xlink:href="svg/defs.svg#search-icon"></use>
                    </svg>
                </span>
                <input
                    id="search"
                    @focus="scrollToSearch"
                    v-model="store.search"
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-xl border-2 border-yellow-800 py-2 sm:pl-12 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-2xl"
                    placeholder="Search for an image..."
                    type="text"
                    name="search"
                />
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/main'
import { gsap } from 'gsap'
import ScrollTo from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTo)

const store = useStore()

function scrollToSearch() {
    gsap.to(window, { duration: 1, scrollTo: { y: '#search', offsetY: 130, autoKill: true }, ease: 'power4.out' })
}
</script>

<style lang="scss" scoped></style>
