import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import './slide-image.scss';

@Component({
    template: require('./slide-image.html'),
})
export class SlideImageComponent extends Vue {
    @Prop() slidecomp: any;
    @Prop() numbercomp: number;

    getClass() {
        switch (this.slidecomp.field_image_size[0]) {
            case 'right':
                return 'col-md-4';
            default:
                return 'col-md-12';
        }
     }

}
