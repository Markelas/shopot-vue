import { defineStore } from 'pinia'
import axios from "axios";
export const useTextStore = defineStore('text', {
    state: () => ({
        textInfoObj : {}
    }),
    getters: {

    },
    actions: {
        async getTextInfo() { //
            try {
                this.textInfoObj = await axios.get('https://beta.shopot.ai/api/scripts/46769a')
                console.log('data', this.textInfoObj)
            } catch (error) {
                console.log(error)
            }
        },
    },
})
