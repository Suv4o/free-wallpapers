<template>
    <div class="relative overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-orange-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                    viewBox="0 0 100 100"
                    class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-orange-50 transform translate-x-1/2"
                    fill="currentColor"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <use xlink:href="svg/defs.svg#hero-img-angle"></use>
                </svg>
                <Popover>
                    <div class="relative pt-6 sm:px-6 lg:px-8">
                        <nav
                            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                            aria-label="Global"
                        >
                            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div class="flex items-center justify-between w-full md:w-auto">
                                    <a href="https://github.com/Suv4o/wallpaper-images" target="_blank">
                                        <span class="sr-only">Free Wallpapers</span>
                                        <svg
                                            aria-hidden="true"
                                            role="img"
                                            class="h-8 w-auto sm:h-10 text-yellow-600"
                                            width="33.24"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 432 416"
                                        >
                                            <use xlink:href="svg/defs.svg#github-icon"></use>
                                        </svg>
                                    </a>
                                    <div class="-mr-2 flex items-center md:hidden">
                                        <PopoverButton
                                            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                                        >
                                            <span class="sr-only">Open main menu</span>
                                            <MenuIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                <a
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :href="item.href"
                                    class="font-medium text-gray-500 hover:text-gray-900"
                                    >{{ item.name }}</a
                                >
                                <a href="#" class="font-medium text-yellow-600 hover:text-yellow-500">Log in</a>
                            </div>
                        </nav>
                    </div>

                    <transition
                        enter-active-class="duration-150 ease-out"
                        enter-from-class="opacity-0 scale-95"
                        enter-to-class="opacity-100 scale-100"
                        leave-active-class="duration-100 ease-in"
                        leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95"
                    >
                        <PopoverPanel
                            focus
                            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                class="rounded-lg shadow-md bg-orange-50 ring-1 ring-black ring-opacity-5 overflow-hidden"
                            >
                                <div class="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <svg
                                            aria-hidden="true"
                                            role="img"
                                            class="h-8 w-auto sm:h-10 text-yellow-600"
                                            width="33.24"
                                            height="32"
                                            preserveAspectRatio="xMidYMid meet"
                                            viewBox="0 0 432 416"
                                        >
                                            <use xlink:href="svg/defs.svg#github-icon"></use>
                                        </svg>
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                                        >
                                            <span class="sr-only">Close main menu</span>
                                            <XIcon class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div class="px-2 pt-2 pb-3 space-y-1">
                                    <a
                                        v-for="item in navigation"
                                        :key="item.name"
                                        :href="item.href"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >{{ item.name }}</a
                                    >
                                </div>
                                <a
                                    href="#"
                                    class="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-gray-50 hover:bg-gray-100"
                                >
                                    Log in
                                </a>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>

                <main class="mt-10 mx-auto max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                            <span class="block xl:inline">Free wallpaper images to enrich your</span>
                            {{ ' ' }}
                            <span class="block text-yellow-600 xl:inline">desktop screens</span>
                        </h1>
                        <span
                            class="relative mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                        >
                            If you are looking to spruce up your desktop screens, feel free to choose from the selection
                            of free wallpapers below. You can search for any image by typing in the search bar, or
                            browse by category. You can also contribute with your own images by uploading them to our
                            website. If you want to download or save your favorite image, click on the
                            <span class="underline decoration-4 font-semibold">Sign Up</span> button to create an
                            account.
                        </span>
                        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div class="rounded-md shadow">
                                <button
                                    @click="scrollToSearch"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Explore
                                </button>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
                class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://res.cloudinary.com/dwjulvkpq/image/upload/s--bDHEwAZp--/c_scale,e_sharpen:100,h_550/v1644306942/web/free-wallpapers-hero-img.jpg"
                alt=""
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { gsap } from 'gsap'
import ScrollTo from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTo)

const navigation = [
    { name: 'Top 10', href: '#' },
    { name: 'New Releases', href: '#' },
    { name: 'How to Contribute', href: '#' }
]
function scrollToSearch() {
    gsap.to(window, { duration: 1, scrollTo: { y: '#search', offsetY: 130, autoKill: true }, ease: 'power4.out' })
}
</script>
