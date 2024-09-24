import {MenuItemType, PopulateType} from "@/types";

export interface MenuType {
    title: string
    position: string
    menu_items: PopulateType<MenuItemType>
}