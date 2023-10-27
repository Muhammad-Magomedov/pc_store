import Heart from "./assets/hearth";
import Cart from "./assets/cart";

type TProductCard = {
  title: string;
  price: number;
  img: string;
  isFavorite: boolean;
  isStock: boolean;
};

export const ProductCard = ({
  title,
  isStock,
  price,
  isFavorite,
  img,
}: TProductCard) => {
  return (
    <div
      className={`group hover:cursor-pointer w-64 max-w-64 min-h-100 max-h-108 pt-12 overflow-hidden border border-gray-300 rounded-tl-md rounded-tr-md rounded-bl-md relative ${
        isStock && "hover:text-blue-700 hover:border-none hover:shadow-lg"
      }`}
    >
      <div className="absolute top-2 right-2">
        <Heart />
      </div>
      <div className="flex items-center flex-col">
        <img
          className="w-200 object-cover h-48"
          src={process.env.PUBLIC_URL + "/images/" + img}
          alt={title}
        />
        <div className="px-6 py-4 text-center pt-3.5">
          <div className="text-lg mb-2">{title}</div>
          {isStock ? (
            <p className="text-black-700 text-3xl pt-6">{price}₽</p>
          ) : (
            <div>
              <p className="font-bold text-black-700 text-lg pt-1.5">
                нет в наличии
              </p>
              <a
                href="src/shared/ui/components/ProductCard/ProductCard#"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pt-3"
              >
                Сообщить о поступлении
              </a>
            </div>
          )}
        </div>
      </div>
      {isStock && (
        <>
          <div className="absolute bottom-0 right-0">
            <div className="px-2 py-1 bg-blue-500 rounded-tl-lg">
              <Cart />
            </div>
          </div>
          <div className="hidden group-hover:flex group-hover:text-black absolute flex items-center justify-center top-[35%] left-[7%] w-56 h-16 rounded-md opacity-90 bg-white shadow-lg">
            Посмотреть товар
          </div>
        </>
      )}
    </div>
  );
};
