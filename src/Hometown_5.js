const {createApp} = Vue

const Hometown_5 = {
    data() {
        return {
            photoes_5: photoes_5,
            index_5: 0
        }
    },
    methods: {
        pre() {
            if (this.index_5 === 0) {
                this.index_5 = photoes_5.length
            }
            this.index_5--;
            this.index_5 %= photoes_5.length;
            console.log(this.index_5)
        },

        next() {
            this.index_5++;
            this.index_5 %= photoes_5.length;
            console.log(this.index_5)
        }
    }
}

const photoes_5 = [
    {
        src: "../resources/img/798artzone/1.png",
        alt: "798 Art Zone 1"
    },
    {
        src: "../resources/img/798artzone/2.png",
        alt: "798 Art Zone 2"
    },
    {
        src: "../resources/img/798artzone/3.png",
        alt: "798 Art Zone 3"
    }
]

createApp(Hometown_5).mount("#photo_5")