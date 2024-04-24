import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menuItems, setMenu] = useState([]);

    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                const popularItems = res.data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12 mx-10 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-0">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {menuItems.map(menuItem => <MenuItem
                    key={menuItem.id}
                    menuItem={menuItem}
                ></MenuItem>)}
            </div>
            <div className="text-center mt-10">
                <button id="featured-btn" className="btn btn-outline border-1 border-b-4 border-white text-white">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;