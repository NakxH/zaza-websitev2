import { Nav } from "./components/nav";
import { TextWithPhotoRight } from "./components/textWithPhotoRight";
import { Footer } from "./components/footer";
import { ImageFullWidth } from "./components/imageFullWidth";
import { TextWithPhotoLeft } from "./components/textWithPhotoLeft";
import { Reservations } from "./components/reservations";

const aboutUsContent =
  "Welcome to Aya, where a passion for authentic Turkish cuisine meets the heart of Wakefield, England. At Aya, we are more than just a restaurant; we are a gateway to the rich and diverse flavors of Turkey. Our journey began with a dream to share the warmth, hospitality, and exquisite flavors of Turkey with the local community. Our dedicated team of chefs, with roots deeply entrenched in Turkish culinary traditions, painstakingly crafts each dish to perfection. From the vibrant colors of our meze platters to the sizzle of our skewers on the grill, every detail is a reflection of our commitment to authenticity. We source the finest ingredients and spices to ensure that each bite transports you to the bustling streets of Istanbul or the serene shores of the Mediterranean. At Aya, we believe that food is not just sustenance; it's an experience. It's about sharing stories, laughter, and creating memories around a table filled with delicious dishes. Our restaurant is designed to immerse you in the culture and ambiance of Turkey.";
const menuContent =
  "Our menu at Aya is a culinary odyssey through the diverse and vibrant flavors of Turkey. From our savory kebabs, marinated to perfection and cooked over an open flame, to our indulgent baklava dripping with honey and nuts, each dish tells a story of tradition and craftsmanship. Explore our enticing meze selection, where fresh, local ingredients are transformed into an array of colorful and flavorful small plates. Dive into our aromatic stews and richly spiced rice dishes that capture the essence of Turkish home cooking. Whether you're craving the tender embrace of slow-cooked lamb or the freshness of Mediterranean salads, our menu invites you to embark on a tantalizing journey that celebrates the heart and soul of Turkish cuisine.";
const reservationContent =
  "Reserving your table at Aya is easy. You can make a reservation with us either by phone or email, whichever suits your preference. Simply give us a call at 077777777777 to speak with our friendly staff, who will assist you in selecting the perfect date and time for your dining experience. Alternatively, you can drop us an email at reservations@ayarestaurant.com, and our dedicated reservation team will promptly confirm your booking, ensuring that your visit to Aya is a memorable one. We can't wait to welcome you to our restaurant and offer you an authentic taste of Turkey with warm hospitality and exquisite flavors.";

export const App = () => {
  return (
    <>
      <Nav />
      <ImageFullWidth img="/public/kebab.jpg" />
      <TextWithPhotoRight
        isMenu={false}
        title="About Aya"
        content={aboutUsContent}
        img="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />
      <ImageFullWidth img="/public/kebab.jpg" />
      <TextWithPhotoLeft
        isMenu={true}
        title="Menu"
        img="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        content={menuContent}
      />
      <ImageFullWidth img="/public/kebab.jpg" />
      <Reservations title="Reservations" content={reservationContent} />
      <Footer />
    </>
  );
};
