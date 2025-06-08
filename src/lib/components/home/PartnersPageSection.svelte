<script lang="ts">
import partnersData from '$lib/data/partnersData';
const partnersCount = partnersData.length;
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="sm:w-1/2 xl:w-1/2 mx-auto text-center mb-6 md:mb-12">
        <h2 class="text-3xl font-semibold md:leading-tight text-gray-800">Ініціативу «Цифровий Університет» підтримало понад {partnersCount} компаній та організацій</h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-20 gap-y-10">
        {#each partnersData as partner}

        {/each}
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
        {#each partnersData as partner}
            <div class="relative p-4 md:p-7 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={partner.image} alt={partner.title} />
                <a class="absolute left-0 right-0 top-0 bottom-0 rounded-lg" href={partner.link} target="_blank" title={partner.title} aria-label={partner.title}></a>
            </div>
        {/each}
    </div>
</div>
