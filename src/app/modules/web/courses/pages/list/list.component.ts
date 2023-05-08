import { Component, Input, OnInit } from '@angular/core';
import { Tools } from 'src/app/common/tools';
import { Post } from 'src/app/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() courses: any = [];
  @Input() loading = false;
  @Input() totalPages: any;

  postLoading: string[] = ["hola", "que"];  // puede ser cualquier valor 

  constructor() { }

  ngOnInit(): void {
  }

  prinImages(images: any) {
    if (images[0].type == 'video') {
      return images[0]['urlSnapshot'];
    } else {
      return images[0]['url'];
    }

  };

  textMessage(post: Post) {
    // quiero hacerte darte en cuatro
    // quiero besarte toda
    // quiero hacerte genir rico
    // quiero penetrarte rico
    // estoy caliente quiero hacerte rico
    // me gustaría hacer le delicioso contigo
    return "Hola, acabo de ver el producto, "
      + Tools.cropText(post.title!, 25) + '(...)' +
      ",  quiero mas información."
      + " https://celccar.com/product/" + post.slug;
  }
}
