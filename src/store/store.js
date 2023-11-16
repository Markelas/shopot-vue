import { defineStore } from 'pinia'
import axios from "axios";
export const useTextStore = defineStore('text', {
    state: () => ({
        textInfoObj : {},
        arrayBySpeakers :[],
        isPlaying: false
    }),
    getters: {
        filterTextBySpeakers () {
            let activeSpeaker = this.textInfoObj.script[0].speaker //По умолчанию ставим первого
            let textObjectsArray = [] //Временный массив, в который мы будем складывать объекты с текстом
            let id = 0; // Id нужно для итерации в v-for
            this.textInfoObj.script.forEach((el) => { //Проходимся по всему скрипту
                if (el.speaker === activeSpeaker) { //Если спикер в итерации совпадает с прошлым
                    textObjectsArray.push(el) //Добавляем во временный массив
                } else { //Если спикер новый
                    id++
                    this.arrayBySpeakers.push({id, activeSpeaker, textObjectsArray}) //Создаём объект с данными
                    activeSpeaker = el.speaker //Обозначаем, что это новый спикер
                    textObjectsArray = []
                    textObjectsArray.push(el)
                }
            })
        },
    },
    actions: {
        async getTextInfo() { //
            try {
                const response = await axios.get('https://beta.shopot.ai/api/scripts/46769a', )
                this.textInfoObj = response.data
                await this.filterTextBySpeakers
                return this.textInfoObj
            } catch (error) {
                console.error(error)
            }
        },
        isToggleVideo() {
            console.log(this.isPlaying)
            this.isPlaying = !this.isPlaying
        }
    },
})
