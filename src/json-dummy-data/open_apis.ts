import { OpenApi } from "src/services/Apis/models/open-api.model";




export const openAPIS:OpenApi[] = [
    
        {
            id: "1",
            name: "NASA Image of the Day",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
            getUrl: "",
            apiDetailRouterURL:"/api-detail",
            category: "Aerospace",
            multiparamSelect:true,
          }
    
]