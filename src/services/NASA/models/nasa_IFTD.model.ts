export class nasa_IFTD
{
    public copyright : string;
    public date : string;
    public explanation: string;
    public hdurl: string;
    public media_type:string;
    public service_version:string;
    public title: string;
    public url: string;

    constructor(copyright : string, date : string,
        explanation : string, hdurl : string,
         media_type : string, service_version : string, title : string, url : string)
         {
            this.copyright = copyright;
            this.date = date;
            this.explanation = explanation;
            this.hdurl = hdurl;
            this.media_type = media_type;
            this.service_version = service_version;
            this.title = title;
            this.url = url;
         }
}