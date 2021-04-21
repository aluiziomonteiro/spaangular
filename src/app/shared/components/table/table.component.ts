import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { Modal } from '../../models/modal';
import { User} from '../../models/user';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent{

  users: User[] = [];
  user: User;

  noPhoto = "https://imperialtecnologia.com.br/images/sem_foto.png";

  constructor(private service: UserService,
              private router: Router,
              public dialog: MatDialog){}

  ngOnInit() {
    this.service.list().subscribe(data => this.users = data);
  }

  edit(user: User){
    this.router.navigateByUrl('editar/' + user.id);
  }

  remove(user: User): void{
    const config = {
      data: {
        title: 'Atenção!',
        description: 'Tem certeza que deseja remover \"'+ user.name + '\"?',
        bSuccess: 'Remover registro',
        bSuccessColor:"warn",
        hasBtnCancel: true,
      } as Modal
    };

    const dialogRef = this.dialog.open(ModalComponent, config);

    dialogRef.afterClosed().subscribe((option: boolean) => {
      if(option){
        this.service.remove(user.id).subscribe(); 
        const dialogRef = this.dialog.open(ModalComponent);
        dialogRef.afterClosed().subscribe(() => window.location.reload());
      } 
    });
  }

  displayedColumns: string[] = ['select', 'photo', 'data', 'edit', 'remove'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);

  private isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  public checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}