<template>
    <div>
        <carousel 
            :autoplay="true "
            :per-page=1
            :loop="true"
            class="carousel"
        >
            <slide class="slide">
                <img src="@/assets/slide.svg" class="image"/>
            </slide>
            <slide class="slide">
                <img src="@/assets/slide2.jpg" class="image"/>
            </slide>
            <slide class="slide">
                <img src="@/assets/slide3.jpg" class="image"/>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel,
        Slide,
    },
}
</script>
<style lang="scss">

.carousel {

    .slide {
        background-color: #666;
        align-items: center;
        display: flex;
        justify-content: center;
        min-height: 10rem;

        .image {
            height: 600px;
        }
    }
}
</style>