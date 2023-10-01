import Icon from "@/common/components/UI/icons/Icon";
import React, {useState, useEffect} from "react";


const DUMB_ARRAY = [
    {
      id: 0,  
      name: "Smartphones and Smartwatches",
      subcategories: [
        {
          name: "Smartphones",
          subcategories: [
            {
              name: "Apple",
              subcategories: [
                { name: "iPhone 13", subcategories: [] },
                { name: "iPhone 13 Pro", subcategories: [] },
                { name: "iPhone SE", subcategories: [] }
              ]
            },
            {
              name: "Samsung",
              subcategories: [
                { name: "Galaxy S21", subcategories: [] },
                { name: "Galaxy Note 20", subcategories: [] },
                { name: "Galaxy A52", subcategories: [] }
              ]
            },
            {
              name: "Google",
              subcategories: [
                { name: "Pixel 6", subcategories: [] },
                { name: "Pixel 5a", subcategories: [] }
              ]
            }
          ]
        },
        {
          name: "Smartwatches",
          subcategories: [
            {
              name: "Apple Watch",
              subcategories: [
                { name: "Series 7", subcategories: [] },
                { name: "SE", subcategories: [] }
              ]
            },
            {
              name: "Samsung Galaxy Watch",
              subcategories: [
                { name: "Watch 4", subcategories: [] },
                { name: "Watch Active 2", subcategories: [] }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 1,  
      name: "Laptops and Desktops",
      subcategories: [
        {
          name: "Laptops",
          subcategories: [
            {
              name: "Apple",
              subcategories: [
                { name: "MacBook Pro", subcategories: [] },
                { name: "MacBook Air", subcategories: [] }
              ]
            },
            {
              name: "Dell",
              subcategories: [
                { name: "XPS 15", subcategories: [] },
                { name: "Inspiron 14", subcategories: [] }
              ]
            },
            {
              name: "HP",
              subcategories: [
                { name: "Spectre x360", subcategories: [] },
                { name: "ENVY 13", subcategories: [] }
              ]
            }
          ]
        },
        {
          name: "Desktops",
          subcategories: [
            {
              name: "Custom Built",
              subcategories: []
            },
            {
              name: "Dell",
              subcategories: [
                { name: "XPS Tower", subcategories: [] },
                { name: "Inspiron Desktop", subcategories: [] }
              ]
            },
            {
              name: "HP",
              subcategories: [
                { name: "Pavilion", subcategories: [] }
              ]
            }
          ]
        }
      ]
    },
  ];
  

interface Subcategory {
    name: string;
    subcategories: Subcategory[];
}

interface Category {
    name: string;
    subcategories: Subcategory[];
}


interface HamburgerMenuContentProps{
    handleMenuMouseEnter: () => void;
    handleMenuMouseLeave: () => void;
}
  
const HamburgerMenuContent:React.FC<HamburgerMenuContentProps> = ({handleMenuMouseEnter, handleMenuMouseLeave}) => {
    const [activeCategory, setActiveCategory] = useState(0)
    const [subCategory, setSubCategory] = useState<Subcategory[]>([]);

    const handleMouseEnter = (event: any, id: number) => {
        console.log("id ", id)
        setActiveCategory(id)
        const selectedCategory = DUMB_ARRAY.find(item => item.id === activeCategory)
        if(selectedCategory){
            setSubCategory(selectedCategory?.subcategories);
        }
    }

    // useEffect(() => {
    //     setSubCategory(DUMB_ARRAY.filter(item => item.id === activeCategory))
    // }, [activeCategory])

    // DUMB_ARRAY.map((item) => console.log(item))
    return(
        <div
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
            className="absolute flex flex-row min-h-[200px] top-[56px] left-0 z-[1200] bg-white rounded-md shadow-specific"
        >
            <div className="flex flex-col w-auto pb-[12px] mt-[15px] w-[290px]">
            {/* <div className="flex flex-col justify-end w-auto pb-[12px] ml-[24px] mr-[10px] mt-[15px] w-[275px]"> */}
                <div className="h-auto text-[13px] leading-[16px] font-bold text-gray-250 pl-[24px] pb-[10px]">
                    Kategorie
                </div>
                <div className="min-w-full">
                    <ul>
                        {DUMB_ARRAY.map((item, index) => (
                              <li 
                                onMouseEnter={(event) => handleMouseEnter(event, item.id)} 
                                key={index} className="flex flex-row items-center justify-between h-[30px] w-full hover:bg-gray-100 pl-[24px] pr-[10px]"
                                >
                                  <Icon name="TvIcon" className="grow-0 mr-[14px]" />
                                  <div className="flex grow justify-start">
                                      {item.name}
                                  </div>
                                  <div className="flex justify-end">
                                      <Icon name="ChevronRightIcon" className="flex-shrink-0"/>
                                  </div>
                              </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col">
                <HamburgerSubNav subCategory={subCategory}/>
            </div>
        </div>
    )
}

interface HamburgerSubNavProps {
    subCategory: Subcategory[];
}

const HamburgerSubNav:React.FC<HamburgerSubNavProps> = ({subCategory}) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);


    return(
        <div className="h-[400px] w-[665px] flex flex-col">
            <div className="flex flex-col w-auto pb-[12px] mt-[15px] w-[290px]">
            {/* <div className="flex flex-col justify-end w-auto pb-[12px] ml-[24px] mr-[10px] mt-[15px] w-[275px]"> */}
                <div className="h-auto text-[13px] leading-[16px] font-bold text-gray-250 pl-[24px] pb-[10px]">
                    Kategorie
                </div>
                <ul>
                    {subCategory?.map((item, index) => (
                        <li 
                            key={index}
                            className="flex flex-row items-center justify-between h-[30px] w-[290px] pl-[24px] w-full hover:bg-gray-100"
                        >
                            <div className="flex grow justify-start">
                                {item.name}
                            </div>
                            <div className="flex justify-end">
                                <Icon name="ChevronRightIcon" className="flex-shrink-0"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-grow">
                <HamburgerSubSubNav subCategory={subCategory}/>
            </div>
        </div>
    )
}

const HamburgerSubSubNav:React.FC<HamburgerSubNavProps> = ({subCategory}) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);


    return(
        <div className="h-[400px] w-[665px] flex flex-col">
            <div className="flex flex-col w-auto pb-[12px] mt-[15px] w-[290px]">
            {/* <div className="flex flex-col justify-end w-auto pb-[12px] ml-[24px] mr-[10px] mt-[15px] w-[275px]"> */}
                <div className="h-auto text-[13px] leading-[16px] font-bold text-gray-250 pl-[24px] pb-[10px]">
                    Kategorie
                </div>
                <ul>
                    {subCategory?.map((item, index) => (
                        <li 
                            key={index}
                            className="flex flex-row items-center justify-between h-[30px] w-[290px] pl-[24px] w-full hover:bg-gray-100"
                        >
                            <div className="flex grow justify-start">
                                {item.name}
                            </div>
                            <div className="flex justify-end">
                                <Icon name="ChevronRightIcon" className="flex-shrink-0"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-grow">

            </div>
        </div>
    )
}


export default HamburgerMenuContent;