export class OpenApi {
    
    public id:string;
    public apiDetailRouterURL:string;
    public getUrl:string;
    public category:string; 
    public name:string;
    public src:string;
    public multiparamSelect:boolean;
    
    
    constructor(id:string,multiparamSelect:boolean, apiDetailRouterURL:string,name:string,src:string,description:string,category:string,getUrl:string)
    {
        this.id = id;
        this.apiDetailRouterURL = apiDetailRouterURL;
        this.name = name;
        this.src = src;
        this.getUrl = getUrl;
        this.category = category;
        this.multiparamSelect = multiparamSelect;    
    }

}
