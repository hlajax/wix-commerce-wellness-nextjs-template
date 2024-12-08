import Image from 'next/image';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function HomeScreen({
  events,
  productsForCategories,
}: {
  events: wixEvents.V3Event[];
  productsForCategories: { category: string; product: products.Product }[];
}) {
  return (
    <div className="mx-auto relative">
  {/* Hero Section */}
  <div className="bg-gradient-to-r from-green-100 to-green-200 py-20 px-6 text-center">
    <h1 className="text-5xl font-bold text-green-800 mb-6">
      Wellness Begins Here
    </h1>
    <p className="text-xl text-green-700 max-w-3xl mx-auto mb-10">
      Discover a holistic approach to health and well-being. Our premium
      products are designed to nurture your body, mind, and spirit.
    </p>
    <a
      href="/shop"
      className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
    >
      Explore Our Products
    </a>
  </div>

  {/* Existing content remains the same */}
  <div className="relative">
    <div className="flex sm:flex-row flex-col bg-zinc-900">
      {/* ... (previous code for the first section remains unchanged) ... */}
    </div>
  </div>

  {/* Events section remains unchanged */}
  {events?.length ? (
    <div className="bg-zinc-900 text-site pt-16 sm:p-20">
      <Events events={events} />
    </div>
  ) : (
    <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
      No events found. Click{" "}
      <a
        href="https://manage.wix.com/account/site-selector?actionUrl=https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fevents%3FreferralInfo%3DHeadless"
        target="_blank"
        rel="noreferrer"
        className="text-purple-500"
      >
        here
      </a>{" "}
      to go to the business dashboard to add events. Once added, they will
      appear here.
    </div>
  )}

  {/* New Product Display Section */}
  <div className="bg-gray-50 py-16 px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-green-800 mb-4">
        Our Best Sellers
      </h2>
      <p className="text-xl text-green-700 max-w-2xl mx-auto">
        Explore our most popular wellness products, carefully curated to support
        your health journey.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {allProducts.slice(0, 16).map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <a href={`/product-page/${product.slug}`}>
            <WixMediaImage
              media={product.media?.mainMedia?.image?.url}
              width={400}
              height={400}
              alt={product.media?.mainMedia?.image?.altText || "Product Image"}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800">
                {product.name}
              </h3>
              <p className="text-green-600 font-bold">
                {product.price?.formatted?.price}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
    <div className="text-center mt-12">
      <a
        href="/shop"
        className="bg-green-600 text-white px-10 py-3 rounded-full hover:bg-green-700 transition duration-300"
      >
        View All Products
      </a>
    </div>
  </div>

  {/* Why Buy Our Products Section */}
  <div className="bg-white py-16 px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-green-800 mb-4">
        Why Choose Our Wellness Products
      </h2>
      <p className="text-xl text-green-700 max-w-2xl mx-auto">
        We're committed to your holistic health with scientifically-backed,
        natural solutions.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto mb-4 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          100% Natural Ingredients
        </h3>
        <p className="text-green-600">
          Carefully sourced and pure ingredients with no artificial additives.
        </p>
      </div>
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto mb-4 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Transparent Pricing
        </h3>
        <p className="text-green-600">
          Fair, honest pricing with no hidden costs or surprises.
        </p>
      </div>
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto mb-4 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Scientifically Backed
        </h3>
        <p className="text-green-600">
          Our products are developed with the latest health research and
          expertise.
        </p>
      </div>
    </div>
  </div>

  {/* Remaining original code for productsForCategories */}
  {productsForCategories.length ? (
    <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">
      {/* ... (previous code remains unchanged) ... */}
    </div>
  ) : (
    <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
      No categories found. Click{" "}
      <a
        href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fcategories%2Flist%3FreferralInfo%3DHeadless"
        target="_blank"
        rel="noreferrer"
        className="text-purple-500"
      >
        here
      </a>{" "}
      to go to the business dashboard to create event categories. Once added,
      they will appear here.
    </div>
  )}
</div>;

  );
}
