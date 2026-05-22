<script lang="ts">
    import commonUrls from '$lib/data/commonUrls';
    import googlePlayDownloadButton from '$lib/assets/buttons/google_play.png';
    import appStoreDownloadButton from '$lib/assets/buttons/app_store.svg';
    import appGalleryDownloadButton from '$lib/assets/buttons/huawei_appgallery.png';
    import univeristyNavbarImage from '$lib/assets/screenshots/university_navbar.png';
    import socialNetworks from '$lib/data/socialNetworks';
</script>
<style>
    .hero-page-section {
        background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
    }
    .hero-page-section img.screenshot-image {
        width: 100%;
        max-width: 500px;
    }
</style>

<div class="hero-page-section">
    <div class="max-w-[85rem] mx-auto pt-20 pb-0">
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center">
                <a href={commonUrls.support.donations} target="_blank" class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300">
                    Підтримай ініціативу своїм донатом
                    <span class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                </a>
            </div>

            <div class="mt-5 max-w-2xl text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                    Твій
                    <span class="bg-clip-text bg-linear-to-tl from-blue-800 to-blue-900 text-transparent">Цифровий Університет</span>
                </h1>
            </div>

            <div class="mt-5 max-w-3xl text-center mx-auto">
                <p class="text-xl text-gray-600">Переглядай актуальний розклад занять, отримай доступ до цифрових сервісів, подій та голосувань твого закладу освіти — завдяки Unisched</p>
            </div>

            <div class="download-buttons-container mt-5 gap-3 flex justify-center flex-wrap">
                <a href={commonUrls.downloadUrls.googlePlayPage} target="_blank" class="hover:opacity-80" style="display: inline-block;">
                    <img src={googlePlayDownloadButton} alt="Завантажити з Google Play" style="height: 55px; vertical-align: middle; object-fit: contain;" />
                </a>
                <a href={commonUrls.downloadUrls.appleAppStorePage} target="_blank" class="hover:opacity-80" style="display: inline-block;">
                    <img src={appStoreDownloadButton} alt="Завантажити з App Store" style="height: 55px; vertical-align: middle; object-fit: contain;" />
                </a>
                <a href={commonUrls.downloadUrls.huaweiAppGalleryPage} target="_blank" class="hover:opacity-80" style="display: inline-block;">
                    <img src={appGalleryDownloadButton} alt="Завантажити з Huawei AppGallery" style="height: 55px; vertical-align: middle; object-fit: contain;" />
                </a>
            </div>

            <div class="mt-5 space-x-2 flex justify-center">
            {#each socialNetworks as item}
                <a href={item.href} title={item.name} target="_blank" class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700">
                    <item.icon />
                </a>
            {/each}
        </div>
        </div>

        <div class="mt-10 sm:px-6 lg:px-8">
            <img src={univeristyNavbarImage} class="screenshot-image mx-auto" alt="Знімок екрана з навігаційною панеллю університету" />
        </div>
    </div>
</div>
