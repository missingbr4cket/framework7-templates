<script lang="ts">
  import type Framework7 from 'framework7';
  import { Page, Navbar, Block, BlockTitle, f7ready } from 'framework7-svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    f7ready((f7: Framework7) => {
      // F7 calls go here
    });
  });
</script>

<Page>
  <Navbar title="About" backLink="Back" />
  <BlockTitle>About My App</BlockTitle>
  <Block>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae
      laudantium dignissimos est nobis delectus nemo ea alias voluptatum
      architecto, amet similique, saepe iste consectetur in repellat ut minus
      quibusdam!
    </p>
    <p>
      Molestias et distinctio porro nesciunt ratione similique, magni doloribus,
      rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat
      in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos
      consequatur!
    </p>
    <p>
      Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos
      doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni?
      Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam
      delectus!
    </p>
  </Block>
</Page>
