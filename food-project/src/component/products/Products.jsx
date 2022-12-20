import Item from "./Item";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "Amul Cheese",
    weight: "100g",
    price: 78,
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/125240a.jpg?ts=1654778894",
  },
  {
    id: "m2",
    name: "Amul Butter",
    weight: "500g",
    price: 265,
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/160a.jpg?ts=1654778815",
  },
  {
    id: "m3",
    name: "Nestle Milkmaid",
    weight: "380g",
    price: 138,
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/10491a.jpg",
  },
  {
    id: "m4",
    name: "masala kurkura",
    weight: "82g",
    price: 20,
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/67372a.jpg?ts=1655989914",
  },
  {
    id: "m5",
    name: "brown bread",
    weight: "400g",
    price: 45,
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/24194a.jpg?ts=1661157751",
  },
  {
    id: "m6",
    name: "Paneer",
    weight: "200g",
    price: 85,
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/app/images/products/sliding_image/192a.jpg?ts=1644908944",
  },
];

const itemList = DUMMY_PRODUCTS.map((item) => (
  <Item
   item = {item}
    key={item.id}
    id={item.id}
    name={item.name}
    weight={item.weight}
    price={item.price}
    src={item.src}
    
  />
));
const Products = () => {
  return (
    <div>
      <ul className={classes.products}>{itemList}</ul>
    </div>
  );
};

export default Products;
