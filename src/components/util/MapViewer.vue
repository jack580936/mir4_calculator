<template>
  <div class="map-viewer container-fluid">
    <div class="nav-bar">
      <ul>
        <template v-for="(group, index) in imageGroups" :key="index">
          <li class="" :class="{ active: currentTab === group.title }">
            <a href="#" @click.prevent="scrollToTitle(index)">{{ group.title }}</a>
          </li>
        </template>
      </ul>
    </div>
    <div class="container-fluid" ref="container">
      <h1>{{ PageTitle }}</h1>
      <div class="image-grid">
        <div class="image-container" v-for="(group, index) in imageGroups" :key="group.title">
          <h4 :id="`title-${index}`">{{ group.title }}</h4>
          <div class="image-group" v-for="(image, imageIndex) in group.images" :key="imageIndex" >
            <h5>{{ image.title }}</h5>
            <span style="white-space: pre-line">{{ image.description || "" }}</span>
            <img :src="image.url" :alt="image.title" @click="enlargeImage(image.url)"/>
            <div class="author" v-if="image.author">{{ image.author }}</div>
          </div>
        </div>
        <div v-if="showLargeImage" class="large-image-container" @click="showLargeImage = false">
          <img :src="largeImageUrl" :alt="largeImageTitle"/>
          <div class="author" v-if="getAuthorForImage(largeImageUrl)">{{ getAuthorForImage(largeImageUrl) }}</div>
        </div>
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
        element.scrollIntoView({ behavior: "smooth", block:"start"});
        let observer = new IntersectionObserver(IntersectionObserverCallback,
            { root: this.$refs.container,rootMargin: "0px 0px -80% 0px" , threshold: 0.9});
        observer.observe(element);
      }
    },
    enlargeImage(url) {
      this.largeImageUrl = url;
      this.largeImageTitle = this.images.find((image) => image.url === url)?.title || "";
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
  height: 100vh;
  overflow: auto;
  background-color: #15202B;
}

h1, h4 {
  color: #eff1fc;
}

h4 {
  padding-top: 3rem;
}

h1 {
  text-align: center;
  padding-top: 5rem;
}

.nav-bar {
  background-color: rgba(34, 48, 60, 0.5);
  padding: 10px 10px 10px 10px;
  max-height: 44px;
  overflow-x: overlay;
  overflow-y: hidden;
  position: absolute;
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
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    padding: 0 10px;

    & > span{
      color: rgb(230, 242, 255);
    }

    & > h5{
      color: rgb(230, 242, 255);
      padding-top: 2rem;
      padding-bottom: .5rem;
    }

    .author{
      color: rgb(230, 242, 255);
      text-align: left;
      align-self: flex-end;
    }

  }

}

.image-container img {
  width: 80%;
  height: 80%;
  max-width: 40rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.large-image-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  background-color: #000c;
  overflow: auto;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > img{
    height: 95vh;
    width: 95vw;
    padding: 5rem 1rem 1rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 0 10px #0003;
    object-fit: contain;

  }

  & > .author{
    color: #e6f2ff;
    text-align: left;
    align-self: flex-end;
    width: auto;
  }
}

.nav-bar li.active a {
  color: #333;
}

.active {
  background-color: #ffcc00; /* your desired highlight color */
  border-radius: 5px;
  box-shadow: 0 0 10px #ffcc00;
  color: #333;
}

</style>