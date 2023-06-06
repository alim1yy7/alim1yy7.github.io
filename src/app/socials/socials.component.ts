import { ClipboardService } from 'ngx-clipboard';

import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  constructor(private clipboardService: ClipboardService) {}

  showCopyIcon = false;
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
  timeCopyIcon() {
    this.copyMailToClipBoard();
    this.showCopyIcon = true;
    setTimeout(() => {
      this.showCopyIcon = false;
    }, 370);
  }
  copyMailToClipBoard() {
    this.clipboardService.copy('christian.p.ludwig@gmail.com');
  }
}
