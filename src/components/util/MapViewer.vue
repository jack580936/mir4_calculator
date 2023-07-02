<script setup>
import {getImageUrl} from "@/utils";

</script>

<template>
  <div class="map-viewer">
    <div class="container-fluid" ref="container">
      <h1>{{ PageTitle }}</h1>
      <div class="image-grid">
        <div class="image-container" v-for="(group, index) in imageGroups" :key="group.title">
          <h4 :id="`title-${index}`">{{ group.title }}</h4>
          <div class="image-group" v-for="(image, imageIndex) in group.images" :key="imageIndex" >
            <h5>{{ image.title }}</h5>
            <img :src="image.url" :alt="image.title" @click="enlargeImage(image)"/>

            <span style="white-space: pre-line">{{ image.description}}</span>
            <div class="author" v-if="image.author">
              <img v-if="image.authorImgUrl === ''" :src="getImageUrl('icon/person_FILL0.png')" class="author-img"  alt="author-img">
              <img v-else :src="image.authorImgUrl" class="author-img"  alt="author-img" @click="enlargeImage(image,'author')">
              <span class="author-name">{{ image.author }}</span>
            </div>
          </div>
        </div>
        <div v-if="showLargeImage" class="large-image-container" @click="showLargeImage = false">
          <img v-if="showAuthorImage" class="large-image" :src="largeImageAuthorImgUrl" :alt="largeImageAuthor"/>
          <img v-else class="large-image" :src="largeImageUrl" :alt="largeImageTitle"/>
          <div class="author" v-if="getAuthorForImage(largeImageUrl) && !showAuthorImage">
              <img v-if="largeImageAuthorImgUrl === ''" :src="getImageUrl('icon/person_FILL0.png')" class="author-img"  alt="author-img">
              <img v-else :src="largeImageAuthorImgUrl" class="author-img"  alt="author-img">
              <span class="author-name">{{largeImageAuthor}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-bar">
      <ul>
        <template v-for="(group, index) in imageGroups" :key="index">
          <li class="" :class="{ active: currentTab === group.title }">
            <a href="#" @click.prevent="scrollToTitle(index)">{{ group.title }}</a>
          </li>
        </template>
      </ul>
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
      showAuthorImage: false,
      largeImageUrl: "",
      largeImageTitle: "",
      largeImageAuthor: "",
      largeImageAuthorImgUrl: "",
      currentTab: "",
      navBarTitleClicked: false,
    };
  },
  computed: {
    imageGroups() {
      const groups = [];
      for (const image of this.images) {
        const existingGroup = groups.find(group => group.title === image.title);
        if (existingGroup) {
          existingGroup.images.push(image);
        } else {
          groups.push({
            title: image.title,
            images: image.images,
          });
        }
      }
      return groups;
    },
  },
  watch: {
    $route() {
      const container = this.$refs.container;
      if (container) {
        container.scrollTo(0, 0);
      }
    },
  },
  methods: {
    scrollToTitle(index) {
      const element = document.getElementById(`title-${index}`);
      const IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.target === element && entry.isIntersecting) {
            // 標題已經成功移動至畫面中將控制還給 activeTitle.scrollIntoView
            this.navBarTitleClicked = false;
            observer.unobserve(entry.target);
          }
        });
      };

      if (element) {
        this.navBarTitleClicked = true;
        // element scroll to view but not behind the nav bar
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        let observer = new IntersectionObserver(IntersectionObserverCallback,
            { root: this.$refs.container, rootMargin: "-84px 0px -75% 0px" , threshold: 0.9});
        observer.observe(element);
      }
    },
    enlargeImage(image, mode) {
      this.showAuthorImage = mode === "author";
      this.largeImageUrl = image.url;
      this.largeImageTitle = image.title;
      this.largeImageAuthor = image.author;
      this.largeImageAuthorImgUrl = image.authorImgUrl;
      this.showLargeImage = true;
    },
    getAuthorForImage(url) {
      const group = this.imageGroups.find(group => group.images.some(image => image.url === url));
      if (group) {
        const image = group.images.find(image => image.url === url);
        if (image && image.author) {
          return image.author;
        }
      }
      return "";
    },
    /* mounted addEventListener function */
    scrollHandler(container){
      const containerTop = container.getBoundingClientRect().top;
      const titles = document.querySelectorAll(".nav-bar li a");
      let currentTitle = titles[0];
      let activeIndex = 0;
      for (let i = 0; i < this.images.length; i++) {
        const image = this.images[i];
        const title = titles[i];
        const element = document.getElementById(`title-${i}`);
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop - containerTop < 200) {
            currentTitle = title;
            activeIndex = i;
          }
        }
      }
      this.currentTab = currentTitle.innerText;

      // currentTitle.innerText scrollIntoView
      if (!this.navBarTitleClicked) {
        const activeTitle = document.querySelector('.nav-bar li.active');
        if (activeTitle) {
          activeTitle.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
      }
    },
    mouseDownHandler(e) {
      this.isMouseDown = true;
      this.startX = e.pageX - this.navBar.offsetLeft;
      this.scrollLeft = this.navBar.scrollLeft;
    },

    mouseUpHandler(e) {
      this.isMouseDown = false;
    },

    mouseMoveHandler(e) {
      if (!this.isMouseDown) return;
      if (e.buttons === 1) {
        e.preventDefault();
        const x = e.pageX - this.navBar.offsetLeft;
        const walk = (x - this.startX) * 2; // Adjust this value to control the scrolling speed
        this.navBar.scrollLeft = this.scrollLeft - walk;
      }
    },

    mouseLeaveHandler(e) {
      this.isMouseDown = false;
    },

    touchStartHandler(e) {
      this.isMouseDown = true;
      this.startX = e.touches[0].pageX - this.navBar.offsetLeft;
      this.scrollLeft = this.navBar.scrollLeft;
    },
  },
  mounted() {
    const container = this.$refs.container;
    container.addEventListener("scroll", this.scrollHandler.bind(this, container), { passive: true });

    const navBar = document.querySelector('.nav-bar');
    this.navBar = navBar;
    this.isMouseDown = false;
    this.startX = 0;
    this.scrollLeft = 0;
    navBar.addEventListener('mousedown', this.mouseDownHandler);
    navBar.addEventListener('mouseleave', this.mouseLeaveHandler);
    navBar.addEventListener('mouseup', this.mouseUpHandler);
    navBar.addEventListener('mousemove', this.mouseMoveHandler);
    navBar.addEventListener('touchstart', this.touchStartHandler, { passive: true });
  },
  beforeDestroy() {
    const container = this.$refs.container;
    container.removeEventListener("scroll", this.scrollHandler);

    this.navBar.removeEventListener('mousedown', this.mouseDownHandler);
    this.navBar.removeEventListener('mouseleave', this.mouseLeaveHandler);
    this.navBar.removeEventListener('mouseup', this.mouseUpHandler);
    this.navBar.removeEventListener('mousemove', this.mouseMoveHandler);
    this.navBar.removeEventListener('touchstart', this.touchStartHandler);
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  margin-left: 0;
  width: 100%;
  overflow: auto;
  background-color: #15202B;
  scroll-padding-top: 7rem;
}

