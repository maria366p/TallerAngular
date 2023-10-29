export class Serie {
    id:number;
    name:String;
    channel: String;
    seasons: number;
    description: string;
    webpage: string;
    poster: string; 

    public constructor(id:number, name:String, channel: String,seasons: number, description: string, webpage: string, poster: string ){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;;
        this.description = description;
        this.webpage = webpage;
        this.poster = poster
    }

    getid() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getchannel() {
        return this.channel;
    }

    getSeasons() {
        return this.seasons;
    }

    getDescription() {
        return this.description;
    }

    getWebPage(){
        return this.webpage;
    }

    getPoster(){
        return this.poster;
    }


}
