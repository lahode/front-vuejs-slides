import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import './slide-list.scss';

@Component({
    template: require('./slide-list.html'),
})
export class SlideListComponent extends Vue {
    @Prop() slidecomp: any;
    @Prop() numbercomp: number;
    
    get getClass() {
        return this.numbercomp === 1 ? 'full' : (this.numbercomp === 2 ? 'half' : 'small');
    }
}