h1, h4 {
  color: #eff1fc;
  font-weight: bold;
}

h4 {
  margin-top: 3rem;
  padding: 0;
  border-bottom: 3px solid #2c689c;
}

h1 {
  text-align: center;
  padding-top: 7rem;
}

.nav-bar {
  background-color: rgba(34, 48, 60, 0.5);
  padding: 10px 10px 10px 10px;
  max-height: 44px;
  overflow-x: overlay;
  overflow-y: hidden;
  position: fixed;
  top: 42px;
  left: 0;
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
  padding-bottom: 18rem;
  overflow: hidden;

}

.image-container {
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;



  & > span{
  color: rgb(230, 242, 255);
  text-align: left;
  }

  .image-group{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    min-width: 50rem;
    max-width: 1000px;
    padding: 0 10px;
    border: 1px solid #192734;
    border-radius: 5px;
    background-color: rgba(25, 39, 52, 0.8);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    & > span{
      color: rgb(230, 242, 255);
      text-align: left;
      align-self: flex-start;
      margin: 1rem 0;
      border-radius: 5px;
      padding: 1rem;
      line-height: 2;
      min-width: 100%;
    }

    & > h5{
      color: rgb(230, 242, 255);
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding: 5px 0;
      border-bottom: 2px solid rgba(0, 255, 183, 0.5);
      font-weight: bold;
    }

    .author{
      color: rgb(230, 242, 255);
      display: flex;
      margin: 1rem 0;
      padding: 0 1rem;
      align-items: center;
      align-self: flex-end;
      border-radius: 5px;



      & > img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
      }

      & > .author-name{
        color: rgb(230, 242, 255);
        text-align: left;
        align-self: center;

        border-bottom: 2px solid #ffcc00;
        font-weight: bold;
      }
    }

  }

}

.image-container img {
  width: 80%;
  height: 80%;
  cursor: pointer;
  max-width: 40rem;
  transition: transform 0.2s ease;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  background-color: rgba(83, 93, 125, 1);
}

.large-image-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: #000c;
  overflow: auto;
  cursor: pointer;

  & > img {
    cursor: pointer;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 0 10px #0003;
    object-fit: contain;
    max-width: 85%;
    max-height: 85%;

  }

  & > .author{
    position: absolute;
    bottom: 0;
    right: 0;
    color: rgb(230, 242, 255);
    display: flex;
    margin-top: 1rem;
    padding: 1rem;
    align-items: center;
    align-self: flex-end;


    & > img{
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 1rem;
      background-color: rgba(83, 93, 125, 1);
      cursor: auto;
    }

    & > .author-name{
      color: rgb(230, 242, 255);
      text-align: left;
      align-self: flex-start;
      margin-top: 1rem;
      border-bottom: 2px solid #ffcc00;
      font-weight: bold;

    }

  }
}

.nav-bar li.active a {
  color: #333;
}

.active {
  background-color: #ffcc00;
  border-radius: 5px;
  box-shadow: 0 0 10px #ffcc00;
  color: #333;
}

</style>