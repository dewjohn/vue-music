<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <div class="slider-content">
          <slider v-if="sliders.length" :sliders="sliders"></slider>
        </div>
      </div>
      <div class="recommend-list">
        <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
        <ul>
          <li
            v-for="(item, index) in albums"
            class="item"
            :key="index"
          >
            <div class="icon">
              <img width="60" height="60" v-lazy="item.picUrl">
            </div>
            <div class="text">
              <h2 class="name">
                {{ item.name }}
              </h2>
              <p class="title">
                {{item.copywriter}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../service/request'
import Slider from '../components/slider/slider.vue'
import { ref } from 'vue'
// 获取banner相关
const useGetBannerEffect = () => {
  const sliders = ref([])
  const getBanner = async () => {
    const result = await get('/banner?type=2')
    sliders.value = result.banners
    // console.log(sliders)
  }
  getBanner()
  return { sliders }
}
// 获取推荐歌单相关
const useGetHotAlbumEffect = () => {
  const albums = ref([])
  const getHotAlbums = async () => {
    const result = await get('/personalized?limit=15')
    // console.log(result)
    if (result.result) {
      albums.value = result.result
    }
  }
  getHotAlbums()
  return { albums }
}

export default {
  name: 'Recommend',
  components: { Slider },
  setup () {
    const { albums } = useGetHotAlbumEffect()
    const { sliders } = useGetBannerEffect()
    return { sliders, albums }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }
        .name {
          margin-bottom: 10px;
          color: $color-text;
        }
        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
