import { Injectable } from '@angular/core';
import { TreeviewItem } from './treeview-item';
import {TreeviewConfig} from './treeview-config';
import * as mu from 'mzmu';

@Injectable()
export abstract class TreeviewI18n {
    abstract getText(checkededItems: TreeviewItem[], isAll: boolean, config: TreeviewConfig): string;
    abstract allCheckboxText(): string;
    abstract filterPlaceholder(): string;
    abstract filterNoItemsFoundText(): string;
    abstract tooltipCollapseExpand(isCollapse: boolean): string;
}

@Injectable()
export class TreeviewI18nDefault extends TreeviewI18n {
    getText(checkededItems: TreeviewItem[], isAll: boolean, config: TreeviewConfig): string {
        if(config.selectedCount){
            if (isAll) {
                return mu.format(config.selectedText, 'ALL');
            }

            switch (true) {
                case checkededItems.length === 0:
                    return config.emptyText;
                case checkededItems.length < config.selectedCount:
                    return checkededItems.map((o) => {
                        return o.text;
                    }).join(', ');
                default:
                    return mu.format(config.selectedText, checkededItems.length);
            }
        } else {
            switch (checkededItems.length) {
                case 0:
                    return config.emptyText;
                default:
                    return checkededItems.map((o) => {
                        return o.text;
                    }).join(', ');
            }
        }
    }

    allCheckboxText(): string {
        return 'All';
    }

    filterPlaceholder(): string {
        return 'Filter';
    }

    filterNoItemsFoundText(): string {
        return 'No items found';
    }

    tooltipCollapseExpand(isCollapse: boolean): string {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
