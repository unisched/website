<script lang="ts">
import { afterNavigate } from '$app/navigation';
import '../app.css';

import HeaderComponent from '$lib/components/HeaderComponent.svelte';
import FooterComponent from '$lib/components/FooterComponent.svelte';

let { children } = $props();

afterNavigate(() => {
    window.HSStaticMethods.autoInit();
});
</script>

<HeaderComponent/>

{@render children()}

<FooterComponent/>
