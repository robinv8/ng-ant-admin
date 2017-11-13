import {HttpClient} from '@angular/common/http';

/**
 * BaseService contains public crud
 */
export class BaseService {
  apiPath = 'http://www.easy-mock.com/mock/5a011b579d3ceb4a354379db';
  module: string;
  http: HttpClient;

  constructor(module: string) {
    this.module = module;
  }

  /**
   * get all the record
   * @returns {Promise<any>}
   */
  queryAll() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiPath}${this.module}/all`).subscribe((result: any) => {
        if (result.code === 1) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    })
    return promise;
  }

  /**
   * get record by id
   * @param {string} id
   * @returns {Promise<any>}
   */
  queryById(id: string) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiPath}${this.module}/${id}`).subscribe((result: any) => {
        if (result.code === 1) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    })
    return promise;
  }

  /**
   * create an record
   * @param {Object} params
   * @returns {Promise<any>}
   */
  create(params: Object) {
    const promise = new Promise((resolve, reject) => {
      this.http.post(`${this.apiPath}${this.module}`, params).subscribe((result: any) => {
        if (result.code === 1) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    })
    return promise;
  }

  /**
   * update an record
   * @param {string} id
   * @param params
   * @returns {Promise<any>}
   */
  update(id: string, params: any) {
    const promise = new Promise((resolve, reject) => {
      this.http.put(`${this.apiPath}${this.module}/${id}`, params).subscribe((result: any) => {
        if (result.code === 1) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
    return promise;
  }

  /**
   * get paging record
   * @param {number} pageIndex
   * @param {number} pageSize
   * @returns {Promise<any>}
   */
  queryList(pageIndex: number, pageSize: number) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${this.apiPath}${this.module}?pageIndex=${pageIndex}&pageSize=${pageSize}`).subscribe((result: any) => {
        if (result.code === 1) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
    return promise;
  }

  /**
   * remove an record
   * @param {string} id
   * @returns {Promise<any>}
   */
  remove(id: string) {
    const promise = new Promise((resolve, reject) => {
      this.http.delete(`${this.apiPath}${this.module}/` + id).subscribe((result: any) => {
        if (result.code === 1) {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
    return promise;
  }
}
