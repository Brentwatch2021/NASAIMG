//To specify the response object type, 
// first define an interface with the
//  required properties. Use an interface
//  rather than a class, because the response
// is a plain object that cannot be automatically converted to an instance of a class.
// From the Angular Docs https://angular.io/guide/http#requesting-a-typed-response


export interface NasaIFTD {
    copyright:string;
    date:string;
    explanation:string;
    hdurl: string;
    media_type:string;
    service_version:string;
    title: string;
    url: string;
}
