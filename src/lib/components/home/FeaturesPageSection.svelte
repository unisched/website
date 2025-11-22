<script lang="ts">
const iconBlocks = [
    {
        icon: 'calendar_month',
        title: 'Розклад занять',
        description: 'Перегляд особистого розкладу занять, а також пошук розкладу друзів, викладачів та аудиторій, який працює навіть в офлайні'
    },
    {
        icon: 'design_services',
        title: 'Сервіси та послуги',
        description: 'Миттєвий доступ до особистого кабінету, сервісів електронного та дистанційного навчання, перехід до занять в один дотик'
    },
    {
        icon: 'newsmode',
        title: 'Новини, відео та події',
        description: 'Першими дізнавайтеся про можливості для інформальної освіти, стажувань, отримання стипендій та корисних навичок'
    },
    {
        icon: 'person_raised_hand',
        title: 'Платформа для голосувань (скоро)',
        description: 'Ми розробляємо захищену платформу для проведення голосувань та студентських виборів, яку вбудуємо в застосунок'
    },
    {
        icon: 'policy',
        title: 'Безпека вашої інформації',
        description: 'Використання основних сервісів Unisched не вимагає реєстрації, передачі номера телефону, паспортних даних абощо'
    },
    {
        icon: 'featured_seasonal_and_gifts',
        title: 'Відсутність реклами',
        description: 'Надокучлива реклама захоплює мережу, але Unisched мужньо протистоїть її навалі – ми не розміщуємо жодної реклами'
    }
];
</script>

<!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="mx-auto">
        <div class="grid md:grid-cols-3 gap-6 lg:gap-12">
            {#each iconBlocks as block}
                <div class="flex gap-x-5 sm:gap-x-8">
                    <span class="material-symbols-outlined mt-2 text-blue-900" style="font-size: 28pt;">{block.icon}</span>
                    <div class="grow">
                        <h3 class="text-base sm:text-lg font-semibold text-gray-800">{block.title}</h3>
                        <p class="text-base mt-1 text-gray-600">{block.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
