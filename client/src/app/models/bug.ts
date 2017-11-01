// Enum bug
import { CRITICITE } from './criticite.enum';
import { STATUS } from './status-bug.enum';
/**
 * Bug Model
 * 
 * @export
 * @class Bug
 */
export class Bug {
  _id?: number;
  status_correction: STATUS;
  date_creation: Date;
  description?: string;
  criticite: CRITICITE;

  /**
   * Creates an instance of Bug.
   * @param {Object} [value={}] 
   * @memberof Bug
   */
  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}
