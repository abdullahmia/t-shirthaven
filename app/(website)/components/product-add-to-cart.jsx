import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/cart/cart.slice";
import { useDispatch } from "react-redux";

export default function ProductAddToCart({ product }) {
  // Hooks
  const dispatch = useDispatch();

  /**
   * HANDLERS
   */
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0].url,
        size: "M",
        quantity: 1,
      })
    );
  };

  return (
    <Button
      className="rounded-full text-xs text-secondary"
      variant="outline"
      size="wide"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
}
