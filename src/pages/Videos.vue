<template>
    <main>
        <section class="container">
            
            <h1>Videos</h1>

            <section class="videos">

                <div v-for="(video, index) in videos" class="video" :key="index">
                    <a :href="video.link">
                        <img :src="video.thumb" :alt="video.title">
                        <div class="video-title">{{ video.title }}</div>
                    </a>
                </div>

            </section>
        </section>
    </main>
</template>

<script>
import api from '@/services/api.js'

export default {
    name: 'VideosComponent',
    data() {
        return {
            videos: []
        }
    },
    mounted() {
        api.get('/videos.json').then(res => {
            this.videos = res.data
        });
    }
}
</script>

<style scoped>
main {
    align-items: center;
}

.videos{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.video {
    width: 80%;
    margin-bottom: 30px;
}

.video img {
    width: 100%;
}

.video a {
    color: var(--color-text-dark);
    font-weight: 600;
}
</style>