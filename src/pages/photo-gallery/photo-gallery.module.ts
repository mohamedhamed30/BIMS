import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoGalleryPage } from './photo-gallery';

@NgModule({
  declarations: [
    PhotoGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoGalleryPage),
  ],
})
export class PhotoGalleryPageModule {}
