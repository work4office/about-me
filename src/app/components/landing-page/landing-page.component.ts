import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public profilePicUrl = "https://lh3.googleusercontent.com/fife/ABSRlIpFs-c_uVIX5qKNd1XjOtu74Y-odW6fQwt65IyejuNtt4UV9mT0WhB4Vl69xYus2rg3IIOtXvokN3SkODiPEq39RiKwmiRZm5KLt_39zLdEFnpVC2xbCK0avAtOMHN6ZNDXEcrfNAsmVoJUmQMCWktbTTQ_4w5LVDw5F7O0yZ6zme8w8abvKnLnsSPs246dh0AoNE9aPRErPgYWeFXdXtdyvP3JqfzL0CjYWM9QZGd5B2SGPDmDn8ea-IlIZcXWeJ_t1UgJC13dViVRlYaJ6Ub2DlstO0kbjGapMPbleiz36tWr8pM9KelsIyV90we5GEIEo8Aul3Ds0Yb26IUHqhm-ei6ynyrPNHXusYKyZEpYRKpVlJG_RdpFLaBYUGtGt5ojW0q6fFKVeXbZsmY4B1HEfmBJdQZWiBB7V7dOTntnOJd6unWaUaRgPkHT_jpnjp1Wf3TPz6bX0lOiTeygDzpY3jT9A1gFewtJrjTmJ-fRenqPXX6TiIRotbszX-PVqDA2VpQ3b_eEqNouohcmiPetgDD0_sLBh-6rmh2jXS7Z25_LUuSs29xloey_7XgxrlpcUF0PjA8AuMDfwmZR-q19AEPxZWD_m6QTcCtknvZjWAKxyU3aa0wLkUk4Pw8bql7z8aUfyo-VE9bRoRmp6eYgTJ6uS5tsVhF6yLl1KhLSbsgLYfR_B5qkpc2t5QpacxA93IicRdIbsJsuDTClW_yOOHAUGDsSN7OB69c=s915-w912-h915-no?authuser=0";
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