<script lang="ts">
import commonUrls from '$lib/data/commonUrls';
import unischedLogoDark from '$lib/assets/unisched-logo-dark-2color.svg';
</script>

<header class="sticky top-0 flex flex-nowrap z-50 w-full bg-white border-b border-gray-200">
    <nav class="relative max-w-[85rem] w-full mx-auto flex items-center justify-between md:gap-3 py-3 px-4 sm:px-6 lg:px-8">
        <div class="flex grow justify-start items-center gap-x-1">
            <a class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80" href="/static" aria-label="Unisched">
                <img src="{unischedLogoDark}" style="height: 20px;" alt="Unisched"/>
            </a>
        </div>

        <div class="flex justify-end items-center gap-x-2">
            <a href={commonUrls.support.donations} target="_blank" class="gap-x-1 py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200">
                <span class="material-symbols-outlined text-blue-900" style="font-size: 14pt;">credit_card_heart</span>
                <span class="hidden md:inline">Задонатити</span>
            </a>
            <a href={commonUrls.downloadUrls.landingPage} class="gap-x-1 py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-900 text-white hover:bg-blue-950 focus:outline-hidden focus:bg-blue-900">
                <span class="material-symbols-outlined" style="font-size: 14pt;">deployed_code_update</span>
                <span>Завантажити</span>
            </a>
        </div>
    </nav>
</header>
