import { reactive } from "vue"; //importo il pacchetto vue

export const store = reactive({
        apiBaseUrl:'http://127.0.0.1:8000/api',
        imgBasePath:'http://127.0.0.1:8000/storage/',
});