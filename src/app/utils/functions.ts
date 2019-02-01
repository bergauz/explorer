import {Subscription} from 'rxjs';


// declare const window: any;

/**
 * clears array from subscriptions
 * @param {Array<Subscription>} arr
 */
export function unsubArr(arr: Array<Subscription>) {
  arr.forEach(item => item.unsubscribe());
}

/**
 * recursively checks object keys
 * @param obj
 * @param keys
 */
export function objHas(obj: any, keys: string): boolean {
  return !!keys.split('.').reduce((acc, key) => acc.hasOwnProperty(key) ? (acc[key] || 1) : false, obj);
}

/**
 *
 */

/*export async function isPrivateMode() {
  const firefoxBrowser = navigator.userAgent.search(/Firefox/);
  const chromeBrowser = navigator.userAgent.search(/Chrome/);
  const operaBrowser = navigator.userAgent.search(/OPR/);
  const IEBrowser = navigator.userAgent.search(/NET/);
  const requestFS = (<any>window).RequestFileSystem || (<any>window).webkitRequestFileSystem;

  if (chromeBrowser > 0 || operaBrowser > 0 && requestFS) {
    const prom = new Promise (resolve => {
      requestFS((<any>window).TEMPORARY, 100, (fs) => {}, (err) => {
        resolve(true);
      });
    });
    const res = await prom;
    return res;
  }

  if (firefoxBrowser > 0) {
    console.log('isFirefox');
    const db = indexedDB.open('test');
    const prom = new Promise(resolve => {
      db.onerror = () => {
        resolve(true);
      };
    });
    const res = await prom;
    return res;
  }

  if (IEBrowser > 0 && !window.indexedDB && ((<any>window).PointerEvent || (<any>window).MSPointerEvent)) {
      const prom = new Promise(resolve => resolve(true));
      const res = await prom;
      return res;
  }
  // others
  return false;
}*/
/*let bool;
export function isPrivateMode() {

  const firefoxBrowser = navigator.userAgent.search(/Firefox/) > -1;
  const chromeBrowser = navigator.userAgent.search(/Chrome/) > -1;
  const operaBrowser = navigator.userAgent.search(/OPR/) > -1;
  const IEBrowser = navigator.userAgent.search(/NET/) > -1;
  const requestFS = (<any>window).RequestFileSystem || (<any>window).webkitRequestFileSystem;

  if (chromeBrowser || operaBrowser && requestFS) {
    requestFS((<any>window).TEMPORARY, 100, () => change(false), () => change(true));
    return bool ? true : false;
  }
}

function change(state: boolean) {
  bool = state;
  return bool;
}*/
