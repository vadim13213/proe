<template>
  <div>
    <Header />
    {{ $route.fullPath }}
    <nuxt :key="$route.fullPath" />
    <Footer />
    <client-only>
      <Modal />
    </client-only>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Modal from "@/components/common/modal";
export default {
  components: {
    Header,
    Footer,
    Modal,
  },
};
</script>
