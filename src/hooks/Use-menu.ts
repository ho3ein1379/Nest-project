import {useQuery} from "@tanstack/react-query";
import {getMenuApiCall} from "@/api/Menu";
import {EntityType, MenuItemType, MenuType, PopulateType} from "@/types";

interface Props {
    position: string;
}

export function useMenu({position}: Props) {
    const {data: menuData} = useQuery({queryKey: [getMenuApiCall.name], queryFn: () => getMenuApiCall()});

    let menuItems: null | PopulateType<MenuItemType> = null
    if (menuData) {
        const findMenu: EntityType<MenuType>[] = menuData.data.filter((item: EntityType<MenuType>) => item.attributes.position === position);
        if (findMenu.length > 0) {
            menuItems = findMenu[0].attributes.menu_items;
            menuItems.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if (a.attributes.rank < b.attributes.rank) {
                    return -1;
                } else if (a.attributes.rank > b.attributes.rank) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    }

    return {data: menuItems};
}