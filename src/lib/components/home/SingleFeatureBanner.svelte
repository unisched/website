<script lang="ts">
    import commonUrls from '$lib/data/commonUrls';
    import JoinedButtons from '$lib/components/common/JoinedButtons.svelte';

    export let title: string;
    export let description: string[];
    export let image: string;
    export let left: boolean = false;
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
            <img class="rounded-xl" src={image} alt="Зображення">
        </div>

        <div class="mt-5 sm:mt-10 lg:mt-0 {left ? 'md:order-last' : 'md:order-first'}">
            <div class="space-y-6 sm:space-y-8">
                <div class="space-y-2 md:space-y-4">
                    <h3 class="font-bold text-3xl text-gray-800">{title}</h3>
                    {#each description as paragraph}
                        <p class="text-gray-600 text-lg">{paragraph}</p>
                    {/each}
                    <JoinedButtons hasPrimaryButton={true}
                        firstButtonIcon="deployed_code_update"
                        firstButtonText="Завантажити застосунок"
                        firstButtonLink={commonUrls.downloadUrls.landingPage}
                        secondButtonText="Дізнатися більше"
                        secondButtonLink={commonUrls.support.helpCenter}/>
                </div>
            </div>
        </div>
    </div>
</div>
