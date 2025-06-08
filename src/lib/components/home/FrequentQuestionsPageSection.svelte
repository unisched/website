<script lang="ts">
import commonUrls from '$lib/data/commonUrls';
import JoinedButtons from "$lib/components/common/JoinedButtons.svelte";

const questionsAndAnswers = [
    {
        question: 'Застосунок дійсно безкоштовний?',
        answer: 'Так, Unisched безкоштовний для користувачів. Ми не беремо гроші за використання застосунку, і не плануємо цього робити в майбутньому.'
    },
    {
        question: 'Чи обов\'язково десь реєструватися?',
        answer: 'Ні, для використання основних функцій Unisched не потрібно реєструватися. Ви можете користуватися застосунком без створення облікового запису.'
    },
    {
        question: 'За які кошти розробляється Unisched?',
        answer: 'Проєкт реалізовується завдяки щедрим пожертвам від наших користувачів, компаній-партнерів, як і на особисті кошти керівника проєкту, Кадірова Юрія.'
    },
    {
        question: 'Як підключити мій заклад освіти?',
        answer: 'Для цього необхідно провести всебічну інтеграцію з сервісом, тож просимо відповідальну особу вашого ЗВО зв\'язатися з нами будь-яким способом.'
    },
    {
        question: 'Як я можу повідомити про проблему?',
        answer: 'Ви можете повідомити про проблему через форму зворотного зв\'язку, розміщену прямо в застосунку, або через наші сторінки у соціальних мережах.'
    },
    {
        question: 'Чому мій розклад відсутній або неповний?',
        answer: 'Схоже, ваш ЗВО або структурний підрозділ досі не заповнив розклад занять у внутрішній системі. Будь ласка, зверніться до адміністрації вашого ЗВО.'
    }
];
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">Часто задавані питання</h2>
    </div>
    <div class="mx-auto">
        <div class="grid sm:grid-cols-3 gap-6 md:gap-12">
            {#each questionsAndAnswers as item}
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">{item.question}</h3>
                    <p class="mt-2 text-gray-600">{item.answer}</p>
                </div>
            {/each}
        </div>
    </div>
    <JoinedButtons containerClasses="justify-center mt-10 lg:mt-14"
            firstButtonIcon="support"
            firstButtonText="Перейти до бази знань"
            firstButtonLink={commonUrls.support.helpCenter}
            secondButtonText="Зв'язок з підтримкою"
            secondButtonLink={commonUrls.support.chatCenter}/>
</div>
