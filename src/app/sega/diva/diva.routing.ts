import {RouterModule, Routes} from '@angular/router';
import {DivaProfileComponent} from './diva-profile/diva-profile.component';
import {DivaRecentComponent} from './diva-recent/diva-recent.component';
import {DivaSettingComponent} from './diva-setting/diva-setting.component';
import {DivaPvRecordComponent} from './diva-pv-record/diva-pv-record.component';
import {DivaRecordDetailComponent} from './diva-record-detail/diva-record-detail.component';
import {DivaModulesComponent} from './diva-modules/diva-modules.component';
import {DivaCustomizeComponent} from './diva-customize/diva-customize.component';
import {DivaPvlistComponent} from './diva-pvlist/diva-pvlist.component';

const routes: Routes = [
  {path: 'profile', component: DivaProfileComponent},
  {path: 'record', component: DivaPvRecordComponent},
  {path: 'record/:pvId', component: DivaRecordDetailComponent},
  {path: 'recent', component: DivaRecentComponent},
  {path: 'setting', component: DivaSettingComponent},
  {path: 'modules', component: DivaModulesComponent},
  {path: 'customizes', component: DivaCustomizeComponent},
  {path: 'pv', component: DivaPvlistComponent},
];

export const DivaRoutes = RouterModule.forChild(routes);
