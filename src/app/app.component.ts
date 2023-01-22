import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  visibleSidebar1
  themeSelection: boolean = false;


  constructor(
    private primengConfig: PrimeNGConfig,
    @Inject(DOCUMENT) private document: Document) {
      let theme = window.localStorage.getItem('theme');
    if (theme) {
      this.themeSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themeSelection) 
    }
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
    
    changeTheme(state:boolean){
      let theme = state ? 'dark' : 'light'
      window.localStorage.setItem("theme", theme);
      let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement
      themeLink.href = 'lara-' + theme + '-blue' + '.css'
    }
  
}
