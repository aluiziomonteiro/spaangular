import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/core/user.service';
import { User} from '../../models/user';


 @Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent{

  users: User[] = [];
  noPhoto = "./../assets/img/no-photo.png";

  constructor(private service: UserService){}

  ngOnInit() {
    this.service.listar().subscribe(data => this.users = data);
  }

  edit(user: User){
    alert(JSON.stringify(user, null, 4));
  }

  remove(user: User){
    alert("Um dia vai remover o usuário: "+user.name+"!");
  }

  displayedColumns: string[] = ['select', 'photo', 'data', 'edit', 'remove'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);

  /** Se elementos selecionados == numero de linhas. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Seleciona ou limpa os checkbox das linhas*/
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** label da caixa de seleção  */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  
}