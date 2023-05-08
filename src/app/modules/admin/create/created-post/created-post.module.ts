import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedPostRoutingModule } from './created-post-routing.module';
import { DetailsComponent } from './pages/details/details.component';
import { VideoSnapshotComponent } from './pages/video-snapshot/video-snapshot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { AudioRecordingService } from 'src/app/services';
import { FooterModule } from 'src/app/modules/footer/footer.module';

@NgModule({
  declarations: [
    DetailsComponent,
    VideoSnapshotComponent,
    MainComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CreatedPostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ],
  providers: [AudioRecordingService]
})
export class CreatedPostModule { }
