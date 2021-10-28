<template>
  <v-navigation-drawer v-model="drawer" permanent color="#F4F5F9" app>
    <v-list-item class="px-2 py-5">
      <v-list-item-title class="text-capitalize" align="center">
        <v-icon>far fa-comment</v-icon> BlueReceipt
      </v-list-item-title>
    </v-list-item>
    <v-col cols="8" md="10">
      <v-text-field
        label=""
        placeholder="Search..."
        prepend-inner-icon="mdi-magnify"
        filled
        rounded
        dense
      ></v-text-field>
    </v-col>
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="blue">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-card align="left" class="bottom pa-1">
          <v-avatar class="bottom" size="30">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
          <span class="font-weight-bold">Oguz yagiz Kara</span>
          <v-list-item-subtitle class="text-center mb-14 grey--text">
            Store Name
          </v-list-item-subtitle>
        </v-card>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    selectedItem: 0,
    drawer: null,
    items: [
      { icon: "fa-solid fa-envelope-open", text: "Dashboard", route: "/home" },
      {
        icon: "far fa-comment",
        text: "Conversations",
        route: "/",
      },
      {
        icon: "fas fa-sliders-h",
        text: "Automations",
        route: "/",
      },

      {
        icon: "fas fa-poll",
        text: "Campaigns",
        route: "/",
      },
      { icon: "far fa-clone", text: "Popup", route: "/" },
      { icon: "far fa-comment-alt", text: "Live chat", route: "/" },
      { icon: "fas fa-life-ring", text: "Segments", route: "/" },
      { icon: "fas fa-toolbox", text: "Integrations", route: "/" },
    ],
  }),
};
</script>
<style scoped>
div >>> .v-list a {
  text-decoration: none;
}
</style>