import Dom7 from "dom7";
var $$ = Dom7;
export interface Popup {
  on(event: string, handler: Function): any;
  open(animate?: boolean): void;
  close(animate?: boolean): void;
  destroy(): void;
}

export enum LOCAL_STORAGE_ITEMS {
LOGGED_USER = 'loggedUser'
}

export const DUMMY_USER = 'debug';

export class DomUtils {
  static clearFormInputFields(selector: string): void {
    var firstEl;
    $$("input"+selector).forEach((e) => {
      if($$(e).attr('type') === 'checkbox') {
        $$(e).prop('checked', false);
      } else {
        $$(e).val('');
      }
      firstEl = e;
    });
  }

  static showAlertDialog(innerHTML: string, title: string, callback?: Function): void {
    window.f7.dialog.alert(innerHTML, title, callback);
  }

  static createPopup(innerHTML: string, title: string, closeText: string): Popup {
    let popup = window.f7.popup.create({
      content: /*html*/`
        <div class="popup">
          <div class="page">
            <div class="navbar">
              <div class="navbar-bg"></div>
              <div class="navbar-inner">
                <div class="title">${title}</div>
                <div class="right"><a href="#" class="link popup-close">${closeText}</a></div>
              </div>
            </div>
            <div class="page-content">
              <div class="block">
                ${innerHTML}
              </div>
            </div>
          </div>
        </div>
      `,
      swipeToClose: true,
    });
    popup.on('close'), () => {
      popup.destroy();
    }
    return popup;
  }
}