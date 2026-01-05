import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// Same interface as ProductCardProps
interface ProductDetailProps {
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart, onAddToWishlist }) => {
  const { productSlug } = useParams();
  const navigate = useNavigate();

  // Find product by slug
  const product = products.find(p => {
    const productSlugFromName = p.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');
    return productSlug === productSlugFromName || p.id === productSlug;
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Badges - Same as ProductCard */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.isHotDeal && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🔥 Hot Deal
                  </span>
                )}
                {product.isFeatured && (
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ Featured
                  </span>
                )}
                {product.isNewArrival && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    🆕 New
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{discountPercentage}%
                  </span>
                )}
              </div>

              {/* Quick Actions - Same as ProductCard */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                  onClick={() => onAddToWishlist(product)}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
                <Link to={product.url || `/product/${product.id}`}>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors">
                    <Eye className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                  </button>
                </Link>
              </div>

              {/* Stock Status - Same as ProductCard */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-xs text-blue-600 font-medium">{product.category}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              {/* Rating - Same as ProductCard */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviews})
                </span>
              </div>

              {/* Price Display */}
              {/* <div className="flex items-center mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  R{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="ml-3 text-xl text-gray-500 line-through">
                    R{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {discountPercentage > 0 && (
                  <span className="ml-3 text-sm bg-red-100 text-red-600 px-3 py-1 rounded">
                    Save {discountPercentage}%
                  </span>
                )}
              </div> */}

              {/* Short Description - Same as ProductCard */}
              <div className="mb-6">
                <p className="text-xs text-blue-600 font-medium">
                  Short Description: {product.description}
                </p>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Details</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description} - This professional-grade product is designed for maximum performance and durability. 
                  Perfect for industrial and commercial applications.
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.seller.split(',').map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button - SAME as ProductCard */}
              <button
                onClick={() => onAddToCart(product)}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center mb-4 ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-6 h-6 mr-3" />
                {product.inStock ? 'Add To Cart' : 'Out of Stock'}
              </button>

              {/* View Details Button */}
              <Link to="/" className="block">
                <button className="w-full py-4 border border-blue-600 text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
                  Back to Products
                </button>
              </Link>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500 text-sm">Availability</div>
                    <div className={`font-bold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-gray-500 text-sm">Category</div>
                    <div className="font-bold text-gray-800">{product.category}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-xl shadow-md p-4">
                  <Link to={relatedProduct.url || `/product/${relatedProduct.id}`}>
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      {/* <span className="font-bold text-gray-900">
                        R{relatedProduct.price.toLocaleString()}
                      </span> */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          onAddToCart(relatedProduct);
                        }}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;