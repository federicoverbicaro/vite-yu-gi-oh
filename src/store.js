import { reactive } from "vue";

export const store = reactive ({
    serchText: "",
    loading: true,
    charactersList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    ArrayArctypeCard: [],
    ApiArctypeCard: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    selezioneArctype: '',
})