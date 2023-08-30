import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import NavBar from './index';
import { RectangleComponent } from './index';
import { WhyDigital } from './index';
import { VerticalSplitSection } from './index';
import { products } from './index'; // Import the Products component
import { Footer } from './index'; // Import the Footer component
import { Product } from './index'; // Import the Product component 
import { BuyButton } from './index'; // Import the BuyButton component 

const App = () => {
  return (
    <div>
      <NavBar />
      <VerticalSplitSection
        color1="#FF9D00"
        color2="#FFFFFF"
        imageUrl="/images/orange-header-image.jpeg"
      />
      <div className="flex justify-center pt-8 space-x-20">
        <RectangleComponent
          imageUrl="images/orange-card-icon.png"
          title="Digital Business Cards"
          description="Platform for creating, editing and sharing digital business cards that are accessible via NFC, QR code, or regularly through email, sms etc."
        />
        <RectangleComponent
          imageUrl="images/orange-nfc-icon.png"
          title="NFC Products"
          description="We offer a wide range of physical NFC products that can be used to instantly display and share your own digital business card quickly and easily"
        />
        <RectangleComponent
          imageUrl="images/orange-organization-icon.png"
          title="Organization Management"
          description="Create and edit uniform business cards for employees of your organization. Can be synced with your business’ active directory"
        />
      </div>
      <div className="pt-8">
        <WhyDigital
          imageUrl="images/ui-image.png"
          description1="Digitization of business cards allows for easy updates to your contact information and card layout"
          description2="Standardized format and regulation of business cards within one organization"
          description3="Quick and seamless sharing of your contact information without having to hold onto a physical business card"
          description4="Displaying specific profile versions depending on what information youre comfortable sharing with the given person"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default App;
