<template>
  <div class="card-container container-fluid">
      <img :src="getImageUrl('bg/dragonBG.png')" alt="changelog"/>
    <div class="card-carousel">
         <button type="button" class="btn" @click="prevCard">&lt;</button>
         <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ currentCard.title }}</h5>
                  <template v-for="(change, index) in currentCard.changes"  :key="index">
                    <p class="card-text">{{ change }}</p>
                  </template>
                 </div>
      </div>
         <button type="button" class="btn" @click="nextCard">&gt;</button>
    </div>
  </div>
</template>

<script>
import { getImageUrl } from '@/utils';
export default {
  name: 'CardCarousel',
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentCardIndex: 0,
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentCardIndex];
    },
  },
  methods: {
      getImageUrl,
    nextCard() {
      if (this.currentCardIndex < this.cards.length - 1) {
        this.currentCardIndex++;
      } else {
        this.currentCardIndex = 0;
      }
    },
    prevCard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--;
      } else {
        this.currentCardIndex = this.cards.length - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

@mixin defaultColor{
    color: #eeeef4;
    background-color: #15202B;
    border-color: #22303C;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  & > img{
    position: absolute;
    width: 50%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.card-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

    & > button{
      margin: 1rem;
      z-index: 1;
      color: #eeeef4;
      background-color: rgba(21, 32, 43, 0.75);
      border-color: #22303C;
      border-radius: 5px;
      font-size: small;

        &:hover{
            color: #eeeef4;
            background-color: rgba(123, 135, 164, 0.7);
            border-color: #22303C;
        }

        &:active{
            color: #000;
        }

    }
}

.card {
  width: 30rem;
  max-width: 100%;
    min-height: 30rem;
    max-height: 30rem;
  background-color: unset;

    & > .card-body{
      @include defaultColor;
      background-color: rgba(21, 32, 43, 0.8);
    }
}
</style>
