<template>
  <div class="home">
    <v-toolbar class="mt-5" flat>
      <v-toolbar-title>
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>

        <span class="h6 font-weight-bold">Good Morning Oguz</span>
        <v-list-item-subtitle class="caption mb-14 grey--text">
          Here are your stas for Today, 24 Aug 2020
        </v-list-item-subtitle>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>far fa-calendar-minus</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-flex>
      <v-row no-gutters>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="1px" color="grey"></v-card>
            </v-col>
            <v-col cols="12" md="10">
              <v-list two-line subheader class="ml-n8">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>Total Revenue</v-list-item-subtitle
                    ><br />
                    <v-list-item-title class="font-weight-black"
                      >$32,621.72</v-list-item-title
                    >
                    <v-list-item-subtitle>433 orders</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="1px" color="grey"></v-card>
            </v-col>
            <v-col cols="12" md="10">
              <v-list two-line subheader class="ml-n8">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>Subscribers</v-list-item-subtitle
                    ><br />
                    <v-list-item-title class="font-weight-black"
                      >484,205</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >$56 Average Order</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="1px" color="grey"></v-card>
            </v-col>
            <v-col cols="12" md="10">
              <v-list two-line subheader class="ml-n8">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>Conversations</v-list-item-subtitle
                    ><br />
                    <v-list-item-title class="font-weight-black"
                      >552,553</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >5min Average Response Time</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="12" md="2">
              <v-card height="80px" width="1px" color="grey"></v-card>
            </v-col>
            <v-col cols="12" md="10">
              <v-list two-line subheader class="ml-n8">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      >Popup Conversion Rate</v-list-item-subtitle
                    ><br />
                    <v-list-item-title class="font-weight-black"
                      >25%</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >5% Sales Conversion Rate</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-flex>
    <v-flex auto>
      <!-- <v-sparkline> </v-sparkline> -->
      <v-col cols="10" md="8">
        <Chart />
      </v-col>
    </v-flex>
  </div>
</template>

<script>
import Chart from "./Chart.vue";
export default {
  name: "Home",
  components: {
    Chart,
  },
  data: () => ({
    tab: null,
    text: "center",
    fill: true,
    padding: 8,
    radius: 10,
    value: [],
    width: 2,
    lineCap: "round",
    type: "trend",
    autoLineWidth: false,
    fills: false,
  }),
};
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style lang="sass" scoped>
.v-card
  max-width: 10vw
</style>
<style scoped>
.border {
  border-right: 1px solid grey;
}
</style>
