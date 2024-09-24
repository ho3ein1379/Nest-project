import Link from "next/link";
import {IconBox} from "@/components";
import {EntityType, MenuItemType} from "@/types";
import {useMenu} from "@/hooks/Use-menu";
import {useState, MouseEvent} from "react";
import {UseOverlay} from "@/hooks/Use-overlay";

export function Menu() {

    const [showCategoryMenu, setShowCategoryMenu] = useState<boolean>(false);

    const {data: mainMenuItems} = useMenu({position: "main_menu"});
    const {data: categoryMenuItems} = useMenu({position: "brows-category"});

    UseOverlay ({
        onclick: () => {
            setShowCategoryMenu(false)
        }
    })

    const categoryBtnClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        setShowCategoryMenu(!showCategoryMenu);
    }

    const categoryBodyClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className={"relative"}>
                <div onClick={categoryBtnClickHandler} className="inline-flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                    <IconBox icon={"icon-apps"} size={24} title={"Browse All Categories"} link={"#"} titleClassName={"text-medium ml-1"}/>
                    <IconBox icon={"icon-angle-small-down"} size={24}/>
                </div>
                <div onClick={categoryBodyClickHandler} className={`${showCategoryMenu ? " flex" : "hidden"} lg:absolute z-20 bg-white left-0 top-16 lg:w-[500px] rounded-[5px] lg:border-[1px] border-green-300 pt-4 lg:p-[30px] hover:cursor-default`}>
                    <div className="flex flex-wrap justify-between gap-y-[15px]">

                        {
                            categoryMenuItems &&
                            categoryMenuItems.data.map((category: EntityType<MenuItemType>, index: number) => {
                                return (<IconBox key={index} link={category.attributes.link} icon={category.attributes.icon_name} size={30} titleClassName={"text-heading-sm text-blue-300"} title={category.attributes.title} linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"} path={category.attributes.icon_path}/>)
                            })
                        }

                        {/*{browsCategoryMock.map((item, index) => {return <IconBox key={index} link={item.link} icon={item.icon} size={30} titleClassName={"text-heading-sm text-blue-300"} title={item.title} linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"} path={item.iconPath}/>})}*/}

                        <div id="more_categories"
                             className="cursor-pointer flex gap-4 items-center lg:justify-center w-full mt-[17px]">
                            <IconBox icon={"icon-add"} size={24}/>
                            <div className="text-heading-sm text-blue-300">More Categories</div>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">


                    {
                        mainMenuItems &&
                        mainMenuItems.data.map((menu: EntityType<MenuItemType>, index: number) => {
                            return (
                                <li key={index}>
                                {
                                    menu.attributes.icon_name ? <IconBox link={menu.attributes.link} icon={menu.attributes.icon_name} title={menu.attributes.title} size={24}/> :
                                        <Link href={menu.attributes.link} key={index}
                                              className="flex items-center gap-1">{menu.attributes.title}</Link>
                                }
                                </li>
                            );
                        })
                    }

                    {/*{menuMock.map((item, index) => {return (<li>{item.icon ? <IconBox {...item} size={24}/> : <Link href={item.link} key={index} className="flex items-center gap-1">{item.title}</Link>}</li>)})}*/}
                </ul>
            </nav>
        </>
    );
}
