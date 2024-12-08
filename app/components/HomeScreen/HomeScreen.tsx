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
      <section className="relative bg-blue-50 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Bienvenue dans notre boutique de santé et bien-être
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Découvrez une large gamme de produits pour prendre soin de votre santé et améliorer votre bien-être au quotidien.
        </p>
        <button
          onClick={() => window.location.href = '/boutique'}
          className="px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition"
        >
          Voir les produits
        </button>
      </section>

      {/* Original Section */}
      <div className="relative">
        {/* ... (ton code existant peut rester ici sans modification) */}
      </div>

      {/* Products Grid Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Nos produits phares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {productsForCategories.slice(0, 16).map(({ product }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={product.image.src}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.price.formatted}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => window.location.href = '/boutique'}
            className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Voir tous les produits
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Pourquoi choisir nos produits ?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm-1 14.59l-4-4L8.41 11 11 13.59 15.59 9 17 10.41z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">
              Produits 100% naturels et écologiques.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm-1 14.59l-4-4L8.41 11 11 13.59 15.59 9 17 10.41z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">
              Livraison rapide et sécurisée.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm-1 14.59l-4-4L8.41 11 11 13.59 15.59 9 17 10.41z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">
              Garantie satisfaction client.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-500"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm-1 14.59l-4-4L8.41 11 11 13.59 15.59 9 17 10.41z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600">
              Support client disponible 24/7.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
