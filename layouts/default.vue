<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">{{ $store.state.appName }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="!$store.state.auth.authenticated">
          <b-nav-item :to="localePath('index')">
            Home
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if="$store.state.auth.authenticated">
          
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <i class="fa fa-language" aria-hidden="true"></i> Lang
            </template>
            <b-dropdown-item
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#" v-if="!$store.state.auth.authenticated">Login</b-nav-item>

          <b-nav-item-dropdown v-if="$store.state.auth.authenticated" right>
            <template slot="button-content">
              User
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss"></style>
