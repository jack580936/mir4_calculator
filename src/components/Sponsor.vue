<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">&times;</button>
      <h3>Support Us</h3>
      <div class="sponsor-item">
        <a :href="externalLink" target="_blank" rel="noopener noreferrer">
          贊助連結 (PayUni)
        </a>
      </div>
      <div class="sponsor-item">
        <p>WEMIX Wallet:</p>
        <div class="wallet-address">
          <span>{{ wemixAddress }}</span>
          <button @click="copyAddress">Copy</button>
        </div>
      </div>
      <div class="sponsor-item">
        <p>WEMIX QR Code:</p>
        <img :src="qrCodeUrl" alt="WEMIX QR Code" class="qr-code-img" />
      </div>
    </div>
  </div>
</template>

<script>
import qrCodeImage from "@/assets/chore/wemix-qrcode.jpg";

export default {
  name: "SponsorModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      wemixAddress: "0x492e0789FeD6e240d791899Beda98983BB7f648D",
      externalLink: "https://api.payuni.com.tw/api/uop/receive_info/2/1/HIBE014209/0ksBJWqn4we38mzhYGsM",
      qrCodeUrl: qrCodeImage,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async copyAddress() {
      try {
        await navigator.clipboard.writeText(this.wemixAddress);
        alert("Wallet address copied to clipboard!");
      } catch (err) {
        alert("Failed to copy address.");
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {

  background-color: #15202B;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  width: 90%;
  max-width: 400px;
  text-align: center;
  color: white;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.sponsor-item {
  margin-bottom: 1.5rem;
}

.sponsor-item a {
  color: #42b983;
  text-decoration: none;
  font-size: 1rem;
}

.wallet-address {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22303C;

  padding: 10px;
  border-radius: 5px;
  word-break: break-all;
}

.wallet-address span {
  margin-right: 10px;
}

.wallet-address button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 8rem;
}

.qr-code-img {
  max-width: 200px;
  width: 100%;
  border-radius: 5px;
}
</style>
