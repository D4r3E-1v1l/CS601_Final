const {createApp} = Vue

const Hometown_1 = {
    data() {
        return {
            photoes_1: photoes_1,
            index_1: 0
        }
    },
    methods: {
        pre() {
            if (this.index_1 === 0) {
                this.index_1 = photoes_1.length
            }
            this.index_1--;
            this.index_1 %= photoes_1.length;
            console.log(this.index_1)
        },

        next() {
            this.index_1++;
            this.index_1 %= photoes_1.length;
            console.log(this.index_1)
        }
    }
}

const photoes_1 = [
    {
        src: "../resources/img/theforbiddencity/1.png",
        alt: "The Forbidden City 1"
    },
    {
        src: "../resources/img/theforbiddencity/2.png",
        alt: "The Forbidden City 2"
    },
    {
        src: "../resources/img/theforbiddencity/3.png",
        alt: "The Forbidden City 3"
    }
]

const photoes_2 = [
    {
        src: "../resources/img/thesummerpalace/1.png",
        alt: "The Forbidden City 1"
    },
    {
        src: "../resources/img/thesummerpalace/2.png",
        alt: "The Forbidden City 2"
    },
    {
        src: "../resources/img/thesummerpalace/3.png",
        alt: "The Forbidden City 3"
    }
]

createApp(Hometown_1).mount("#photo_1")