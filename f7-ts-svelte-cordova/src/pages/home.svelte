<script lang="ts">
  import Framework7 from 'framework7/lite-bundle';
  import {
    Block,
    BlockTitle,
    Button,
    Link,
    List,
    ListItem,
    NavLeft,
    NavRight,
    NavTitle,
    NavTitleLarge,
    Navbar,
    Page,
    Panel,
    Popup,
    Toolbar,
    View,
    f7ready,
  } from 'framework7-svelte';
  import { onMount } from 'svelte';

  let f7: Framework7;
  let dynamicPopup: Popup.Popup;
  let componentPopup: Popup;

  onMount(() => {
    f7ready((f: Framework7) => {
      // F7 calls go here
      f7 = f;
    });
  });

  function openDynamicPopup(): void {
    if (!dynamicPopup) {
      dynamicPopup = f7.popup.create({
        content: `
        <div class="popup">
          <div class="page">
            <div class="navbar">
              <div class="navbar-inner">
                <div class="navbar-bg"></div>
                <div class="title" style="padding-left:1em;">Dynamic Popup</div>
                <div class="right"><a  class="link popup-close">Close</a></div>
              </div>
            </div>
            <div class="page-content">
              <div class="block">
                <p>This popup was created dynamically</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
              </div>
            </div>
          </div>
        </div>`,
        on: {
          open: (p: Popup.Popup) => {
            console.log(`opened dynamic popup ${p}`);
          },
        },
      });
    }
    dynamicPopup.open();
  }

  function openPopup(): void {
    console.log(`opened component popup ${componentPopup.instance()}`);
  }
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Template</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight>
    <NavTitleLarge>Template</NavTitleLarge>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar bottom>
    <Link>Left Link</Link>
    <Link>Right Link</Link>
  </Toolbar>
  <!-- Page content -->
  <Block>
    <p>Here is your blank Framework7 app. Let's see what we have here.</p>
  </Block>

  <BlockTitle>Navigation</BlockTitle>
  <List strong inset dividersIos>
    <ListItem link="/about/" title="About" />
    <ListItem link="/xyz/" title="Non-existing page" />
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill popupOpen=".demo-popup">Popup Component</Button>
    <Button fill on:click={openDynamicPopup}>Dynamic Popup</Button>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill panelOpen="left">Left Panel</Button>
    <Button fill panelOpen="right">Right Panel</Button>
  </Block>
</Page>

<Panel right reveal dark>
  <View>
    <Page>
      <Navbar title="Right Panel" />
      <Block>Right panel content goes here</Block>
    </Page>
  </View>
</Panel>

<Panel left cover dark>
  <View>
    <Page>
      <Navbar title="Left Panel" />
      <Block>Left panel content goes here</Block>
    </Page>
  </View>
</Panel>

<!-- Popup -->
<Popup
  bind:this={componentPopup}
  class="demo-popup"
  onPopupOpen={() => {
    openPopup();
  }}
>
  <View>
    <Page>
      <Navbar title="Demo Popup">
        <NavRight>
          <Link popupClose>Close</Link>
        </NavRight>
      </Navbar>
      <Block>
        <p>Popup content goes here.</p>
      </Block>
    </Page>
  </View>
</Popup>
