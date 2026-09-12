export interface Istudent{
            fname: string;
            lname: string;
            city: string;
            email: string;
            contact: string;
            isActive: boolean;
            id: number;
}

export interface Iresponse<T>{
        msg:string ,
        data:T
     }


     