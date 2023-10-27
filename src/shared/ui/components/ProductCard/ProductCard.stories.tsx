import { ProductCard } from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Product Title",
  price: 750,
  img: "productPortfel.jpg",
  isFavorite: false,
  isStock: true,
};

export const OutOfStock = Template.bind({});
OutOfStock.args = {
  ...Default.args,
  isStock: false,
};

export const Favorite = Template.bind({});
Favorite.args = {
  ...Default.args,
  isFavorite: true,
};
