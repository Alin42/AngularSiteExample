import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    connectionTimeout = false

    constructor() {
        setTimeout(() => {
        console.log('Timeout is over')
        this.connectionTimeout = true
        }, 90000) // 1.5 minutes, deletes everything, exept footer
    }

    refresh() {
        window.location.reload();
    }

}