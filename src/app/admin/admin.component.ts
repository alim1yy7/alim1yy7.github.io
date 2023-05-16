import { concatMap, from, toArray } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';
import { slideInOutAnimation } from 'src/app/shared/animations/slide-in-out.animation';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ApiService } from 'src/app/shared/services/api.service';

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [fadeInOutAnimation, slideInOutAnimation],
})
export class AdminComponent {
  @ViewChild('username') username: any;
  @ViewChild('password') password: any;
  @ViewChild('list') list!: ElementRef;
  @ViewChild('addInfoWrapper') addInfoWrapper!: ElementRef;
  @ViewChild('adminCard') adminCard!: ElementRef;

  constructor(public adminService: AdminService, private api: ApiService) {}

  paths: string[] = [
    'artists',
    'concerts',
    'contacts',
    'gallery',
    'home',
    'music',
  ];

  pathEntities: string[] = [
    'Artist',
    'Concert',
    'Contact',
    'Song',
    'Home-Slide',
    'Song',
  ];

  infos: any[] = [];
  editMode = false;
  entityIndex = -1;
  columnIndex = -1;
  propertyIndex = -1;

  addMode = false;
  addIndex = -1;

  deleteMode = false;
  deleteIndex = -1;

  loginError = false;
  loginErrorMessage = '';

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  ngOnInit() {
    this.loginForm.valueChanges.subscribe({
      next: (value) => {
        if (this.loginError) this.loginError = false;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  ngAfterViewInit() {
    // Setzt den Cursor an das Ende des Textes, wenn das Input-Element fokussiert wird
    this.username.nativeElement.addEventListener('focus', () => {
      this.username.nativeElement.selectionStart =
        this.username.nativeElement.selectionEnd =
          this.username.nativeElement.value.length;
    });

    this.password.nativeElement.addEventListener('focus', () => {
      this.password.nativeElement.selectionStart =
        this.password.nativeElement.selectionEnd =
          this.password.nativeElement.value.length;
    });
  }

  getObjectKeys = Object.keys;

  faEdit = faEdit;
  faCheck = faCheck;
  faXmark = faXmark;
  faPlus = faPlus;
  faTrashCan = faTrashCan;

  submit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    this.api.postData('user/login', { username, password }).subscribe({
      next: (response) => {
        this.adminService.isAdmin = true;
        this.getData();
      },
      error: (error) => {
        this.loginErrorMessage = error.error.message;
        this.loginError = true;
      },
    });
  }

  createAdmin() {
    //const username = this.loginForm.controls.username.value;
    //const password = this.loginForm.controls.password.value;
    // this.api.postData('user', { username, password, admin: true }).subscribe(
    //   (response) => {
    //     this.adminService.isAdmin = true;
    //     this.getData();
    //   },
    //   (error) => {
    //     this.loginErrorMessage = error.error.message;
    //     this.loginError = true;
    //   }
    // );
    // this.loginForm.reset();
  }

  getData(): void {
    from(this.paths)
      .pipe(
        concatMap((path) => this.api.getData(path)),
        toArray()
      )
      .subscribe({
        next: (data) => {
          this.infos = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  onEditIconClick(
    pElement: HTMLParagraphElement,
    entityIndex: number,
    columnIndex: number,
    propertyIndex: number
  ) {
    pElement.contentEditable = 'true';
    pElement.focus();

    this.editMode = true;
    this.entityIndex = entityIndex;
    this.columnIndex = columnIndex;
    this.propertyIndex = propertyIndex;

    // Disable editing and remove the event listener
  }

  onEditConfirm(
    pElement: HTMLParagraphElement,
    entityIndex: number,
    columnIndex: number,
    propertyIndex: number
  ) {
    const id = this.infos[entityIndex][columnIndex].id;

    const key =
      this.list.nativeElement.children[entityIndex].children[columnIndex + 1]
        .children[propertyIndex].children[0].innerText;
    const trimmedKey = key.substring(0, key.length - 1).trim();

    const newValue =
      this.list.nativeElement.children[entityIndex].children[columnIndex + 1]
        .children[propertyIndex].children[1].innerText;

    const data = this.infos[entityIndex][columnIndex];
    const newData = { ...data, [trimmedKey]: newValue };

    this.api.putData(this.paths[entityIndex], newData, id).subscribe({
      next: (response) => {
        console.log('Updated successfully');
        this.getData();
      },
      error: (error) => {
        console.error('Error while updating:', error);
        alert('Error while updating. Maybe the text is too long?');
      },
    });

    pElement.contentEditable = 'false';
    this.editMode = false;
    this.entityIndex = -1;
    this.columnIndex = -1;
    this.propertyIndex = -1;
  }

  onEditCancel(
    pElement: HTMLParagraphElement,
    entityIndex: number,
    columnIndex: number,
    propertyIndex: number
  ) {
    const key =
      this.list.nativeElement.children[entityIndex].children[columnIndex + 1]
        .children[propertyIndex].children[0].innerText;
    const trimmedKey = key.substring(0, key.length - 1).trim();
    this.list.nativeElement.children[entityIndex].children[
      columnIndex + 1
    ].children[propertyIndex].children[1].innerText =
      this.infos[entityIndex][columnIndex][trimmedKey];
    pElement.contentEditable = 'false';
    this.editMode = false;
    this.entityIndex = -1;
    this.columnIndex = -1;
    this.propertyIndex = -1;
  }

  addNewEntity(addIndex: number) {
    this.addIndex = addIndex;
    this.addMode = true;
    this.deleteMode = false;
    this.deleteIndex = -1;
  }

  onAddCancel() {
    this.addMode = false;
    this.addIndex = -1;
  }

  onAddConfirm() {
    const htmlCollection: HTMLDivElement[] =
      this.addInfoWrapper.nativeElement.children;
    const properties = Array.from(htmlCollection); // Konvertierung zu Array

    const newData: any = {};

    properties.forEach((property: HTMLDivElement) => {
      if (property.style.display !== 'none') {
        const key = property.children[0].children[0].textContent;
        const trimmedKey = key!.substring(0, key!.length - 1).trim();
        const value = property.children[0].children[1].textContent;

        newData[trimmedKey] = value;
      }
    });

    this.api.postData(this.paths[this.addIndex], newData).subscribe({
      next: (response) => {
        console.log('Added successfully!');
        this.getData();
      },
      error: (error) => {
        console.error('Error while adding:', error);
        alert('Error while adding!');
      },
    });

    this.onAddCancel();
  }

  startDeleteMode(entityIndex: number) {
    if (this.deleteMode && entityIndex === this.deleteIndex) {
      this.deleteMode = false;
      this.deleteIndex = -1;
      return;
    }
    this.deleteMode = true;
    this.deleteIndex = entityIndex;
    this.onAddCancel();
  }

  delete(entityIndex: number, columnIndex: number) {
    const id = this.infos[entityIndex][columnIndex].id;
    this.api.deleteData(this.paths[entityIndex], id).subscribe({
      next: (response) => {
        console.log('Deleted successfully!');
        this.getData();
      },
      error: (error) => {
        console.error('Error while deleting:', error);
        alert('Error while deleting!');
      },
    });

    this.deleteMode = false;
    this.deleteIndex = -1;
  }
}
