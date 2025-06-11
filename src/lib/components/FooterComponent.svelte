<script lang="ts">
import commonUrls from '$lib/data/commonUrls';
import socialNetworks from '$lib/data/socialNetworks';
import unischedLogoDark from '$lib/assets/unisched-logo-dark-2color.svg';
const currentYear = (new Date()).getUTCFullYear();
</script>

<div class="border-t border-gray-200"></div>
<footer class="mt-auto w-full max-w-[35rem] py-14 px-4 sm:px-6 lg:px-8 mx-auto">
    <div class="text-center">
        <div class="flex justify-center">
            <a class="flex-none text-xl font-semibold text-black" href="/" aria-label="Unisched">
                <img src="{unischedLogoDark}" style="height: 20px;" alt="Unisched"/>
            </a>
        </div>

        <div class="mt-3">
            <p class="text-gray-500">
                © 2023-{currentYear}, <a href="https://supremeorder.rocks/" target="_blank" class="hover:underline">Громадська організація «Верховний Порядок»</a>
                та <a href="https://sirkadirov.com/" target="_blank" class="hover:underline">ФОП Кадіров Юрій Вікторович</a>. Всі права захищені.
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mt-3">
            <a href={commonUrls.policies.publicOffer} target="_blank" class="inline-flex items-center gap-x-1 text-sm text-gray-500 decoration-2 focus:outline-hidden font-medium">
                <span class="material-symbols-outlined" style="font-size: 14pt;">contract_edit</span>
                <span class="hover:underline">Публічна оферта</span>
            </a>
            <a href={commonUrls.policies.privacyPolicy} target="_blank" class="inline-flex items-center gap-x-1 text-sm text-gray-500 decoration-2 focus:outline-hidden font-medium">
                <span class="material-symbols-outlined" style="font-size: 14pt;">policy</span>
                <span class="hover:underline">Політика конфіденційності</span>
            </a>
        </div>

        <div class="mt-3 space-x-2">
            {#each socialNetworks as item}
                <a href={item.href} title={item.name} target="_blank" class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50">
                    <item.icon />
                </a>
            {/each}
        </div>
    </div>
</footer>
