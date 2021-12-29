import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
const materialComponents = [MatToolbarModule,
  MatMenuModule,
  MatButtonModule,MatIconModule,
  MatSidenavModule,MatDividerModule,MatListModule,MatCardModule,MatInputModule
  
];
@NgModule({
  imports: [ materialComponents
  ],
  exports:[materialComponents]
})
export class MaterialModule { }
