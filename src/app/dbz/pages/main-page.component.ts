import { Component, EventEmitter } from "@angular/core";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {
    private _dbzService: DbzService;
    constructor(public dbzService: DbzService){
        this._dbzService = dbzService;
    };
}