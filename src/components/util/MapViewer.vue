<template>
  <div class="nav-bar">
    <ul>
      <template v-for="(title, index) in imageTitles" :key="index">
        <li class="" :class="{ active: currentTab === title }">
          <a href="#" @click.prevent="scrollToImage(index)">{{ title }}</a>
        </li>
      </template>
    </ul>
  </div>
  <div class="container-fluid" ref="container">
    <h1>{{ PageTitle }}</h1>
    <div class="image-grid">
      <div class="image-container" v-for="(image, index) in images" :key="image.title">
        <h4 :id="`image-${index}`">{{ image.title }}</h4>
        <img :src="image.url" :alt="image.title" @click="enlargeImage(image.url)" />
      </div>
      <div v-if="showLargeImage" class="large-image-container" @click="showLargeImage = false">
        <img :src="largeImageUrl" :alt="largeImageTitle" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapViewer",
  props: {
    PageTitle: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showLargeImage: false,
      largeImageUrl: "",
      largeImageTitle: "",
      currentTab: this.images[0].title,
    };
  },
  computed: {
    imageTitles() {
      return this.images.map((image) => image.title);
    },
  },
  methods: {
    scrollToImage(index) {
      const element = document.getElementById(`image-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    enlargeImage(url) {
      this.largeImageUrl = url;
      this.largeImageTitle = this.images.find((image) => image.url === url).title;
      this.showLargeImage = true;
    },
  },
  mounted() {
    const container = this.$refs.container;
    container.addEventListener("scroll", () => {
      const containerTop = container.getBoundingClientRect().top;
      const titles = document.querySelectorAll(".nav-bar li a");
      let currentTitle = titles[0];
      let activeIndex = 0;
      for (let i = 0; i < this.images.length; i++) {
        const image = this.images[i];
        const title = titles[i];
        const element = document.getElementById(`image-${i}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop - containerTop < 200) {
            currentTitle = title;
            activeIndex = i;
          }
        }
      }
      this.currentTab = currentTitle.innerText;
    });
    const navBar = document.querySelector('.nav-bar');
    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    navBar.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - navBar.offsetLeft;
      scrollLeft = navBar.scrollLeft;
    });

    navBar.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });

    navBar.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    navBar.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - navBar.offsetLeft;
      const walk = (x - startX) * 3; // 控制滾動速度，調整這個值可以改變速度
      navBar.scrollLeft = scrollLeft - walk;
    });

    navBar.addEventListener('touchstart', (e) => {
      isMouseDown = true;
      startX = e.touches[0].pageX - navBar.offsetLeft;
      scrollLeft = navBar.scrollLeft;
    });

  },
};
</script>

<style scoped>
.container-fluid {
  margin-left: 0;
  width: 100%;
  height: calc(100vh - 42px);
  overflow: auto;
  background-color: #15202B;
}
h1,h4{
  color: #eff1fc;
}
h4{
  padding-top: 3rem;
}

h1{
  text-align: center;
  padding-top: 5rem;
  padding-left: 250px;
}
.nav-bar {
  background-color: #34495e  ;
  padding: 10px 10px 10px 10px;
  max-height: 44px;
  overflow-x: overlay;
  position: fixed;
  left: 250px;
  right: 0;

}
.nav-bar::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

.nav-bar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: max-content;
  flex-direction: row;
  justify-content: flex-start;
}

.nav-bar li {
  margin-right: 10px;
}

.nav-bar a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 12px;
}

.image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 250px;
  padding-bottom: 18rem;
  overflow: hidden;

}
.image-container {
  text-align: center;
  padding: 1rem;
}
img {
  width: 70%;
  height: 70%;
}

.large-image-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
}

.large-image-container img {
  max-width: fit-content;
  max-height: fit-content;
  scale: 1.25;
}
.nav-bar li.active a{
  color: #333;
}
.active {
  background-color: #ffcc00; /* your desired highlight color */
  border-radius: 5px;
  box-shadow: 0 0 10px #ffcc00;
  color: #333;
}

</style>