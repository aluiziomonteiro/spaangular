import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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

  constructor(private service: UserService,
              private router: Router){}

  ngOnInit() {
    this.service.list().subscribe(data => this.users = data);
  }

  edit(user: User){
    alert(JSON.stringify(user, null, 4));
  }

  remove(id: number): void{
    this.service.remove(id).subscribe(() => this.router.navigateByUrl(''));
  }

  displayedColumns: string[] = ['select', 'photo', 'data', 'edit', 'remove'];
  dataSource = new MatTableDataSource<User>(this.users);
  selection = new SelectionModel<User>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}