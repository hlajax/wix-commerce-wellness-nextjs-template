import Image from 'next/image';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function HomeScreen({
  events,
  productsForCategories,
  featuredProducts,
}: {
  events: wixEvents.V3Event[];
  productsForCategories: { category: string; product: products.Product }[];
  featuredProducts: products.Product[];
}) {
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-100 to-green-200 py-20 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
              Wellness Starts Here
            </h1>
            <p className="text-lg text-green-800 mb-8">
              Discover our premium health and wellness products designed to enhance your natural vitality. From organic supplements to holistic wellness solutions, we're committed to supporting your journey to optimal health.
            </p>
            <a 
              href="/shop" 
              className="btn-main bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              Explore Our Products
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image 
              src="/api/placeholder/500/500" 
              alt="Wellness Products" 
              width={500} 
              height={500} 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Our Featured Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 16).map((product) => (
              <div 
                key={product._id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <a href={`/product-page/${product.slug}`}>
                  <WixMediaImage
                    media={product.media?.mainMedia?.image?.url}
                    width={300}
                    height={300}
                    alt={product.media?.mainMedia?.image?.altText || 'Product Image'}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-green-800">{product.name}</h3>
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
              className="btn-main bg-green-600 text-white px-10 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-4 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Why Choose Our Wellness Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">100% Natural</h3>
              <p className="text-green-700">Our products are made from purely natural ingredients, free from artificial additives.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M13 5.5a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Scientifically Proven</h3>
              <p className="text-green-700">Backed by scientific research and carefully formulated for maximum effectiveness.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">Quality Guaranteed</h3>
              <p className="text-green-700">Each product undergoes rigorous quality control to ensure the highest standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Events Section */}
      {events?.length ? (
        <div className="bg-zinc-900 text-site pt-16 sm:p-20">
          <Events events={events} />
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No events found. Click{' '}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fevents%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{' '}
          to go to the business dashboard to add events. Once added, they will
          appear here.
        </div>
      )}

      {/* Existing Merch Section */}
      {productsForCategories.length ? (
        <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">
          {/* ... (keeping the existing merch section code) ... */}
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          No categories found. Click{' '}
          <a
            href="https://manage.wix.com/account/site-selector?actionUrl=+https%3A%2F%2Fmanage.wix.com%2Fdashboard%2F%7BmetaSiteId%7D%2Fstore%2Fcategories%2Flist%3FreferralInfo%3DHeadless"
            target="_blank"
            rel="noreferrer"
            className="text-purple-500"
          >
            here
          </a>{' '}
          to go to the business dashboard to create event categories. Once
          added, they will appear here.
        </div>
      )}
    </div>
  );
}
