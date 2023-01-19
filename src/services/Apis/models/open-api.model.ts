export class OpenApi {
    
    public id:string;
    public apiDetailRouterURL:string;
    public getUrl:string;
    public categories:string; 
    public name:string;
    public src:string;
    public multiparamSelect:boolean;
    
    
    constructor(id:string,multiparamSelect:boolean, apiDetailRouterURL:string,name:string,src:string,description:string,categories:string,getUrl:string)
    {
        this.id = id;
        this.apiDetailRouterURL = apiDetailRouterURL;
        this.name = name;
        this.src = src;
        this.getUrl = getUrl;
        this.categories = categories;
        this.multiparamSelect = multiparamSelect;    
    }

}
