import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import './slide-jsfiddle.scss';

@Component({
    template: require('./slide-jsfiddle.html'),
})
export class SlideJsFiddleComponent extends Vue {
    @Prop() slidecomp: any;
    @Prop() numbercomp: number;
    
    get getJSFiddleUrl()  {
        let url = this.slidecomp.field_jsfiddle_link[0];
        let options = this.slidecomp.field_jsfiddle_options.join();
        return url + 'embedded/' + options + '/dark/';
    }
    
    get getClass() {
        return this.numbercomp === 1 ? 'full' : (this.numbercomp === 2 ? 'half' : '');
    }

}
