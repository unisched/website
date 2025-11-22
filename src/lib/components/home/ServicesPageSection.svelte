<script lang="ts">
const iconBlocks = [
    {
        icon: 'school',
        title: 'Розклад студентів',
        category: 'Розклад занять'
    },
    {
        icon: 'media_link',
        title: 'Посилання на пари',
        category: 'Розклад занять'
    },
    {
        icon: 'cached',
        title: 'Зміни в розкладі',
        category: 'Розклад занять'
    },
    {
        icon: 'hide_image',
        title: 'Приховування пар',
        category: 'Розклад занять'
    },
    {
        icon: 'account_box',
        title: 'Розклад викладачів',
        category: 'Розклад занять'
    },
    {
        icon: 'interactive_space',
        title: 'Розклад кабінетів',
        category: 'Розклад занять'
    },
    {
        icon: 'weather_hail',
        title: 'Погодні умови',
        category: 'Розклад занять'
    },
    {
        icon: 'full_coverage',
        title: 'Новини та події',
        category: 'Мій Університет'
    },
    {
        icon: 'subscriptions',
        title: 'Відео та трансляції',
        category: 'Мій Університет'
    },
    {
        icon: 'how_to_vote',
        title: 'Дещо новеньке 😉',
        category: 'Цифрові сервіси'
    },
];
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="sm:w-1/2 xl:w-1/2 mx-auto text-center mb-6 md:mb-12">
        <h2 class="text-3xl font-semibold md:leading-tight text-gray-800">Найкращі функції застосунку, які люблять студенти та викладачі</h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {#each iconBlocks as item}
            <div class="h-38 sm:h-45 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-3 sm:p-4 md:p-5">
                <div class="flex justify-center items-center rounded-lg mx-auto">
                    <span class="material-symbols-outlined text-blue-900" style="font-size: 28pt;">{item.icon}</span>
                </div>

                <div class="mt-3">
                    <h3 class="text-sm sm:text-lg font-semibold text-gray-800 mb-2 px-2">{item.title}</h3>
                    <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-2xs">{item.category}</span>
                </div>
            </div>
        {/each}
    </div>
</div>
