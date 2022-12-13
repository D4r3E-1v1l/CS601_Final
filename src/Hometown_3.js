const {createApp} = Vue

const Hometown_3 = {
    data() {
        return {
            photoes_3: photoes_3,
            index_3: 0
        }
    },
    methods: {
        pre() {
            if (this.index_3 === 0) {
                this.index_3 = photoes_3.length
            }
            this.index_3--;
            this.index_3 %= photoes_3.length;
            console.log(this.index_3)
        },

        next() {
            this.index_3++;
            this.index_3 %= photoes_3.length;
            console.log(this.index_3)
        }
    }
}

const photoes_3 = [
    {
        src: "../resources/img/thetempleofheaven/1.png",
        alt: "The Temple of Heaven 1"
    },
    {
        src: "../resources/img/thetempleofheaven/2.png",
        alt: "The Temple of Heaven 2"
    },
    {
        src: "../resources/img/thetempleofheaven/3.png",
        alt: "The Temple of Heaven 3"
    }
]

createApp(Hometown_3).mount("#photo_3")