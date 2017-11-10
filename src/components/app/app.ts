import Vue from 'vue';
import axios from 'axios';

import Component from 'vue-class-component';
import { SlidesComponent } from '../slides';

import './app.scss';

@Component({
    template: require('./app.html'),
    components: {
      appSlides : SlidesComponent
    }
})
export class AppComponent extends Vue {
    slides: any[] = [];
    slideEnter: string = 'slide-left';
    slideLeave: string = 'slide-right';
    currentSlide: number = 0;
    endpoint: any = process.env.ENDPOINT;

    // Created lifecyclehook
    created() {
        console.log(this.endpoint)
        this.fetchSlides();
    }

    fetchSlides() {
        axios.get(this.endpoint)
            .then(response => {
                this.slides = response.data;
            });
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.slideEnter = 'slide-right';
            this.slideLeave = 'slide-left';
            this.currentSlide--;
        }
        return null;
    }
    
    nextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
            this.slideEnter = 'slide-left';
            this.slideLeave = 'slide-right';
            this.currentSlide++;
        }
        return null;
    }    
}
