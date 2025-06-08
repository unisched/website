<script lang="ts">
    import commonUrls from '$lib/data/commonUrls';
    import googlePlayDownloadButton from '$lib/assets/buttons/google_play.png';
    import appStoreDownloadButton from '$lib/assets/buttons/app_store.svg';
</script>
<style>
    .hero-page-section {
        background-image:
            linear-gradient(339deg, rgba(47, 47, 47, 0.02) 0%, rgba(47, 47, 47, 0.02) 42%, transparent 42%, transparent 99%, rgba(17,   17,  17, 0.02) 99%, rgba(17,   17,  17, 0.02) 100%),
            linear-gradient(257deg, rgba(65, 65, 65, 0.02) 0%, rgba(65, 65, 65, 0.02) 11%, transparent 11%, transparent 92%, rgba(53,   53,  53, 0.02) 92%, rgba(53,   53,  53, 0.02) 100%),
            linear-gradient(191deg, rgba(5,   5,  5, 0.02) 0%, rgba(5,   5,  5, 0.02) 1%,  transparent 1%,  transparent 45%, rgba(19,   19,  19, 0.02) 45%, rgba(19,   19,  19, 0.02) 100%),
            linear-gradient(29deg,  rgba(28, 28, 28, 0.02) 0%, rgba(28, 28, 28, 0.02) 33%, transparent 33%, transparent 40%, rgba(220, 220, 220, 0.02) 40%, rgba(220, 220, 220, 0.02) 100%),
            linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
    }
</style>

<div class="hero-page-section">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
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
            <p class="text-xl text-gray-600">Переглядайте актуальний розклад занять, отримайте доступ до цифрових сервісів, подій та голосувань вашого закладу освіти — завдяки Unisched</p>
        </div>

        <div class="download-buttons-container mt-5 gap-3 flex justify-center">
            <a href={commonUrls.downloadUrls.googlePlayPage} target="_blank" class="hover:opacity-80" style="display: inline-block;">
                <img src={googlePlayDownloadButton} alt="Завантажити з Google Play" style="height: 55px; vertical-align: middle; object-fit: contain;" />
            </a>
            <a href={commonUrls.downloadUrls.appleAppStorePage} target="_blank" class="hover:opacity-80" style="display: inline-block;">
                <img src={appStoreDownloadButton} alt="Завантажити в App Store" style="height: 55px; vertical-align: middle; object-fit: contain;" />
            </a>
        </div>
    </div>
</div>
