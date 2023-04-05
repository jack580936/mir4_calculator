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
    }
  },
  methods: {
    getPdfUrl(url) {
      return new URL(`/src/assets/mystery/${url}`, import.meta.url).href;
    }
  },
}
</script>

<style>
iframe {
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0 0 0 250px;
}

.container-fluid {
  margin-left: 0;
  width: 100%;
  height: calc(100vh - 42px);
  overflow: hidden;
}
</style>
