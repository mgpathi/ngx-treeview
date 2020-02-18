import {Component} from '@angular/core';
import {TreeviewI18n} from '../lib/treeview-i18n';
import {I18n} from './i18n';
import {DefaultTreeviewI18n} from './default-treeview-i18n';

@Component({
    selector: 'ngx-app',
    template: `
<div class="container">
    <h2>Angular ngx-treeview component demo</h2>
    <hr />
    <br />
    <!--<div class="row">
        <label for="item-category" class="col-3 col-form-label">Language</label>
        <div class="col-9">
            <select class="form-control" [(ngModel)]="language">
                <option value="en">
                    English
                </option>
                <option value="vi">
                    Tiếng Việt
                </option>
            </select>
        </div>
    </div>
    <hr>
    <h4>Example 1: Primary features</h4>
    <ngx-book></ngx-book>
    <br />
    <h4>Example 2: Performance with 1000 items</h4>
    <ngx-room></ngx-room>
    <br />
    <h4>Example 3: Using pipe & i18n</h4>
    <ngx-city></ngx-city>
    <br />-->
    <h4>Example 4: Tree-view without drop-down & custom TreeviewConfig & custom TreeviewEventParser & custom template</h4>
    
    <ngx-product></ngx-product>
</div>
  `,
    providers: [
        // { provide: TreeviewI18n, useClass: DefaultTreeviewI18n }
    ]
})
export class AppComponent {
    constructor(private i18n: I18n) {
    }

    set language(language: string) {
        this.i18n.language = language;
    }

    get language() {
        return this.i18n.language;
    }
}
