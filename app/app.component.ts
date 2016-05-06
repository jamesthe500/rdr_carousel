/**
 * Created by jamesddaniels on 5/6/16.
 */
import {Component} from 'angular2/core';

//import our carousel component
import {CSSCarouselComponent} from './carousel.component';

//@Component decorator
@Component({
    //tag
    selector: 'my-app',
    //templage
    template: `
    <div class="wrapper">
    <css-carousel></css-carousel>
    </div>
    `,
    //css
    styles: [`
    .wrapper{
    width: 60%;
    margin: 60px auto;
    }
    `],
    //tell angular we are using the css-carousel
    directives: [CSSCarouselComponent]
})
//actual class
export class AppComponent { }