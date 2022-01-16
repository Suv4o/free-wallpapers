<template>
    <div>
        <h2 class="px-4 sm:mt-10 mt-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to to find your favourite images</span>
            <span class="block text-yellow-600">Start searching today.</span>
        </h2>
        <div class="sm:mt-5 mt-5 px-4">
            <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center sm:pl-5 pl-2">
                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 24 24">
                        <path
                            d="M18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </span>
                <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full rounded-2xl sm:border-4 border-2 border-yellow-800 py-2 sm:pl-12 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-3xl"
                    placeholder="Search for an image..."
                    type="text"
                    name="search"
                />
            </label>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
