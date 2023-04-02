import React, { useState } from 'react';
import {
  AiFillQuestionCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { BsFillSquareFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Navbar from '../components/Navbar';
import recommProducts from '../../jsondata/recomm';
import popularBrands from '../../jsondata/popularBrand';
import image from '../../jsondata/image';
import Footer from '../components/Footer';

const Home = () => {
  const slides = [
    {
      url: 'https://images.wsj.net/im-406102?width=1280&size=1',
    },
    {
      url: 'https://i2-prod.mirror.co.uk/incoming/article26424327.ece/ALTERNATES/s1200b/0_Brands-and-Logos-in-Hong-Kong-China-23-Feb-2022.jpg',
    },
    {
      url: 'http://www.bokaromall.com/wp-content/uploads/2017/01/DSC07767.jpg',
    },

    {
      url: 'https://d3.harvard.edu/platform-rctom/wp-content/uploads/sites/4/2015/12/hm-_the_core-60266d2e.jpeg',
    },
    {
      url: 'https://content.api.news/v3/images/bin/3ccdeb941840be8f7328fd7ee64d95f1',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <Navbar />
      <div className="flex sm:justify-center justify-start items-center mt-14 md:mt-20 px-2 bg-[#eee] h-16 md:h-14 text-md lg:text-lg font-semibold overflow-x-auto w-full">
        <a href="#" className="mr-2 lg:ml-0 px-0 lg:px-2 lg:mx-4">
          Sneaker
        </a>
        <a href="#" className="mr-2 lg:ml-0 px-0 lg:px-2 lg:mx-4">
          Shoes
        </a>
        <a href="#" className="mr-2 lg:ml-0 px-0 lg:px-2 lg:mx-4">
          Apparel
        </a>
        <a href="#" className="mr-2 lg:ml-0 px-0 lg:px-2 lg:mx-4">
          Electronics
        </a>
        <a href="#" className="mr-2 lg:ml-0 px-0 lg:px-2 lg:mx-4 whitespace-nowrap">
          Trandind Cards
        </a>
        <a href="#" className="mr-2 lg:ml-0 px-0 lg:px-2 lg:mx-4">
          Collections
        </a>
        <a href="#" className="lg:ml-0 px-0 lg:px-2 lg:mx-4">
          Accessories
        </a>
      </div>

      {/* Sliders */}
      <div className="max-w-[1280px] h-[500px] w-full m-auto py-8 px-2 lg:px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-sm bg-center bg-cover duration-500"></div>
        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
          <IoIosArrowBack onClick={prevSlide} size={20} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
          <IoIosArrowForward onClick={nextSlide} size={20} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-md text-[#aaa] cursor-pointer">
              <BsFillSquareFill className="px-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex items-center pb-6">
          <h3 className="font-semibold text-lg mr-1">Recommended For You</h3>
          <AiFillQuestionCircle size={20} />
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular brand */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4 py-6">
        <div className="col-span-6 flex items-center">
          <h3 className="font-semibold text-lg mr-1">Popular Brands</h3>
          <AiFillQuestionCircle size={20} />
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-5 gap-4 max-w-none w-[1290px] px-4">
          {popularBrands.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full">
              <div>
                <img
                  src={item.image}
                  alt="brands"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex justify-between items-center border bg-[#eee] p-1 font-semibold">
                <div className="text-sm mt-1">{item.brand}</div>
                <div className="mt-1">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-16 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tranding */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex items-center my-6">
          <h3 className="font-semibold text-lg mr-1">Trending Products</h3>
          <AiFillQuestionCircle size={20} />
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {image.map((item) => {
        return (
          <div
            key={item.id}
            class="grid grid-cols-6 gap-4 max-w-[1280px] m-auto mt-12 px-4">
            <div className="hidden md:flex md:col-span-4">
              <img
                src={item.image_1}
                alt="image"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-2">
              <img
                src={item.image_2}
                alt="image"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        );
      })}

      {/* Popular footwear brand */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4 py-6">
        <div className="col-span-6 flex items-center">
          <h3 className="font-semibold text-lg mr-1">Popular Footwear Brand</h3>
          <AiFillQuestionCircle size={20} />
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-5 gap-4 max-w-none w-[1290px] px-4">
          {popularBrands.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full">
              <div>
                <img
                  src={item.image}
                  alt="brands"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex justify-between items-center border bg-[#eee] p-1 font-semibold">
                <div className="text-sm mt-1">{item.brand}</div>
                <div className="mt-1">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-16 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature apperal */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">Featured Apparel</h3>
            <AiFillQuestionCircle size={20} />
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Accessories */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">Featured Accessories</h3>
            <AiFillQuestionCircle size={20} />
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div className="max-w-[1280px] h-[500px] w-full m-auto py-8 px-2 lg:px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-sm bg-center bg-cover duration-500"></div>
        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
          <IoIosArrowBack onClick={prevSlide} size={20} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
          <IoIosArrowForward onClick={nextSlide} size={20} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-md text-[#aaa] cursor-pointer">
              <BsFillSquareFill className="px-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Electronics Spotlight */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">
              Electronics Spotlight
            </h3>
            <AiFillQuestionCircle size={20} />
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Favorites */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4 py-6">
        <div className="col-span-6 flex items-center">
          <h3 className="font-semibold text-lg mr-1">Seasonal Favorites</h3>
          <AiFillQuestionCircle size={20} />
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-5 gap-4 max-w-none w-[1290px] px-4">
          {popularBrands.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full">
              <div>
                <img
                  src={item.image}
                  alt="brands"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex justify-between items-center border bg-[#eee] p-1 font-semibold">
                <div className="text-sm mt-1">{item.brand}</div>
                <div className="mt-1">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-16 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collectibles Staff Picks */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">
              Collectibles Staff Picks
            </h3>
            <AiFillQuestionCircle size={20} />
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Trading Cards */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">
              Featured Trading Cards
            </h3>
            <AiFillQuestionCircle size={20} />
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {image.map((item) => {
        return (
          <div
            key={item.id}
            class="grid grid-cols-6 gap-4 max-w-[1280px] m-auto mt-12 px-4">
            <div className="col-span-6 md:col-span-2">
              <img
                src={item.image_2}
                alt="image"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="hidden md:flex md:col-span-4">
              <img
                src={item.image_1}
                alt="image"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        );
      })}

      {/* Browse More Brands */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4 py-6">
        <div className="col-span-6 flex items-center">
          <h3 className="font-semibold text-lg mr-1">Browse More Brands</h3>
          <AiFillQuestionCircle size={20} />
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-5 gap-4 max-w-none w-[1290px] px-4">
          {popularBrands.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full">
              <div>
                <img
                  src={item.image}
                  alt="brands"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex justify-between items-center border bg-[#eee] p-1 font-semibold">
                <div className="text-sm mt-1">{item.brand}</div>
                <div className="mt-1">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-16 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Bearbricks */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">Hot Bearbricks</h3>
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-xs pt-1 text-gray-500">{item.rate}</div>
                <div className="text-2xl font-semibold py-2">{item.price}</div>
                <div className="text-xs bg-[#ddd] w-[55%] py-[0.3px] text-center">
                  Last Sale: {item.retail_price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Release Calendar */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4">
        <div className="col-span-6 flex justify-between items-center my-6">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg mr-1">Release Calendar</h3>
          </div>
          <div className="font-medium text-green-800 bg-transparent hover:bg-[#eee] p-1 px-2 duration-200 transition-all ease-in">
            <a href="#">See All &rarr;</a>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-6 gap-4 max-w-none w-[1290px] px-4">
          {recommProducts.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full border">
              <div>
                <div className="flex justify-between items-center h-9 mx-2">
                  <p className="text-lg">{item.date}</p>
                  <AiOutlinePlusCircle size={24} className="cursor-pointer" />
                </div>
                <img
                  src={item.image}
                  alt="shoe"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="px-3 py-4">
                <div className="text-sm pt-1">{item.name}</div>
                <div className="text-md pt-1 font-semibold">
                  ASK: <span>{item.price}</span>
                </div>
                <div className="mt-1">
                  <button className="border font-semibold border-black hover:bg-black hover:text-white p-1 px-3 duration-200 transition-all ease-in">
                    Ask
                  </button>
                  <button className="border font-semibold text-white bg-black/80 hover:bg-black duration-200 transition-all ease-in border-black p-1 px-3 ml-2">
                    Bid
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* From The Magazine */}
      <div class="grid grid-cols-6 gap-4 max-w-[1280px] w-full m-auto px-4 py-6">
        <div className="col-span-6 flex items-center">
          <h3 className="font-[400] text-2xl mr-1">From The Magazine</h3>
        </div>
      </div>
      <div className="w-full overflow-x-auto lg:overflow-x-none lg:m-auto lg:max-w-[1290px]">
        <div class="grid grid-cols-5 gap-4 max-w-none w-[1290px] px-4">
          {popularBrands.map((item) => (
            <div
              key={item.id}
              className="col-span-1 bg-[#fff] rounded-sm w-full">
              <div>
                <img
                  src={item.image}
                  alt="brands"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex justify-between items-center border bg-[#eee] p-1 font-semibold">
                <div className="text-sm mt-1">{item.brand}</div>
                <div className="mt-1">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="w-16 h-6 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default Home;
