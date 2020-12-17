/*
 * Copyright 2020 Dimpact.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {ModalModule, WidgetModule} from '@valtimo/components';
import {OpenZaakComponent} from './open-zaak.component';
import {OpenZaakRoutingModule} from './open-zaak-routing.module';
import {CommonModule} from '@angular/common';
import {OpenZaakTypeLinkExtensionComponent} from './extension/open-zaak-type-link-extension.component';
import {OpenZaakServiceTaskConnectorModalExtensionComponent} from './extension/open-zaak-service-task-connector-modal-extension/open-zaak-service-task-connector-modal-extension.component';

@NgModule({
  declarations: [
    OpenZaakComponent,
    OpenZaakTypeLinkExtensionComponent,
    OpenZaakServiceTaskConnectorModalExtensionComponent
  ],
  imports: [
    FormsModule,
    TranslateModule,
    ModalModule,
    OpenZaakRoutingModule,
    ReactiveFormsModule,
    WidgetModule,
    CommonModule
  ],
  exports: [],
  entryComponents: [
    OpenZaakTypeLinkExtensionComponent,
    OpenZaakServiceTaskConnectorModalExtensionComponent
  ]
})
export class OpenZaakModule {
}
