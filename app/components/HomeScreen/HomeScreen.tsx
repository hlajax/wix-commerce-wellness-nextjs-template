import Image from 'next/image';
import { wixEventsV2 as wixEvents } from '@wix/events';
import { products } from '@wix/stores';
import { Events } from '@app/components/Events/Events';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function HomeScreen({
  events,
  productsForCategories,
  allProducts,
}: {
  events: wixEvents.V3Event[];
  productsForCategories: { category: string; product: products.Product }[];
  allProducts: products.Product[];
}) {
  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="bg-green-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-green-800 mb-6">
            Votre Bien-Être, Notre Passion
          </h1>
          <p className="text-lg text-green-700 mb-10">
            Découvrez notre gamme de produits naturels soigneusement sélectionnés pour améliorer votre santé et votre qualité de vie. Chaque produit est conçu pour vous aider à atteindre votre équilibre optimal.
          </p>
          <a 
            href="/shop" 
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Découvrir Nos Produits
          </a>
        </div>
      </section>

      {/* Product Display Section */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Nos Produits Phares
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Une sélection soigneuse de produits naturels pour votre bien-être
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {allProducts.slice(0, 16).map((product) => (
            <div 
              key={product._id} 
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <a href={`/product-page/${product.slug}`}>
                <WixMediaImage
                  media={product.media?.mainMedia?.image?.url}
                  width={400}
                  height={400}
                  alt={product.media?.mainMedia?.image?.altText || 'Product image'}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-800 truncate">
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
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Voir Tous Les Produits
          </a>
        </div>
      </section>

      {/* Why Buy Our Products Section */}
      <section className="bg-green-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Pourquoi Choisir Nos Produits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                100% Naturel
              </h3>
              <p className="text-green-700">
                Tous nos produits sont composés d'ingrédients naturels et biologiques, sans additifs nocifs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Qualité Premium
              </h3>
              <p className="text-green-700">
                Chaque produit est soigneusement sélectionné et testé pour garantir les meilleurs résultats.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Satisfaction Garantie
              </h3>
              <p className="text-green-700">
                Nous croyons en la qualité de nos produits. Satisfait ou remboursé sous 30 jours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Events and Product Categories Sections */}
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

      {productsForCategories.length ? (
        <div className="flex gap-2 sm:gap-14 px-14 flex-col sm:flex-row">
          {/* Your existing Merch section remains unchanged */}
          {/* ... */}
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
