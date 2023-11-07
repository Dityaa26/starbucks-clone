import { useEffect, useState } from "react";

const useMenuCard = () => {
    const [menu, setMenu] = useState()
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://www.starbucks.com/bff/ordering/menu"
          );

          const data = await response.json();
        //   console.log(data.menus);
          setMenu(data.menus);
        } catch (error) {
          console.log("Something went wrong while fetching menu data.");
        }
      };
      fetchData();
    }, []);

    return menu;
}

export default useMenuCard;