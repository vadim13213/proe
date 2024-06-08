<template>
  <header ref="header" class="header">
    <div class="header-main">
      <div class="header-raw">
        <Logo />
        <SearchBar />
        <Tools v-if="fetchedUser" :isDesktop="isDesktop" />
      </div>
      <div class="for_check">
        IsDesktop: {{ isDesktop }}<br />
        isTablet: {{ isTablet }}
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/header/logo";
import SearchBar from "@/components/header/search-bar";
import resizeObserverMX from "@/mixins/resize-observer-mx";
import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    SearchBar,
    Tools: () => import("@/components/header/tools"),
  },
  data() {
    return {
      fetchedUser: true,
      isDesktop: true,
    };
  },
  mixins: [resizeObserverMX],
  computed: {
    ...mapGetters({
      isDesktop: "tech/isDesktop",
      isTablet: "tech/isTablet",
    }),
  },
};
</script>
