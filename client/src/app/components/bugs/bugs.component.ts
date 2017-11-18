import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Service
import { BugsService } from '../../service/bugs.service';
import { FlashMessagesService } from 'ngx-flash-messages';

// Model
import { Bug } from '../../models/bug';
import { CRITICITE } from '../../models/criticite.enum';
import { STATUS } from '../../models/status-bug.enum';

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


  /*  constructor() { }
 
   ngOnInit() {
 
   } */
  // =======================================
  // Bug component
  // NOT USED
  // Use issues report on github instead
  // =======================================
  listBugs: Bug[] = [];
  bug: any = {};
  id_bug: number;
  currentDate;
  status_correction = STATUS;
  criticite = CRITICITE;
  numbers: any[];
  keys: any[];
  bugForm: FormGroup;
  bugFormUpdate: FormGroup;
  mode = false;
  modeUpdate = false;
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
    this.generateFormUpdate();
    this.numbers = Object.keys(this.status_correction).filter(Number);
    this.keys = Object.keys(this.criticite).filter(Number);
    this.id_bug = 0;
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
   * Check si this.id_bug set :
   * - si.id_bug === 0 : méthode Add
   * - si.id_bug !== 0 : méthode Update
   *
   * @memberof BugsComponent
   */
  addBug() {
    this.processing = true;
    this.disableForm();
    const newBug = new Bug({
      date_creation: this.bugForm.get('date_creation').value,
      criticite: this.criticite[ this.bugForm.get('criticite').value ],
      description: this.bugForm.get('description').value
    });
    console.log(newBug);

    this.bugService.addBug(newBug)
      .subscribe(
      data => {
        console.log('Bug saved');
        this.flashMessages.show('Bug ajouté', {
          classes: [ 'alert', 'alert-success' ],
          timeout: 3000
        });
        console.log(data);
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
  }

  /**
   * Update Bug
   *
   * @memberof BugsComponent
   */
  updateBug() {
    this.processing = true;
    this.disableForm();
    const newBug = new Bug({
      _id: this.bug._id,
      date_creation: this.bugFormUpdate.get('date_creation').value,
      criticite: this.bugFormUpdate.get('criticite').value,
      status_correction: this.bugFormUpdate.get('status_correction').value,
      description: this.bugFormUpdate.get('description').value
    });
    console.log(newBug);
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
    // Display ony one form
    this.mode = true;
    this.modeUpdate = false;
    this.generateForm();
    this.bug = {};
    this.id_bug = 0;
    const latest_date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.bugForm.get('date_creation').setValue(latest_date);
    this.bugForm.get('criticite').setValue('');
    this.bug.date_creation = latest_date;
  }

  /**
   * onUpdate => Display bugFormUpdate
   *
   * @param {Bug} bug
   * @memberof BugsComponent
   */
  onUpdateBug(bug: Bug) {
    // Display only one form
    this.mode = false;
    this.modeUpdate = true;
    // Set bug value
    this.generateFormUpdate();
    this.id_bug = bug._id;
    this.bug = bug;
    const latest_date = this.datePipe.transform(this.bug.date_creation, 'yyyy-MM-dd');
    this.bug.date_creation = latest_date;
    // TODO: set valeur select option input
    this.bugFormUpdate.get('description').setValue(bug.description);
    this.bugFormUpdate.get('date_creation').setValue(bug.date_creation);
    this.bugFormUpdate.get('criticite').setValue(bug.criticite);
    this.bugFormUpdate.get('status_correction').setValue(bug.status_correction);
  }

  getBugToDelete(bug: Bug) {
    this.bug = bug;
  }

  closeModal() {
    this.bug = {};
  }

  /**
   * onSuccess method
   *
   * @memberof BugsComponent
   */
  onSuccess() {
    this.generateForm();
    this.generateFormUpdate();
    this.id_bug = 0;
    this.mode = false;
    this.modeUpdate = false;
    this.processing = false;
    this.getAllBugs();
  }

  /**
   * Cancel Bug Forms
   *
   * @memberof BugsComponent
   */
  onCancel() {
    this.generateForm();
    this.generateFormUpdate();
    this.id_bug = 0;
    this.mode = false;
    this.modeUpdate = false;
    this.processing = false;
    this.bug = {};
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

  generateFormUpdate() {
    this.bugFormUpdate = this.formBuilder.group({
      status_correction: [ this.bug.status_correction, Validators.required ],
      date_creation: [ this.bug.date_creation ],
      description: [ this.bug.description, Validators.required ],
      criticite: [ this.bug.criticite, Validators.required ]
    })
  }

  /**
   * Enable controls
   *
   * @memberof BugsComponent
   */
  enableForm() {
    this.bugForm.enable();
    this.bugFormUpdate.enable();
  }

  /**
   * Disable controls
   *
   * @memberof BugsComponent
   */
  disableForm() {
    this.bugForm.disable();
    this.bugFormUpdate.disable();
  }

  /**
   * onInit:
   * - Get All Bugs
   *
   * @memberof BugsComponent
   */
  ngOnInit() {
    this.getAllBugs();
  }

}
