<script lang="ts">
  import { App, View, f7ready } from 'framework7-svelte';
  import type Framework7 from 'framework7/types';
  import { onMount } from 'svelte';
  import f7parameters from './ts/f7parameters';

  onMount(() => {
    f7ready((f7: Framework7) => {
      console.log(f7.device);
    });
  });
</script>

<App {...f7parameters}>
  <View main url="/" />
</App>
