<script lang="ts">
  import type Framework7 from 'framework7';
  import { Page, Navbar, Block, f7ready } from 'framework7-svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    f7ready((f7: Framework7) => {
      // F7 calls go here
    });
  });
</script>

<Page>
  <Navbar title="Not Found" backLink="Back" />
  <Block strong inset>
    <p>Sorry</p>
    <p>Cannot find the requested content.</p>
  </Block>
</Page>
