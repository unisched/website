<script lang="ts">
import institutionsData from '$lib/data/institutionsData';
import commonUrls from '$lib/data/commonUrls';
import JoinedButtons from "$lib/components/common/JoinedButtons.svelte";
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="sm:w-1/2 xl:w-1/2 mx-auto text-center mb-6 md:mb-12">
        <h2 class="text-3xl font-semibold md:leading-tight text-gray-800">До застосунку вже під'єднано {institutionsData.institutionsCount} закладів освіти у різних куточках України</h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
        {#each institutionsData.institutions as item}
            <div class="relative p-4 md:p-7 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={item.logo} alt={item.name}/>
                <a class="absolute left-0 right-0 top-0 bottom-0 rounded-lg" href={item.link} target="_blank" title={item.name} aria-label={item.name}></a>
            </div>
        {/each}
    </div>

    <JoinedButtons containerClasses="justify-center mt-6 md:mt-12"
        firstButtonIcon="map"
        firstButtonText="Переглянути на мапі"
        firstButtonLink={commonUrls.others.mapOfInstitutions}
        secondButtonText="Як долучити мій ЗВО"
        secondButtonLink={commonUrls.support.helpForInstitutions}/>
</div>
