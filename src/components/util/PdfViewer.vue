<template>
  <div class="container-fluid">
    <iframe
      :src="`${getPdfUrl(pdfUrl)}#view=fitH`" :title="pdfTitle" height="100%" width="100%"
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
  margin: 0;
  padding: 0 0 0 250px;
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.container-fluid {
  margin-left: 0;
  width: 100%;
  height: calc(100vh - 42px);
  overflow: hidden;
}
</style>
