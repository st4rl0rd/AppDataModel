import { NgModule } from '@angular/core';

import { AppDataModelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AppDataModelSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AppDataModelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AppDataModelSharedCommonModule {}
