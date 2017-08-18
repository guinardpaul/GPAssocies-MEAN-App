import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Models
import { Bug } from '../models/bug';

/**
 * Set dev url accessing app/routes/ url
 */
const devUrl = 'http://localhost:3001/api/bugs/';

/**
 * 
 * @author Paul GUINARD
 * @export
 * @class BugsService
 */
@Injectable()
export class BugsService {

  /**
   * Creates an instance of BugsService.
   * @param {Http} http http module
   * @memberof BugsService
   */
  constructor(private http: Http) { }

  /**
   * Get All Bugs
   * 
   * @returns 
   * @memberof BugsService
   */
  getAllBugs() {
    return this.http.get(devUrl)
      .map(res => res.json());
  }

  /**
   * Get One Bug
   * 
   * @param {number} id bug._id
   * @returns 
   * @memberof BugsService
   */
  getOneBug(id: number) {
    return this.http.get(devUrl + id)
      .map(res => res.json());
  }

  /**
   * Add Bug
   * 
   * @param {*} bug bug body
   * @returns 
   * @memberof BugsService
   */
  addBug(bug: any) {
    return this.http.post(devUrl, bug)
      .map(res => res.json());
  }

  /**
   * Update Bug
   * 
   * @param {Bug} bug bug body
   * @returns
   * @memberof BugsService
   */
  updateBug(bug: Bug) {
    return this.http.put(devUrl + bug._id, bug)
      .map(res => res.json());
  }

  /**
   * Delete Bug
   * 
   * @param {number} id bug._id
   * @returns 
   * @memberof BugsService
   */
  deleteBug(id: number) {
    return this.http.delete(devUrl + id)
      .map(res => res.json());
  }

}
