import { Injectable } from '@angular/core';
import { Iresponse, Istudent } from '../model/student-model';
import { students } from '../const/studentArr';
import { Observable, of, Subject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
studentArr:Istudent[] = students;


  constructor() { }

 fetchAll():Observable<Istudent[]>{
     return of(this.studentArr);
   }


onCreate(student:Istudent) :Observable<Iresponse<Istudent>>{
        this.studentArr.unshift(student);
        return of({
                msg:'New student added successfully',
                data:student
            })
  }

editStdSub$ = new Subject<Istudent>();

      onEdit(student:Istudent){
         this.editStdSub$.next(student);
      }


      onUpdate(updatedObj:Istudent):Observable<Iresponse<Istudent>>{
             let getIndex = this.studentArr.findIndex(ele=>ele.id===updatedObj.id)
            this.studentArr[getIndex]= updatedObj;
            return of({
                    msg:"Student is updated successfully",
                    data:updatedObj
               })
      }

       onRemove(removeId:number):Observable<Iresponse<Istudent>>{
          let getIndex=this.studentArr.findIndex(ele=>ele.id===removeId)

          let removeOBj=this.studentArr.splice(getIndex,1);
                 return of({
                      msg : `Student is id ${removeId} is deleted form database successfully..!`,
                     data : removeOBj[0]
                   })
         }

}
