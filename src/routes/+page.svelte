<script lang="ts">
import HeroPageSection from '$lib/components/home/HeroPageSection.svelte';
import FeaturesPageSection from '$lib/components/home/FeaturesPageSection.svelte';
import InstitutionsPageSection from '$lib/components/home/InstitutionsPageSection.svelte';
import SingleFeatureBanner from '$lib/components/home/SingleFeatureBanner.svelte';
import singleFeatureBanners from '$lib/data/singleFeatureBanners';
import ProjectStatsPageSection from '$lib/components/home/ProjectStatsPageSection.svelte';
import PartnersPageSection from '$lib/components/home/PartnersPageSection.svelte';
import FrequentQuestionsPageSection from '$lib/components/home/FrequentQuestionsPageSection.svelte';
</script>

<HeroPageSection/>
<div class="border-b border-gray-200"></div>

<FeaturesPageSection/>
<div class="border-b border-gray-200"></div>

<InstitutionsPageSection/>
<div class="border-b border-gray-200"></div>

<SingleFeatureBanner title={singleFeatureBanners[0].title}
                     description={singleFeatureBanners[0].description}
                     image={singleFeatureBanners[0].image}
                     left={true}/>
<div class="border-b border-gray-200"></div>

<ProjectStatsPageSection/>
<div class="border-b border-gray-200"></div>

<SingleFeatureBanner title={singleFeatureBanners[1].title}
                     description={singleFeatureBanners[1].description}
                     image={singleFeatureBanners[1].image}
                     left={false}/>
<div class="border-b border-gray-200"></div>

<PartnersPageSection/>
<div class="border-b border-gray-200"></div>

<FrequentQuestionsPageSection/>
