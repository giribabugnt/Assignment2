export class PlayItem{

    constructor(public id:number=0,public title: string, public url: string , public status: string , public approved: number=0 , public likes: number=0 , public unlike: number=0,public currentStatus:string,public exitplayprogress:string ){
        
    }

}