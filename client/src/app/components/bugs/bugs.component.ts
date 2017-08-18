import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Service
import { BugsService } from '../../service/bugs.service';
import { FlashMessagesService } from 'ngx-flash-messages';

// Model
import { Bug } from '../../models/bug';
import { CRITICITE } from '../../models/criticite.enum';

/**
 * 
 * @author Paul GUINARD
 * @export
 * @class BugsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: [ './bugs.component.css' ]
})
export class BugsComponent implements OnInit {
  listBugs: Bug[] = [];
  bug: any = {};
  bug_id: number = 0;
  currentDate;
  criticite = CRITICITE;
  keys: any[];
  bugForm: FormGroup;
  mode = false;
  processing = false;

  /**
   * Creates an instance of BugsComponent.
   * @param {BugsService} bugService bug service
   * @param {FlashMessagesService} flashMessages Angular flash message service
   * @param {FormBuilder} formBuilder reactive forms builder
   * @param {DatePipe} datePipe format date
   * @memberof BugsComponent
   */
  constructor(
    private bugService: BugsService,
    private flashMessages: FlashMessagesService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.generateForm();
    this.keys = Object.keys(this.criticite).filter(Number);
  }

  /**
   * Get All Bugs
   * 
   * @memberof BugsComponent
   */
  getAllBugs() {
    this.bugService.getAllBugs()
      .subscribe(
      data => this.listBugs = data,
      error => console.log('Erreur :' + error)
      );
  }

  /**
   * Add Bug
   * Check si this.bug_id set :
   * - si bug_id === 0 : méthode Add
   * - si bug_id !== 0 : méthode Update
   * 
   * @memberof BugsComponent
   */
  addBug() {
    this.processing = true;
    this.disableForm();
    let newBug = this.bugForm.value;
    newBug.date_creation = this.bugForm.get('date_creation').value;
    newBug.criticite = this.criticite[ this.bugForm.get('criticite').value ];
    console.log(newBug);
    // Check if bug._id set
    if (this.bug_id === 0) {
      this.bugService.addBug(newBug)
        .subscribe(
        data => {
          console.log('Bug saved');
          this.flashMessages.show('Bug ajouté', {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          this.onSuccess();
        }, err => {
          console.log('Erreur :' + err);
          this.flashMessages.show('Erreur suppresion Bug', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
          this.enableForm();
        }
        );
    } else {
      this.bugService.updateBug(newBug)
        .subscribe(
        data => {
          console.log('Bug updated');
          this.flashMessages.show('Bug modifié', {
            classes: [ 'alert', 'alert-success' ],
            timeout: 3000
          });
          this.onSuccess();
        }, err => {
          console.log('Erreur :' + err);
          this.flashMessages.show('Erreur modification Bug', {
            classes: [ 'alert', 'alert-danger' ],
            timeout: 3000
          });
          this.enableForm();
        });
    }
  }

  /**
   * Delete Bug
   * 
   * @param {number} id bug._id
   * @memberof BugsComponent
   */
  deleteBug(id: number) {
    this.bugService.deleteBug(id)
      .subscribe(
      data => {
        console.log('Bug deleted');
        this.flashMessages.show('Bug supprimé', {
          classes: [ 'alert', 'alert-warning' ],
          timeout: 3000
        });
        this.onSuccess();
      }, err => console.log('Erreur :' + err)
      );
  }

  /**
   * Display bugForm
   * 
   * @memberof BugsComponent
   */
  onAdd() {
    this.generateForm();

    let date = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.bugForm.get('date_creation').setValue(date);
    this.mode = true;
  }

  /**
   * onUpdate => Display bugForm
   * 
   * @param {Bug} bug 
   * @memberof BugsComponent
   */
  onUpdateBug(bug: Bug) {
    this.generateForm();
    this.bug_id = bug._id;
    this.bug = bug;
    this.mode = true;
  }

  /**
   * onSuccess method
   * 
   * @memberof BugsComponent
   */
  onSuccess() {
    this.bug_id = 0;
    this.mode = false;
    this.getAllBugs();
  }

  /**
   * Generate reactive bug form
   * 
   * @memberof BugsComponent
   */
  generateForm() {
    this.bugForm = this.formBuilder.group({
      date_creation: [ this.bug.date_creation ],
      description: [ this.bug.description, Validators.required ],
      criticite: [ this.bug.criticite, Validators.required ]
    });
  }

  /**
   * Enable controls
   * 
   * @memberof BugsComponent
   */
  enableForm() {
    this.bugForm.enable();
  }

  /**
   * Disable controls
   * 
   * @memberof BugsComponent
   */
  disableForm() {
    this.bugForm.disable();
  }

  /**
   * onInit:
   * - Get All Bugs
   * 
   * @memberof BugsComponent
   */
  ngOnInit() {
    this.getAllBugs();
    this.currentDate = Date.now;
  }

}
