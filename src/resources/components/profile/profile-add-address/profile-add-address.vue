<template>
  <v-dialog v-model="$store.state.dialogState" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">جزئیات آدرس خود را بنویسید</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="استان" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="شهر"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field label="محله" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="آدرس پستی"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="پلاک"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="واحد"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="کد پستی"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <button
          class="btn-submit-address"
          @click="$store.commit('set_dialog', false)"
        >
          تایید و ثبت آدرس
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style src='./profile-add-address.scss' lang="scss" scoped></style>
<script src='./profile-add-address.js'></script>