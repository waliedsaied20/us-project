import React from 'react';
import { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Image from "next/image";



interface NavLink {
  title: string;
  url: string;
}

const navLinks: NavLink[] = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Products',
    url: '/about'
  },
  {
    title: 'About',
    url: '/contact'
  },
  {
    title: 'Pricing',
    url: '/contact'
  },
  {
    title: 'Login',
    url: '/contact'
  }

];

const NavBar: NextPage = () => {
  return (
    <nav className="bg-[#FF9D00] fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 pl-2">
            <img className="h-8 w-auto" src="/images/us-logo.png" alt="Your Logo" />
          </div>
          <div className="flex">
            <div className="flex items-baseline space-x-4">
              <a href="/about.tsx" className="font-montserrat text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-light">Home</a>
              <a href="/" className="font-montserrat text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-light">About</a>
              <a href="/" className="font-montserrat text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-light">Contact</a>
              <a href="/" className="font-montserrat text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-light">Pricing</a>
              <a href="/" className="font-montserrat text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-light">Login</a>
              <a href="/" className="font-montserrat bg-white text-gray-900 rounded-full px-4 font-light ml-4 text-sm hover:bg-gray-700 hover:text-white">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;

// VerticalSplitSection is the header div that is below the navbar 
interface VerticalSplitSectionProps {
  color1: string;
  color2: string;
  imageUrl: string;
}

export const VerticalSplitSection: React.FC<VerticalSplitSectionProps> = ({
  color1,
  color2,
  imageUrl,
}) => {
  return (
    <div className="flex relative" style={{ height: '600px' }}>
      <div
        className="w-3/5 flex flex-col items-start justify-center space-y-4 px-8"
        style={{ backgroundColor: color1 }}
      >
        <h1 className="font-montserrat font-thin text-6xl text-white">Digital Business Cards</h1>
        <p className="font-merriweather-sans font-light text-base text-white">Register now and share your business and contact<br></br> information with the tap of a phone!</p>
        <div className="flex space-x-4">
          <Button text="Link 1" link="#" backgroundColor="white" className="hover:bg[#FFEBC6]" />
          <Button text="Link 2" link="#" backgroundColor="white" />
        </div>
      </div>
      <div className="w-2/5 flex items-center justify-end relative">
        <img
          className="absolute top-1/2 left-[-10%] transform -translate-y-1/2 w-full h-72 object-cover z-10"
          src={imageUrl}
          alt="Header image"
          style={{
            borderTopLeftRadius: 339,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 339,
          }}
        />
      </div>
    </div>
  );
};










interface Props {
  imageUrl: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const RectangleComponent: React.FC<Props> = ({ imageUrl, title, description }) => {
  return (
    <div className="w-72 h-auto p-4 flex flex-col justify-center items-center shadow-lg rounded-lg bg-white">
      <div className="w-32 h-32 bg-[#FFEBC6] rounded-full flex items-center justify-center">
        <img className="w-24 h-24 object-cover" src={imageUrl} alt={title} />
      </div>
      <h3 className="text-lg font-medium font-montserrat mb-2 mt-4">{title}</h3>
      <p className="text-gray-600 text-center text-lg font-light font-merriweather-sans leading-8">{description}</p>
      <div className="mt-4">
        <Button text="Learn More" link="#" className="bg-white border border-gray-300 text-gray-800" />
      </div>
    </div>
  );
};


interface WhyDigitalProps {
  imageUrl: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

export const WhyDigital: React.FC<WhyDigitalProps> = ({
  imageUrl,
  description1,
  description2,
  description3,
  description4,
}) => {
  return (
    <div className="bg-[#FFEBC6] p-4">
      <h2
         className="text-center text-2xl font-montserrat font-light mb-4"
        style={{ color: "#FFA500" }}
>
  Why Digital Business Cards
</h2>
      <div className="flex items-center">
        <img
          className="w-100 h-64 object-cover border border-white"
          src={imageUrl}
          alt="Oval-shaped image"
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 214,
            borderBottomRightRadius: 214,
            borderBottomLeftRadius: 0,
          }}
        />
        <div className="ml-4 w-1/2 flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <span className="absolute -top-4 left-0 text-base font-montserrat font-light">1.</span>
            <p className="pl-7">{description1}</p>
          </div>
          <div className="relative">
            <span className="absolute -top-4 left-0 text-base font-montserrat font-light">2.</span>
            <p className="pl-6">{description2}</p>
          </div>
        </div>
        <div className="ml-4 w-1/2 flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <span className="absolute -top-4 left-0 text-base font-montserrat font-light">3.</span>
            <p className="pl-6">{description3}</p>
          </div>
          <div className="relative">
            <span className="absolute -top-4 left-0 text-base font-montserrat font-light">4.</span>
            <p className="pl-6">{description4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// updated button component


interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  backgroundColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  link,
  onClick,
  className,
  backgroundColor = 'transparent',
}) => {
  const buttonStyle = `inline-flex items-center px-4 py-2 border border-transparent text-base font-light rounded-lg focus:outline-none focus:border-white transition duration-150 ease-in-out ${className}`;
  const buttonStylesWithBackground = `${buttonStyle} bg-${backgroundColor}`;

  if (link) {
    return (
      <Link href={link} passHref>
        <div className={buttonStylesWithBackground} style={{ borderRadius: 40, fontFamily: 'Montserrat', cursor: 'pointer' }}>
          {text}
        </div>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonStylesWithBackground}
      style={{ borderRadius: 40, fontFamily: 'Montserrat' }}
    >
      {text}
    </button>
  );
};


export const products = [
  { id: 1, name: "Product 1", image: "/images/product-1.png" },
  { id: 2, name: "Product 2", image: "/images/metalNFC.webp" },
  { id: 3, name: "Product 3", image: "/images/pop-socket.png" },
];

export const Product = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 m-4 w-72 h-72 flex flex-col items-center justify-between">
      <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2" />
      <h2 className="text-xl font-montserrat font-light mb-2">{product.name}</h2>
      <BuyButton />
    </div>
  );
};





// website footer
export const Footer = () => {
  return (
    <footer className="bg-[#A16400] py-2">
      <div className="container mx-auto flex items-center justify-between flex-wrap ">
        <div className="flex flex-col items-center px-2">
          <div className="w-60 ">
            <img src="/images/us-logo.png" alt="Us Logo" width={200} height={200} />
            <br></br>
          </div>
          <div className="ml-3 text-base  text-white font-montserrat font-regular ">
            <p className="">Make your mark without the paper trail - go digital with Us.</p>
          </div>
        </div>

        <div className="text-center text-white text-xs mt-4 lg:mt-0 lg:text-center lg:flex-1 self-end justify-self-center">
          &copy; 2023 Us App. All rights reserved.
        </div>

        <div className="w-full mt-4 lg:w-auto lg:flex-1 lg:flex lg:justify-around">
          
          <ul className="list-none lg:flex: flex-col py-2">
            <h2 className="text-white font-montserrat font-bold">Pages</h2>
            <li className="mt-2 lg:mt-0 lg:mr-6">
              <a className="text-white font-montserrat font-light hover:text-gray-600" href="#">Home</a>
            </li>
            <li className="mt-2 lg:mt-0 lg:mr-6">
              <a className="text-white font-montserrat font-light hover:text-gray-600" href="#">Features</a>
            </li>
            <li className="mt-2 lg:mt-0 lg:mr-6">
              <a className="text-white font-montserrat font-light hover:text-gray-600" href="#">Products</a>
            </li>
            <li className="mt-2 lg:mt-0 lg:mr-6">
              <a className="text-white font-montserrat font-light hover:text-gray-600" href="#">FAQ and Contact us</a>
            </li>
          </ul>
          <ul className="list-none lg:flex:  flex-col">
            <h2 className="text-white font-montserrat font-bold">Contact Us</h2>
            <li className="mt-2 lg:mt-0 lg:mr-6 py-2">
              <a className="text-white hover:text-gray-600">+20100170927</a>
            </li>
            <li className="mt-2 lg:mt-0 lg:mr-6">
              <a className="text-white hover:text-gray-600">contact@us.com</a>
            </li>
            <div className="flex items-center  mt-4 lg:mt-0 justify-space py-3">
              <a className="px-1" href="#"><img src="/images/Facebook.svg.png" width={30} height={30} /></a>
              <a className="px-1" href="#"><img src="/images/Instagram.svg.png" width={30} height={30} /></a>
              <a className="px-1" href="#"><img src="/images/LinkedIn.svg.png" width={30} height={30} /></a>
              <a className="px-1" href="#"><img src="/images/whatsapp.png" width={30} height={30} /></a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Buy now buttons under each product 
export const BuyButton = () => {
  return (
    <button className="bg-[#FFA500] hover:bg[#FFEBC6] text-white font-montserrat font-regular py-2 px-4 rounded">
      Add to cart
    </button>
  );
};







