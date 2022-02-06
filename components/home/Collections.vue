<template>
    <div>
        <div class="max-w-7xl mx-auto">
            <div class="max-w-2xl mx-auto sm:py-10 py-8 lg:max-w-none">
                <div class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    <div
                        v-for="(image, index) in images"
                        :key="image.name"
                        class="group relative"
                        :ref="
                            (el) => {
                                if (el) allRefsImages[`image-${String(index)}`] = el
                            }
                        "
                    >
                        <div
                            class="relative w-full h-80 bg-slate-300 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
                        >
                            <img
                                v-if="image.smallUrl"
                                :src="image.smallUrl"
                                :alt="image.description ? image.description.Name : ''"
                                class="w-full h-full object-center object-cover"
                            />
                        </div>
                        <h3 class="mt-6 text-sm text-gray-500">
                            <a :href="image.smallUrl">
                                <span class="absolute inset-0" />
                                {{ image.description ? image.description.Author : '' }}
                            </a>
                        </h3>
                        <p class="text-base font-semibold text-gray-900 mb-6">
                            {{ image.description ? image.description.Name : '' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUpdate } from 'vue'
import { ImageFromApi } from '@/interfaces/client'
import { Entries } from '@/interfaces/server'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let images = ref<Entries[]>([])
const size = 18
let search = ref<string>('')
const allRefsImages = ref({} as HTMLFormElement)
let page = 1

onMounted(async () => {
    setScrollTrigger(allRefsImages.value[`image-${page * size - 1}`])
    images.value = fillPlaceholderImages<Entries, number>(
        {
            name: '',
            extension: '',
            object: {
                byteSize: 0,
                text: ''
            }
        },
        size
    )
    const response = await getData()
    images.value = response.collection
})

onBeforeUpdate(() => {
    allRefsImages.value = {} as HTMLFormElement
})

async function getData(size: number = 18, page: number = 1, search: string = ''): Promise<ImageFromApi> {
    if (search) {
        return await $fetch(`/api/get-images?size=${size}&page=${page}&search=${search}`)
    }
    return await $fetch(`/api/get-images?size=${size}&page=${page}`)
}

function fillPlaceholderImages<T, U>(value: T, len: U): T[] {
    return [...Array(len).keys()].map(() => value)
}

function setScrollTrigger(trigger: HTMLFormElement) {
    gsap.timeline({
        scrollTrigger: {
            trigger,
            start: 'bottom bottom',
            onEnter: ({ progress, direction, isActive }) => console.log(progress, direction, isActive)
        }
    })
}
</script>

<style lang="scss" scoped></style>
