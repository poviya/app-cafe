import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseRoutingModule } from './create-course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/modules/footer/footer.module';
import { DetailsComponent } from './pages/details/details.component';
import { VideoSnapshotComponent } from './pages/video-snapshot/video-snapshot.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { AudioRecordingService } from 'src/app/services';


@NgModule({
  declarations: [
    DetailsComponent,
    VideoSnapshotComponent,
    MainComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CreateCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FooterModule
  ],
  providers: [AudioRecordingService]
})
export class CreateCourseModule { }
