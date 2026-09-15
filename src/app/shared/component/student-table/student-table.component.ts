import { Component, OnInit, Output } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { Istudent } from '../../model/student-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { EventEmitter } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  studentArr!: Istudent[];

  constructor(private _stdService: StudentServiceService, private _snackbar: MatSnackBar, private _matDialog: MatDialog , private _snackBAR : SnackbarService) { }

  @Output() emitRemoveID: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.getAll();
    console.log(this.studentArr)
  }

  getAll() {
    this._stdService.fetchAll().subscribe({
      next: res => {
        this.studentArr = res;
      },
      error: err => {
        this._snackbar.open(err, 'close', {
          duration: 3000
        })
      }
    })
  }
  editId!: number;
  onEditObj(std: Istudent) {
    this._stdService.onEdit(std);
    this.editId = std.id;
  }

  onRemove(id: number) {
    let config = new MatDialogConfig();
    config.disableClose = true;
    config.width = '900px';

    let _matDialogRef = this._matDialog.open(GetConfirmComponent);
    _matDialogRef.afterClosed().subscribe({
      next: data => {
        if (data) {
          this._stdService.onRemove(id).subscribe({
            next: data => {
              this._snackBAR.openSnackbar(data.msg)
            },
            error: err => {
              this._snackbar.open(err)
            }
          })

        }
      },
      error: err => {
        this._snackbar.open(err);
      }
    })
  }




}

