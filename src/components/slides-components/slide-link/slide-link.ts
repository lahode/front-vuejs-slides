import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import './slide-link.scss';

@Component({
    template: require('./slide-link.html'),
})
export class SlideLinkComponent extends Vue {
    @Prop() slidecomp: any;
    @Prop() numbercomp: number;
    
    get getClass() {
        return this.numbercomp === 1 ? 'full' : (this.numbercomp === 2 ? 'half' : '');
    }

}
