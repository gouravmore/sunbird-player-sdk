import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreEventsHelperService } from '../../services/core-events-helper.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() title: string;
  @Input() config = {
    showShare: true,
    showDownload: true,
    showReplay: true,
    showExit: true
  };
  @Output() sidebarEvent = new EventEmitter<any>();
  showDownloadPopUp = false;

  constructor(public coreEventsHelperService: CoreEventsHelperService, public ref: ChangeDetectorRef) {}
  closeNav() {
    const inputChecked = document.getElementById('overlay-input') as HTMLInputElement;
    inputChecked.checked = false;
    const pdfPlayerSideMenuDiv = document.getElementById('pdfPlayerSideMenu') as HTMLElement;
    pdfPlayerSideMenuDiv.style.visibility = 'hidden';
    document.querySelector<HTMLElement>('.navBlock').style.marginLeft = '-100%';
    this.sidebarEvent.emit('CLOSE_MENU');
  }

  showDownloadPopup() {
    this.showDownloadPopUp = true;
    this.ref.detectChanges();
    this.sidebarEvent.emit('DOWNLOAD_MENU');
  }

  hideDownloadPopUp() {
    this.showDownloadPopUp = false;
    this.ref.detectChanges();
  }

}
