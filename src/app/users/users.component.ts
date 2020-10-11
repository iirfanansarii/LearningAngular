//below i  have just added Input and rest of thing was already present 
import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

//import is basically a decorator whic we define like we did at below line
  @Input() ans

  constructor() { }

  ngOnInit(): void {
  
}
}
