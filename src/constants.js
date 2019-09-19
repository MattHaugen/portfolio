import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faApple } from "@fortawesome/free-brands-svg-icons";
import soaringCoverUrl from "./assets/soaring.jpg";

const constants = {
  books: {
    soaring: {
      title: "Soaring",
      image: soaringCoverUrl,
      description:
        "<p>A swashbuckling adventure set in the clouds, <i>Soaring</i> tells the story of the scavenger crew of the <i>Osprey</i> and the mysterious woman who turns their entire world upside down.</p><p>For a hundred years a poisonous layer of clouds has rendered the surface of the Earth uninhabitable, forcing humanity to find new ways to survive thousands of feet above the ground. The <i>Osprey</i> and her crew have scraped out their own small place in it all, scavenging useful materials from the surface while dodging the authoritarian Royal navy and avoiding dismemberment by the vicious mutant creatures now roaming the Earth. When the crew encounters a survivor who claims she can disperse the poisonous clouds and bring sunlight back to the planet, they embark on an epic journey to save the world.</p>",
      links: [
        {
          icon: faAmazon,
          text: "Buy on Amazon",
          url: "https://www.amazon.com/gp/product/1070861189"
        },
        {
          icon: faApple,
          text: "Buy on Apple Books",
          url: "https://books.apple.com/us/book/soaring/id1453352716"
        },
        {
          icon: faBook,
          text: "Buy on Barnes & Noble",
          url: "https://www.barnesandnoble.com/w?ean=2940161442340"
        }
      ]
    }
  }
};

export default constants;
