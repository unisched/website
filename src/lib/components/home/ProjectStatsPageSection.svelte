<script lang="ts">
import statisticsData from '$lib/data/statisticsData';
import institutionsData from '$lib/data/institutionsData';

function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const totalUsersFormatted : string = numberWithCommas(statisticsData.totalUsers);
const totalDevelopmentHoursFormatted : string = numberWithCommas(statisticsData.totalDevelopmentHours);

const smallStatsList = [
    {
        title: 'годин роботи над створенням Unisched',
        value: totalDevelopmentHoursFormatted
    },
    {
        title: 'країн, де найчастіше бувають користувачі',
        value: statisticsData.popularUserCountriesCount
    },
    {
        title: 'закладів освіти – партнерів проєкту',
        value: institutionsData.institutionsCount.toString()
    },
    {
        title: 'зароблено на даних наших користувачів',
        value: '0 грн'
    }
];
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
        <div class="lg:col-span-4">
            <div class="lg:pe-6 xl:pe-12">
                <p class="text-6xl font-bold leading-10 text-blue-900">{totalUsersFormatted}</p>
                <p class="mt-3 sm:mt-4 text-gray-500">корстувачів на всіх платформах зібрав застосунок за час свого існування</p>
            </div>
        </div>

        <div class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:">
            <div class="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:gap-8">
                {#each smallStatsList as stat}
                    <div>
                        <p class="text-3xl font-semibold text-blue-900">{stat.value}</p>
                        <p class="mt-1 text-gray-500">{stat.title}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
