<template>
  <div class="container-fluid">
    <iframe
      :src="getPdfUrl(pdfUrl)"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "PdfViewer",
  props: {
    pdfUrl: {
      type: String,
      required: true
    },
    pdfTitle: {
      type: String,
    }
  },
  data() {
    return {};
  },
  mounted() {
    // Any additional logic you may have
  },
  methods: {
    getPdfUrl(url) {
      return new URL(`/src/assets/mystery/${url}`, import.meta.url).href;
    }
  }
};
</script>

<style>

iframe {
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.container-fluid {
  margin-left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
