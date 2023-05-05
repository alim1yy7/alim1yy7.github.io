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
      url: 'https://www.instagram.com',
    },

    {
      name: 'github',
      url: 'https://www.github.com',
    },
  ];
  openInNewTab(url: string) {
    window.open(url, '_blank')?.focus();
  }
}
