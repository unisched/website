<script lang="ts">
export let firstButtonText: string;
export let firstButtonLink: string;
export let firstButtonIcon: string;
export let secondButtonText: string;
export let secondButtonLink: string;
export let containerClasses: string = 'justify-start';
export let hasPrimaryButton: boolean = false;

const firstButtonClass = hasPrimaryButton
    ? 'border-transparent bg-blue-900 text-white hover:bg-blue-950 focus:outline-hidden focus:bg-blue-900'
    : 'border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50';
const firstButtonIconClass = hasPrimaryButton
    ? 'text-white'
    : 'text-blue-900';
</script>

<div class="flex flex-wrap gap-x-2 {containerClasses}">
    <a href={firstButtonLink} target="_blank" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border {firstButtonClass}">
        <span class="material-symbols-outlined {firstButtonIconClass}" style="font-size: 16pt;">{firstButtonIcon}</span>
        <span>{firstButtonText}</span>
    </a>
    <a href={secondButtonLink} target="_blank" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-blue-900 hover:text-blue-950 focus:outline-hidden focus:text-blue-900">
        <span>{secondButtonText}</span>
        <span class="material-symbols-outlined" style="font-size: 16pt;">arrow_forward_ios</span>
    </a>
</div>
