import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

import './home-slide.scss';

@Component({
    template: require('./home-slide.html')
})
export class HomeSlideComponent extends Vue {
    @Prop() slide: any;

    hideMe() {
        this.$emit('hideme', true);
    }  
}