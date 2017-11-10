import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import './slide-text.scss';

@Component({
    template: require('./slide-text.html'),
})
export class SlideTextComponent extends Vue {
    @Prop() slidecomp: any;
    mounted() {
        console.log(this.slidecomp);
    }
}
