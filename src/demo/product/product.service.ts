import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class ProductService {
    getProducts(): TreeviewItem[] {
        const fruitCategory = new TreeviewItem({
            text: 'Fruit', value: 1, children: [
                { text: 'Apple', value: 11 },
                { text: 'Mango', value: 12 }
            ]
        });
        const vegetableCategory = new TreeviewItem({
            text: 'Vegetable', value: 2, children: [
                { text: 'Salad', value: 21 },
                { text: 'Potato', value: 22 }
            ]
        });


        const medicalCategory1 = new TreeviewItem({
            "text": "Consultation",
            "value": {
                "id": "0_0/3134986",
                "code": "CAT10001"
            },
            "children": [
                {
                    "text": "OH",
                    "value": {
                        "id": "0_0/3134994",
                        "code": "CAT10012"
                    },
                    "children": [
                        {
                            "text": "Consultation occupational health",
                            "value": {
                                "id": "0_0/3134995",
                                "code": "ACI10007"
                            }
                        }
                    ]
                },
                {
                    "text": "Specialist",
                    "value": {
                        "id": "0_0/3134996",
                        "code": "CAT10013"
                    },
                    "children": [
                        {
                            "text": "Standard Consultation Specialist",
                            "value": {
                                "id": "0_0/3135000",
                                "code": "ACI10011"
                            }
                        },
                        {
                            "text": "Standard Consultation Gynecologist",
                            "value": {
                                "id": "0_0/3134997",
                                "code": "ACI10008"
                            }
                        },
                        {
                            "text": "Standard Consultation Pedriatrician",
                            "value": {
                                "id": "0_0/3134998",
                                "code": "ACI10009"
                            }
                        },
                        {
                            "text": "Standard Consultation Cardiologist",
                            "value": {
                                "id": "0_0/3134999",
                                "code": "ACI10010"
                            }
                        }
                    ],
                },
                {
                    "text": "GP",
                    "value": {
                        "id": "0_0/3134987",
                        "code": "CAT10011"
                    },
                    "children": [
                        {
                            "text": "Surcharge Out of Hours",
                            "value": {
                                "id": "0_0/3134990",
                                "code": "ACI10003"
                            }
                        },
                        {
                            "text": "Brief Consultation",
                            "value": {
                                "id": "0_0/3134991",
                                "code": "ACI10004"
                            }
                        },
                        {
                            "text": "Extended Consultation, Est",
                            "value": {
                                "id": "0_0/3134992",
                                "code": "ACI10005"
                            }
                        },
                        {
                            "text": "No Charge Consultation",
                            "value": {
                                "id": "0_0/3134993",
                                "code": "ACI10006"
                            }
                        },
                        {
                            "text": "Standard Consultation - Nurse",
                            "value": {
                                "id": "0/123295",
                                "code": "ACI10233"
                            }
                        },
                        {
                            "text": "Standard Consultation, Est",
                            "value": {
                                "id": "0_0/3134988",
                                "code": "ACI10001"
                            }
                        },
                        {
                            "text": "Standard Consultation Home / Hospital Visit",
                            "value": {
                                "id": "0_0/3134989",
                                "code": "ACI10002"
                            }

                        }
                    ]
                }
            ]
        })
        vegetableCategory.children.push(new TreeviewItem({ text: 'Mushroom', value: 23, checked: false }));
        vegetableCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
        return [fruitCategory, vegetableCategory, medicalCategory1];
    }
}
