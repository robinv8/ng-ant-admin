import {NHttpClinet} from '@core/utils/http.client';
import {ResponseModel} from '@core/utils/ResponseModel';

/**
 * BaseService contains public crud
 */
export class BaseService {
  module: string;
  http: NHttpClinet;

  constructor(module: string, http: NHttpClinet) {
    this.module = module;
    this.http = http;
  }

  /**
   * get all the record
   * @returns {Promise<any>}
   */
  queryAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.SERVER_URL}${this.module}/all`).subscribe((response: ResponseModel) => {
        if (response.result === '00000000') {
          resolve(response.data);
        } else {
          //reject(result);
        }
      });
    });
  }

  /**
   * get record by id
   * @param {string} id
   * @returns {Promise<any>}
   */
  queryById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.SERVER_URL}${this.module}/${id}`).subscribe((response: ResponseModel) => {
        if (response.result === '00000000') {
          resolve(response.data);
        } else {
          //reject(result);
        }
      });
    });
  }

  /**
   * create an record
   * @param {Object} params
   * @returns {Promise<any>}
   */
  create(params: Object) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.http.SERVER_URL}${this.module}`, params).subscribe((response: ResponseModel) => {
        if (response.result === '00000000') {
          resolve(response.data);
        } else {
          //reject(result);
        }
      });
    });
  }

  /**
   * update an record
   * @param {string} id
   * @param params
   * @returns {Promise<any>}
   */
  update(id: string, params: any) {
    return new Promise((resolve, reject) => {
      this.http.put(`${this.http.SERVER_URL}${this.module}/${id}`, params).subscribe((response: ResponseModel) => {
        if (response.result === '00000000') {
          resolve(response.data);
        } else {
          //reject(result);
        }
      });
    });
  }

  /**
   * get paging record
   * @param {number} pageIndex
   * @param {number} pageSize
   * @returns {Promise<any>}
   */
  queryList(pageIndex: number, pageSize: number, searchParmas?: {}) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.http.SERVER_URL}${this.module}?pageNum=${pageIndex}&pageSize=${pageSize}`, searchParmas).subscribe((response: ResponseModel) => {
        if (response.result === '00000000') {
          resolve(response.data);
        } else {
          //reject(result);
        }
      });
    });
  }

  /**
   * remove an record
   * @param {string} id
   * @returns {Promise<any>}
   */
  remove(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.http.SERVER_URL}${this.module}/` + id).subscribe((response: ResponseModel) => {
        if (response.result === '00000000') {
          resolve(response.data);
        } else {
          //reject(result);
        }
      });
    });
  }
}
