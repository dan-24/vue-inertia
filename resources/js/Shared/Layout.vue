<template>
  <div id="app">
    <div class="container-scroller">
      <Header />
      <div class="container-fluid page-body-wrapper">
        <Sidebar />
        <div class="main-panel">
          <div class="content-wrapper">
            <Dashboard />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "../Pages/Dashboard";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Sidebar,
    Dashboard,
    Footer
  }
};
</script>

<style>
@import "~mdi/css/materialdesignicons.min.css";
</style>

<style lang="scss">
@import "../../scss/style.scss";
</style>