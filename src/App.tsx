import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { ImageFullWidth } from "./components/imageFullWidth";
import { Reservations } from "./components/reservations";
import { TextWithPhoto } from "./components/textWithPhoto";
import adanakebab from "../public/adanakebab.jpg";

const aboutUsContent = (
  <>
    <p>
      Welcome to Aya, where a passion for authentic Turkish cuisine meets the
      heart of Wakefield, England.
    </p>
    <p className="mt-2">
      At Aya, we are more than just a restaurant; we are a gateway to the rich
      and diverse flavors of Turkey. Our journey began with a dream to share the
      warmth, hospitality, and exquisite flavors of Turkey with the local
      community.
    </p>
    <p className="mt-2">
      Our dedicated team of chefs, with roots deeply entrenched in Turkish
      culinary traditions, painstakingly crafts each dish to perfection. From
      the vibrant colors of our meze platters to the sizzle of our skewers on
      the grill, every detail is a reflection of our commitment to authenticity.
    </p>
    <p className="mt-2">
      We source the finest ingredients and spices to ensure that each bite
      transports you to the bustling streets of Istanbul or the serene shores of
      the Mediterranean.
    </p>
    <p className="mt-2">
      At Aya, we believe that food is not just sustenance; it's an experience.
      It's about sharing stories, laughter, and creating memories around a table
      filled with delicious dishes. Our restaurant is designed to immerse you in
      the culture and ambiance of Turkey.
    </p>
  </>
);

const menuContent = (
  <>
    <p>
      Our menu at Aya is a culinary odyssey through the diverse and vibrant
      flavors of Turkey. From our savory kebabs, marinated to perfection and
      cooked over an open flame, to our indulgent baklava dripping with honey
      and nuts, each dish tells a story of tradition and craftsmanship.
    </p>
    <p className="mt-2">
      Explore our enticing meze selection, where fresh, local ingredients are
      transformed into an array of colorful and flavorful small plates. Dive
      into our aromatic stews and richly spiced rice dishes that capture the
      essence of Turkish home cooking.
    </p>
    <p className="mt-2">
      Whether you're craving the tender embrace of slow-cooked lamb or the
      freshness of Mediterranean salads, our menu invites you to embark on a
      tantalizing journey that celebrates the heart and soul of Turkish cuisine.
    </p>
    <div>
      <p className="mt-2 mb-6">Click the icon below to see our full menu.</p>
      <a className="inline-flex text-xl cursor-pointer" href="#">
        <i
          className="fa-solid fa-utensils fa-2x"
          style={{ color: "#ffffff" }}
        />
      </a>
    </div>
  </>
);

const reservationContent = (
  <>
    <p>
      Reserving your table at Aya is easy. You can make a reservation with us
      either by phone or email, whichever suits your preference. Simply give us
      a call by clicking the phone icon below or using the number located at the
      bottom of the page. Our friendly staff will assist you in selecting the
      perfect date and time for your dining experience.
    </p>
    <p className="mt-2">
      Alternatively, you can drop us an email at reservations@ayarestaurant.com,
      We will promptly confirm your booking, ensuring that your visit to Aya is
      a memorable one. We can't wait to welcome you to our restaurant and offer
      you an authentic taste of Turkey with warm hospitality and exquisite
      flavors.
    </p>
  </>
);

export const App = () => {
  return (
    <>
      <Nav />
      <ImageFullWidth img="/public/kebab.jpg" />
      <div id="aboutUs">
        <TextWithPhoto
          title="About Aya"
          content={aboutUsContent}
          img={adanakebab}
          imgPosition="right"
        />
      </div>
      <ImageFullWidth img="/public/baklava2.jpg" />
      <div id="menu">
        <TextWithPhoto
          title="Menu"
          img="/public/kebab3.jpg"
          content={menuContent}
          imgPosition="left"
        />
      </div>
      <ImageFullWidth img="/public/coals2.jpg" />
      <div id="reservations">
        <Reservations title="Reservations" content={reservationContent} />
      </div>
      {/* <ImageFullWidth img="/public/spices.jpg" /> */}
      <div id="directions">
        <Footer />
      </div>
    </>
  );
};
