import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { EnumToArrayPipe } from './pipe/enum-to-array.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  declarations: [
    MenuComponent,
    FooterComponent,
    EnumToArrayPipe
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    EnumToArrayPipe
  ]
})
export class SharedModule { }
