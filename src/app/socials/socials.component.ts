import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  socialAccounts = [
    {
      name: 'instagram',
      url: 'https://www.instagram.com/chrisl18_03/',
    },

    {
      name: 'github',
      url: 'https://github.com/alim1yy7/',
    },
  ];
  openInNewTab(url: string) {
    window.open(url, '_blank')?.focus();
  }
}
