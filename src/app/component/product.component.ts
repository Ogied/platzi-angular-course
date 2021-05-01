import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('constructor 1');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('on changes 2');
    //     console.log(changes);
    // }

    ngOnInit() {
        console.log('NgOnInit 3');
    }

    ngDoCheck() {
        console.log('NgDoCheck 4');
    }

    ngOnDestroy() {
        console.log('destroyed 5');
    }

    addToCart() {
        console.log('item added to cart');
        this.productClicked.emit(this.product.id);
    }
}