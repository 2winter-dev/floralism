/* eslint-disable */
/** @format */

import * as React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { AdMob } from "@components";
import CategoriesItem from "./CategoriesItem";
import styles from "./styles";
import { Config } from "@common";
const CategoriesList = React.memo(() => {
  //分类tab屏蔽掉配置的分类
  const categoryList = useSelector((state) => {
    return state.categories.list?.filter((category) => category.parent === 0 && category.name !== Config.iMarkerConfig)
  }
  );
  // remove duplicate item
  // const mainCategories = React.useMemo(
  //   () => [...new Map(categoryList.map((item) => [item.id, item])).values()],
  //   [categoryList]
  // );

  const mainCategories = [
    {
      "id": 15,
      "name": "Uncategorized",
      "slug": "uncategorized",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 1,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/15"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    },
    {
      "id": 20,
      "name": "九龍",
      "slug": "%e4%b9%9d%e9%be%8d",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/20"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    },
    {
      "id": 23,
      "name": "出售",
      "slug": "%e5%87%ba%e5%94%ae",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 2,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/23"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    },
    {
      "id": 21,
      "name": "出租",
      "slug": "%e5%87%ba%e7%a7%9f",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 7,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/21"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    },
    {
      "id": 24,
      "name": "家具",
      "slug": "%e5%ae%b6%e5%85%b7",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 3,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/24"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    },
    {
      "id": 22,
      "name": "新界",
      "slug": "%e6%96%b0%e7%95%8c",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 0,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/22"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    },
    {
      "id": 25,
      "name": "港島",
      "slug": "%e6%b8%af%e5%b3%b6",
      "parent": 0,
      "description": "",
      "display": "default",
      "image": null,
      "menu_order": 0,
      "count": 10,
      "has_children": false,
      "_links": {
        "self": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories/25"
          }
        ],
        "collection": [
          {
            "href": "https://hkkafookproperty.com/wp-json/wc/v3/products/categories"
          }
        ]
      }
    }
  ]

  return (
    <ScrollView
      scrollEventThrottle={1}
      contentContainerStyle={styles.scrollView}>
      {mainCategories?.map((category, index) => {
        return (
          <CategoriesItem
            key={index.toString()}
            index={index}
            category={category}
          />
        );
      })}

      <AdMob />
    </ScrollView>
  );
});

export default CategoriesList;
