import { reactive } from "vue";

export const store = reactive ({
    serchText: "",
    loading: true,
    charactersList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
})