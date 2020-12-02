import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public profilePicUrl = "https://raw.githubusercontent.com/work4office/about-me/master/src/assets/images/IMG_20201128_185720.jpg";
  public headName = 'Ashim Chowdhury';
  public menuList = [
    { iconName:'description', menuName: 'Resume', routerLink: '' },
    { iconName:'settings', menuName: 'Skills', routerLink: 'skills' },
    { iconName:'work', menuName: 'Experience', routerLink: 'experience' },
    { iconName:'description', menuName: 'Education', routerLink: 'education' },
    { iconName:'language', menuName: 'Languages', routerLink: 'languages' },
    { iconName:'call', menuName: 'Contact', routerLink: 'contact' }
  ]
  constructor() { }

  ngOnInit() {
  }

}