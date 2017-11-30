import Vue from 'vue';
import axios from 'axios';

import Component from 'vue-class-component';

import { SlidesComponent } from '../slides';
import { HomeSlideComponent } from '../home-slide';

import './app.scss';

@Component({
    template: require('./app.html'),
    components: {
      appSlides : SlidesComponent,
      appHomeSlide : HomeSlideComponent
    },
})
export class AppComponent extends Vue {
    slides: any[] = [];
    slideEnter: string = 'slide-left';
    slideLeave: string = 'slide-right';
    currentSlide: number = 0;
    presentations: any[] = [];
    homeSlide: any = null;
    showHomeSlide: boolean = true;
    currentPresentation: number;
    endpoint: any = process.env.ENDPOINT;

    // Created lifecyclehook
    created() {
        this.endpoint = this.endpoint;
        this.fetchAllSlideshow();
    }

    changeSlideshow() {
        axios.get(this.endpoint + 'slides/' + this.currentPresentation)
            .then(response => {
                this.currentSlide = 0;
                this.slides = response.data;
            });
        this.presentations.map((presentation: any) => {
            if (presentation.id === this.currentPresentation) {
                this.homeSlide = presentation;
            }
        });
        this.showHomeSlide = true;
    }

    fetchAllSlideshow() {
        axios.get(this.endpoint + 'slideshow')
            .then(response => {
                this.presentations = response.data;
                if (this.presentations.length > 0) {
                    this.currentPresentation = this.presentations[0].id;
                    this.homeSlide = this.presentations[0];
                    this.changeSlideshow();
                }
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

    hideHomeSlide(event) {
        this.showHomeSlide = !event;
    }
}
