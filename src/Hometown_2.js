const {createApp} = Vue

const Hometown_2 = {
    data() {
        return {
            photoes_2: photoes_2,
            index_2: 0
        }
    },
    methods: {
        pre() {
            if (this.index_2 === 0) {
                this.index_2 = photoes_2.length
            }
            this.index_2--;
            this.index_2 %= photoes_2.length;
            console.log(this.index_2)
        },

        next() {
            this.index_2++;
            this.index_2 %= photoes_2.length;
            console.log(this.index_2)
        }
    }
}

const photoes_2 = [
    {
        src: "../resources/img/thesummerpalace/1.png",
        alt: "The Summer Palace 1"
    },
    {
        src: "../resources/img/thesummerpalace/2.png",
        alt: "The Summer Palace 2"
    },
    {
        src: "../resources/img/thesummerpalace/3.png",
        alt: "The Summer Palace 3"
    }
]

createApp(Hometown_2).mount("#photo_2")