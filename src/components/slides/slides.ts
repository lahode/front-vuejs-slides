import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { SlideImageComponent } from '../slides-components/slide-image';
import { SlideImageTextComponent } from '../slides-components/slide-imagetext';
import { SlideJsFiddleComponent } from '../slides-components/slide-jsfiddle';
import { SlideLinkComponent } from '../slides-components/slide-link';
import { SlideListComponent } from '../slides-components/slide-list';
import { SlideTextComponent } from '../slides-components/slide-text';

import './slides.scss';

@Component({
    template: require('./slides.html'),
    components: {
        appSlideImage: SlideImageComponent,
        appSlideImage_text: SlideImageTextComponent,
        appSlideJsfiddle: SlideJsFiddleComponent,
        appSlideLink: SlideLinkComponent,
        appSlideList: SlideListComponent,
        appSlideText: SlideTextComponent,
    }
})
export class SlidesComponent extends Vue {
    @Prop() slide: any;
    @Prop() index: number;

    currentSlide: number = 0;
    slideComponents: any[] = [];
    slideComponentsName: any[] = [];
    
    get slideID() {
        return 'slide-' + this.index;
    }

    get countComp() {
        return this.slideComponents.length;
    }

    mounted() {
        if (this.slide && this.slide.hasOwnProperty('components')) {
            this.slide.components.map((component: any) => {
                let componentType = Object.keys(component)[0];
                let componentName = 'appSlide' + this.capitalize(componentType);
                this.slideComponents.push(component[componentType]);
                this.slideComponentsName.push(componentName);
            });
        }
    }

    capitalize(text: String) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}
