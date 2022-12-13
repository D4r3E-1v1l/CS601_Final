const {createApp} = Vue

const Hometown_4 = {
    data() {
        return {
            photoes_4: photoes_4,
            index_4: 0
        }
    },
    methods: {
        pre() {
            if (this.index_4 === 0) {
                this.index_4 = photoes_4.length
            }
            this.index_4--;
            this.index_4 %= photoes_4.length;
            console.log(this.index_4)
        },

        next() {
            this.index_4++;
            this.index_4 %= photoes_4.length;
            console.log(this.index_4)
        }
    }
}

const photoes_4 = [
    {
        src: "../resources/img/tian'anmensquare/1.png",
        alt: "Tian'anmen Square 1"
    },
    {
        src: "../resources/img/tian'anmensquare/2.png",
        alt: "Tian'anmen Square 2"
    },
    {
        src: "../resources/img/tian'anmensquare/3.png",
        alt: "Tian'anmen Square 3"
    }
]

createApp(Hometown_4).mount("#photo_4")