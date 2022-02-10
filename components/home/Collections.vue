<template>
    <div>
        <div class="max-w-7xl mx-auto">
            <div class="max-w-2xl mx-auto sm:py-10 py-8 lg:max-w-none">
                <div class="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    <div v-for="image in images" :key="image.name" class="group relative">
                        <div
                            class="relative w-full h-80 bg-gray-300 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
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
import { useStore } from '@/store/main'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { ImageFromApi } from '@/interfaces/client'
import { Entries } from '@/interfaces/server'
const store = useStore()
let images = ref<Entries[]>([])
const placeholderImgObj = {
    name: '',
    extension: '',
    object: {
        byteSize: 0,
        text: ''
    }
}
const isLoaded = ref(false)
const configFetch = {
    page: 1,
    size: 18,
    total: 0,
    range: {
        from: 0,
        to: 0
    }
}

onMounted(async () => {
    window.addEventListener('scroll', handleImageLoad)
    loadImages()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleImageLoad)
})

watch(
    () => store.search,
    (searchText) => {
        console.log(searchText)
        configFetch.page = 1
        configFetch.size = 18
        configFetch.total = 0
        configFetch.range.from = 0
        configFetch.range.to = 0
        loadImages()
    }
)

async function getData(size: number = 18, page: number = 1, search: string = ''): Promise<ImageFromApi> {
    if (search) {
        return await $fetch(`/api/get-images?size=${size}&page=${page}&search=${search}`)
    }
    return await $fetch(`/api/get-images?size=${size}&page=${page}`)
}

function fillPlaceholderImages<T, U>(value: T, len: U): T[] {
    return [...Array(len).keys()].map(() => value)
}

function handleImageLoad() {
    if (currentPageScrollPercentage() > 90) {
        loadImages()
    }
}

async function loadImages() {
    if (isLoaded.value) return
    if (configFetch.total && configFetch.total === configFetch.range.to) return

    isLoaded.value = true
    images.value = [...images.value, ...fillPlaceholderImages<Entries, number>(placeholderImgObj, configFetch.size)]

    const response = await getData(configFetch.size, configFetch.page++, store.search)
    const [rangeFrom, rangeTo] = response.range.split('-')

    configFetch.range.to = Number(rangeTo)
    configFetch.range.from = Number(rangeFrom)
    configFetch.total = response.total

    if (response.collection.length) {
        images.value = images.value.slice(0, images.value.length - configFetch.size)
        images.value = [...images.value, ...response.collection]
        isLoaded.value = false
    }
}

function currentPageScrollPercentage() {
    return (
        ((document.documentElement.scrollTop + document.body.scrollTop) /
            (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
        100
    )
}
</script>

<style lang="scss" scoped></style>
