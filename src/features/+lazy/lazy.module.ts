import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-lazy',
    template: `<h3>Hey, i'm lazy</h3>`
})
export class LazyComponent { }

@NgModule({
    declarations: [LazyComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: LazyComponent, pathMatch: 'full' }
        ])
    ]
})
export class LazyModule {

}
