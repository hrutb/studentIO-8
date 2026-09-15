import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { Istudent } from '../../model/student-model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

   IsInEditMode:boolean= false ;
  constructor(private _stdService:StudentServiceService , private _snackbar:MatSnackBar) { }
     editObj!:Istudent;
      editId!:Number;
    @ViewChild('stdForm')  stdForm!:NgForm;
  ngOnInit(): void {
      // this.IsInEditMode =true;
      this._stdService.editStdSub$.subscribe({
             next:res=>{
               if(res){
                       this.editObj = res;
                       this.stdForm.form.patchValue(this.editObj);
                       this.IsInEditMode = true;
                       this.editId =this.editObj.id;
                    }
             }
      })

  }
   onAdd(){
    if(this.stdForm.form.valid){
           let newObj = {
                 ...this.stdForm.form.value,
                  id:Date.now()
          }

          this._stdService.onCreate(newObj)
                  .subscribe({
                       next:res =>{
                           this._snackbar.open(res.msg) ;
                           this.stdForm.reset();
                       },
                       error:err=>{
                           this._snackbar.open(err);
                        }
              })
          }
       }

    onUpdate(){
               let updateId= this.editObj.id;
            let  updateObj ={
                    ...this.stdForm.form.value ,
                     id:updateId
            }
           this._stdService.onUpdate(updateObj).subscribe({
                  next:res=>{
                        this._snackbar.open(res.msg);
                        this.IsInEditMode =false ;
                        this.stdForm.reset();
                  },
                   error:err=>{
                    this._snackbar.open(err);
                    console.log(err);
                   }
           })
    }


}
