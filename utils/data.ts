import {
  ArticleType,
  QualityUpdate,
  Section,
  SuggestedArticleType,
  Support,
  VideoArticle,
} from "@/types";
import icon1 from "../assets/image/category/1.svg";
import icon2 from "../assets/image/category/2.svg";
import icon3 from "../assets/image/category/3.svg";
import icon4 from "../assets/image/category/4.svg";
import section1 from "../assets/image/section/1.svg";
import section2 from "../assets/image/section/2.svg";
import section3 from "../assets/image/section/3.svg";
import section4 from "../assets/image/section/4.svg";

import articleCoverImage from "../assets/image/video-article.png";

export const SUPPORT_CATEGORY: Support[] = [
  {
    name: "Knowledge base",
    id: 1,
    description:
      "Knowledge Base, Let us walk you through our help sections and services step-by-step.",
    url: "/knowledge-base",
    layout: "list",
    icon: icon1,
  },
  {
    name: "Specific guides",
    id: 2,
    description:
      "Specific guides, Let us walk you through our help sections and services step-by-step.",
    url: "/specific-guides",
    layout: "list",
    icon: icon2,
  },
  {
    name: "How-to videos",
    id: 3,
    description:
      "How-to videos, Let us walk you through our help sections and services step-by-step.",
    url: "/how-to-videos",
    layout: "video",
    icon: icon3,
  },
  {
    name: "Quality updates",
    id: 4,
    description:
      "Quality updates, Let us walk you through our help sections and services step-by-step.",
    url: "/quality-updates",
    layout: "updates",
    icon: icon4,
  },
];

export const SUPPORT_SUBCATEGORY: Section[] = [
  {
    name: "Account",
    id: 1,
    description: "account",
    url: "account",
    category: 1,
    icon: section1,
  },
  {
    name: "Billing",
    id: 2,
    description: "billing",
    url: "billing",
    category: 1,
    icon: section3,
  },
  {
    name: "General support",
    id: 3,
    description: "getting-started",
    url: "general-support",
    category: 1,
    icon: section2,
  },
  {
    name: "Data & Security",
    id: 4,
    description: "data-security",
    url: "data-security",
    category: 1,
    icon: section4,
  },
  {
    name: "Troubleshooting",
    id: 7,
    description: "troubleshooting",
    url: "troubleshooting",
    category: 2,
    icon: section3,
  },
  {
    name: "Partnership",
    id: 8,
    description: "troubleshooting partnership",
    url: "partnership",
    category: 2,
    icon: section4,
  },
  {
    name: "guides",
    id: 9,
    description: "troubleshooting",
    url: "guides",
    category: 3,
    icon: section1,
  },

  {
    name: "About Checkin",
    id: 14,
    description: "about checkin",
    url: "about-checkin",
    category: 2,
    icon: section2,
  },
];

export const SUPPORT_ARTICLES: ArticleType[] = [
  {
    id: 1,
    category: 1,
    section: 1,
    title: "How to create an account",
    description: "How to create an account",
    content:
      "piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde",
    url: "how-to-create-an-account",
  },
  {
    id: 2,
    category: 1,
    section: 1,
    title: "How to update an account",
    description: "How to create an account",
    content:
      "psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    url: "how-to-update-an-account",
  },
  {
    id: 3,
    category: 1,
    section: 1,
    title: "How to delete an account",
    description: "How to create an account",
    content:
      "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w",
    url: "how-to-delete-an-account",
  },
  {
    id: 4,
    category: 1,
    section: 1,
    title: "How to sell an account",
    description: "How to create an account",
    content:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages ",

    url: "how-to-sell-an-account",
  },
  {
    id: 5,
    category: 1,
    section: 1,
    title: "How to sell an account",
    description: "How to create an account",
    content: "How to create an account",

    url: "how-to-sell-an-account",
  },
  {
    id: 6,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "edefined chunks as necessary, making this the first true generator on th",
    url: "how-to-get-billing",
  },
  {
    id: 7,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "oing through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections ",
    url: "how-to-get-billing",
  },
  {
    id: 9,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "ce of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
    url: "how-to-get-billing",
  },
  {
    id: 8,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content: "1960s with the release of Letraset sheets containing Lorem Ipsum",
    url: "how-to-get-billing",
  },
  {
    id: 10,
    category: 1,
    section: 2,
    title: "how to get billing",
    description: "How to create an account",
    content:
      "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of e Finibus Bonorum et Malorum ",
    url: "how-to-get-billing",
  },
  {
    id: 11,
    category: 1,
    section: 4,
    title: "how to secure your account",
    description:
      "here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lore",
    content: "How to create an account",
    url: "how-to-secure-your-account",
  },
  {
    id: 12,
    category: 2,
    section: 14,
    title: "How checkin works",
    description: "How checkin works",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "how-checkin-works",
  },
  {
    id: 13,
    category: 2,
    section: 14,
    title: "Patnership",
    description: "Patner with checkin",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "patnership",
  },
  {
    id: 14,
    category: 2,
    section: 14,
    title: "Our community policy",
    description: "How checkin works",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "checkin-community-policy",
  },
  {
    id: 15,
    category: 4,
    section: 14,
    title: "Our safety concerns",
    description: "Our safety concerns",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    url: "our-safety-concerns",
  },

  {
    id: 16,
    category: 1,
    section: 3,
    title: "Unlocking Affordable Adventures",
    description:
      "Unlocking Affordable Adventures: A Guide to Budget-Friendly Travel with a Revolutionary AI-Driven Global Platform",
    content: `<h2><b>Unlocking Affordable Adventures: A Guide to Budget-Friendly Travel with a Revolutionary AI-Driven Global Platform</b></h2>
<p><b></b></p>
<p><span style="font-weight: 400;">Are you planning your next vacation but concerned about going over budget? With the launch of Usecheckin.com the first global AI traveling and tourism platform, budget-friendly travel is now easier than ever before. This platform is five times better than other online travel agencies, as it allows travelers to reserve accommodations, cars, adventures, and connect with other travelers all on the same platform.</span></p>
<p><span style="font-weight: 400;">So how can you plan a budget-friendly vacation using Usecheckin.com? Here are some tips to get you started:</span></p>
<ol>
<li><span style="font-weight: 400;"> Set a budget: Before you begin planning your trip, it's important to set a budget. This will help you determine how much you can spend on accommodations, transportation, activities, and meals. The Usecheckin.com platform offers a budget planner tool that can help you stay on track.</span></li>
</ol>
<ol start="2">
<li><span style="font-weight: 400;"> Book your accommodations: One of the great things about this new platform is that you can reserve accommodations directly through the platform. Whether you're looking for a budget-friendly hostel or a luxurious hotel, there are options available for every budget.</span></li>
</ol>
<ol start="3">
<li><span style="font-weight: 400;"> Rent a car: If you're planning on exploring your destination, renting a car can be a budget-friendly option. The Usecheckin.com platform allows you to rent a car directly through the platform, with options available for every budget.</span></li>
</ol>
<ol start="4">
<li><span style="font-weight: 400;"> Find adventure activities: No vacation is complete without some adventure activities. The Usecheckin.com platform offers a variety of activities, such as hiking, snorkeling, and zip-lining, at affordable prices.</span></li>
</ol>
<ol start="5">
<li><span style="font-weight: 400;"> Connect with other travelers: Traveling with others can be a great way to save money, as you can split the cost of accommodations and transportation. The Usecheckin.com platform allows you to connect with other travelers, so you can find a travel buddy or join a group tour.</span></li>
</ol>
<p><span style="font-weight: 400;">By using Usecheckin.com the first global AI traveling and tourism platform, you can plan a budget-friendly vacation without sacrificing quality or experiences. With the ability to reserve accommodations, cars, adventures, and connect with other travelers all on the same platform, you can save time and money while still having the trip of a lifetime.</span></p>`,
    url: "unlocking-affordable-adventures",
  },
  {
    id: 17,
    category: 1,
    section: 3,
    title: "Solo Travel Made Safe and Seamless",
    description:
      "Solo Travel Made Safe and Seamless: Embrace Usecheckin.com for Unforgettable Solo Adventures in 2023",
    content: `<div>
<h2><strong>Solo Travel Made Safe and Seamless: Embrace Usecheckin.com for Unforgettable Solo Adventures in 2023</strong></h2>
</div>
<p><span style="font-weight: 400;">Solo travel has become increasingly popular over the years, as more and more people seek to explore the world on their own terms. However, traveling solo can be daunting, especially for those who are new to it. Fortunately, there are now many tools and resources available to solo travelers, especially the travelers' favorite Usecheckin.com platform. In this blog post, we'll explore why solo travelers should use Usecheckin.com as their go-to platform for booking solo trips, highlighting its unique features and benefits.</span></p>
<p><span style="font-weight: 400;">First, let's take a look at what makes Usecheckin.com the travelers favorite. Usecheckin.com is a global AI traveling and tourism platform that offers a range of features and services to help travelers plan their trips. It is a one-stop-shop for booking flights, accommodations, cars, adventures, and more. What sets Usecheckin.com apart from other travel platforms is its focus on solo travelers. It is designed to cater specifically to the needs and preferences of solo travelers, making it an ideal choice for those looking to travel alone.</span></p>
<p><span style="font-weight: 400;">One of the standout features of Usecheckin.com is its app translation in over 50 languages. This is a huge advantage for solo travelers, especially those who are traveling to countries where they don't speak the language. With Usecheckin.com, travelers can easily navigate the platform and book their trips, no matter where they are in the world.</span></p>
<p><span style="font-weight: 400;">Another key benefit of using Usecheckin.com is its <strong>focus on safety</strong>. Solo travelers can feel vulnerable when traveling alone, but Usecheckin.com offers a range of safety features to help put their minds at ease. For example, the platform provides safety tips for guests, which cover everything from how to avoid pickpockets to what to do in case of an emergency. Usecheckin.com also has a 24-hour Safety Line that travelers can call in case of an emergency, as well as an emergency contact feature that allows travelers to easily share their travel plans with friends and family.</span></p>
<p><span style="font-weight: 400;">Now, let's take a look at some of the top destinations for solo travelers in 2023, as identified by Usecheckin.com. These destinations are based on a range of factors, including safety, affordability, and accessibility.</span></p>
<p><span style="font-weight: 400;"><strong>Thailand</strong> - Thailand is a popular destination for solo travelers, thanks to its beautiful beaches, delicious food, and friendly locals. It's also affordable, making it a great choice for budget-conscious travelers.</span></p>
<p><span style="font-weight: 400;"><strong>Japan</strong> - Japan is known for its unique culture and stunning landscapes. It's also considered one of the safest countries in the world, making it a great choice for solo travelers.</span></p>
<p><span style="font-weight: 400;"><strong>Italy</strong> - Italy is a popular destination for solo travelers, thanks to its rich history, beautiful architecture, and delicious food. It's also a great destination for solo travelers who love art and culture.</span></p>
<p><span style="font-weight: 400;"><strong>Spain</strong> - Spain is known for its vibrant culture, delicious food, and beautiful beaches. It's also one of the most affordable destinations in Europe, making it a great choice for budget-conscious travelers.</span></p>
<p><span style="font-weight: 400;"><strong>Australia</strong> - Australia is a popular destination for solo travelers, thanks to its beautiful landscapes, friendly locals, and laid-back culture. It's also one of the safest countries in the world, making it a great choice for solo travelers.</span></p>
<p><span style="font-weight: 400;"><strong>Costa Rica</strong> - Costa Rica is a popular destination for solo travelers who love adventure and nature. It's known for its beautiful beaches, lush rainforests, and abundant wildlife.</span></p>
<p><span style="font-weight: 400;"><strong>Portugal</strong> - Portugal is a great destination for solo travelers who love history, architecture, and beautiful landscapes. It's also one of the most affordable destinations in Europe.</span></p>
<p><span style="font-weight: 400;"><strong>Vietnam</strong> - Vietnam is a popular destination for solo travelers, thanks to its rich history, beautiful landscapes, and delicious food. It's also one of the most affordable destinations in Asia.</span></p>
<h4><span style="font-weight: 400;"><strong>Canada</strong> - Canada is a great destination for solo travelers.</span></h4>`,
    url: "solo-travel-made-safe-and-seamless",
  },
  {
    id: 18,
    category: 1,
    section: 3,
    title: "Unlocking Unforgettable Group Travel Experiences",
    description:
      "Unlocking Unforgettable Group Travel Experiences: Discover the Benefits of Usecheckin.com for Families and Friends",
    content: `<div>
<h2><strong>Unlocking Unforgettable Group Travel Experiences: Discover the Benefits of Usecheckin.com for Families and Friends</strong></h2>
</div>
<p><span style="font-weight: 400;">Traveling is a fantastic way to spend time with loved ones, explore new places, and create lasting memories. However, planning and booking a trip can often be a daunting and overwhelming task, especially with the plethora of online booking platforms available. </span></p>
<p><span style="font-weight: 400;">Among these platforms, Usecheckin.com stands out as the first global AI one-stop-shop traveling and tourism platform that offers a unique experience to its users. In this blog post, we will explore the reasons why families, friends, and other travelers find more value, more space, and more fun when traveling on Usecheckin.com compared to other online platforms.</span></p>
<h2><strong>Easy to Navigate User Interface</strong></h2>
<p><span style="font-weight: 400;">One of the most significant advantages of Usecheckin.com is its user-friendly interface. The platform is designed to be simple and easy to use, making it accessible to everyone, including those who are not tech-savvy. </span></p>
<p><span style="font-weight: 400;">The platform's design is intuitive, and users can quickly find the information they need with just a few clicks. The search filters and sorting options are customizable, making it easier for travelers to find the perfect accommodations and activities that match their preferences.</span></p>
<h2><strong>Wide Range of Accommodations, Cars and Adventures</strong></h2>
<p><span style="font-weight: 400;">Usecheckin.com provides a wide range of accommodations, cars, adventures and social connection options, making it easy for families, friends, and other travelers to find what they need. </span></p>
<p><span style="font-weight: 400;">On Usecheckin.com you will find numerous hotels, vacation rentals, short term rentals and other types of accommodation and car providers, ensuring that travelers have a wide range of options to choose from. In addition, Usecheckin.com has an extensive collection of activities that are suitable for families, couples, solo travelers, and groups.</span></p>
<h2><strong>Competitive Prices and Offers</strong></h2>
<p><span style="font-weight: 400;">Another significant advantage of Usecheckin.com is its competitive pricing. The platform offers some of the best prices for accommodations, cars and adventures, ensuring that travelers get the most value for their money. </span></p>
<p><span style="font-weight: 400;">Usecheckin.com also regularly offers discounts and promotions, making it even more affordable for travelers to book their trips.</span></p>
<h2><strong>Personalized Recommendations</strong></h2>
<p><span style="font-weight: 400;">Usecheckin.com uses AI technology to provide personalized recommendations to its users. The platform analyzes user data, such as past bookings, search history, and preferences, to suggest accommodations and activities that are tailored to their needs. </span></p>
<p><span style="font-weight: 400;">This feature ensures that travelers get recommendations that are relevant to their interests and preferences, making their travel experience more enjoyable and memorable.</span></p>
<h2><strong>24/7 Customer Support</strong></h2>
<p><span style="font-weight: 400;">Usecheckin.com offers 24/7 customer support to its users, ensuring that they receive assistance whenever they need it. The platform's customer support team is available via phone, email, and chat, making it easy for travelers to get the help they need. </span></p>
<p><span style="font-weight: 400;">This feature is particularly useful for families, friends, and other travelers who may have questions or concerns about their bookings.</span></p>
<p><span style="font-weight: 400;">In conclusion, Usecheckin.com is the ideal platform for families, friends, and other travelers who are looking for a unique and enjoyable travel experience. </span></p>
<p><span style="font-weight: 400;">With its easy-to-use interface, wide range of accommodations and activities, competitive prices and offers, personalized recommendations, and 24/7 customer support, Usecheckin.com provides travelers with more value, more space, and more fun than other online booking platforms.</span></p>
`,
    url: "unlocking-unforgettable-group-travel-experiences",
  },
  {
    id: 19,
    category: 1,
    section: 3,
    title: "Mastering Calendar Management on Usecheckin.com",
    description:
      "Mastering Calendar Management on Usecheckin.com: A Comprehensive Guide for Hosts",
    content: `<div>
<h2><strong>Mastering Calendar Management on Usecheckin.com: A Comprehensive Guide for Hosts
</strong></h2>
</div>
<h2><strong>Introduction </strong></h2>
<p><span style="font-weight: 400;">As a host on Usecheckin.com, one of the key elements to successfully managing your vacation rental is an up-to-date and accurate calendar. The calendar serves as the backbone of your hosting journey, allowing you to control availability, monitor bookings, and optimize your revenue potential. </span></p>
<p><span style="font-weight: 400;">In this blog post, we will provide a detailed guide on updating your calendar on Usecheckin.com, including how to block or unblock dates, and deciphering the various indicators or symbols that appear on your calendar.</span></p>
<h4><b>Understanding the Calendar Indicators </b></h4>
<p><span style="font-weight: 400;">Popular Days The "popular days" indicator highlights dates that are in high demand and have a higher likelihood of getting booked. Keep an eye on these dates as they present excellent opportunities to maximize your occupancy and revenue.</span></p>
<h4><span style="font-weight: 400;"><strong>Blocked Dates </strong> </span></h4>
<p><span style="font-weight: 400;">When you block certain dates on your calendar, they will be marked as "blocked." This feature allows you to reserve specific dates exclusively for personal use or for any other reasons you may have. Blocking dates ensures that your property remains unavailable for bookings during those periods.</span></p>
<h4><span style="font-weight: 400;"><strong>Blocked Hours </strong> </span></h4>
<p><span style="font-weight: 400;">In addition to blocking entire days, Usecheckin.com also provides the option to block specific hours within a day. This can be useful if you want to restrict check-in or check-out times or need to allocate time for cleaning and maintenance between guests.</span></p>
<h4><span style="font-weight: 400;"><strong>Modify Dates </strong> </span></h4>
<p><span style="font-weight: 400;">The "modify dates" indicator allows you to make adjustments to the existing booking dates without canceling the reservation. It provides flexibility to accommodate changes requested by guests, such as extending or shortening their stay.</span></p>
<h4><span style="font-weight: 400;"><strong>Low Booking Ratio </strong> </span></h4>
<p><span style="font-weight: 400;">The "low booking ratio" indicator highlights periods with a lower than average booking rate. It can help you identify dates that may need special attention, such as adjusting pricing or offering promotional deals to attract more guests during these periods.</span></p>
<h3><strong>Updating Your Calendar </strong></h3>
<h4><span style="font-weight: 400;"><strong>Blocking Dates </strong> </span></h4>
<p><span style="font-weight: 400;">To block specific dates or hours, go to your Usecheckin.com host dashboard and navigate to the calendar section. Select the desired dates or hours and choose the "Block" option. This will ensure that your property is unavailable for bookings during the blocked period.</span></p>
<h4><span style="font-weight: 400;"><strong>Unblock Dates </strong> </span></h4>
<p><span style="font-weight: 400;">If you need to make previously blocked dates available for bookings, access your calendar, locate the blocked dates, and select the "Unblock" option. This will open up those dates for potential guests to make reservations.</span></p>
<h4><span style="font-weight: 400;"><strong>Modifying Dates </strong> </span></h4>
<p><span style="font-weight: 400;">In case you need to adjust the dates of an existing booking, refer to the reservation details on your host dashboard. Find the "Modify Dates" option and follow the prompts to make the necessary changes while keeping the reservation intact.</span></p>
<h3><b>Optimizing Your Calendar for Success</b></h3>
<h4><span style="font-weight: 400;"><strong>Regularly Update Your Availability </strong> </span></h4>
<p><span style="font-weight: 400;">It is crucial to keep your calendar updated to reflect accurate availability. Promptly block or unblock dates as needed to ensure potential guests can see your property's availability accurately.</span></p>
<h4><span style="font-weight: 400;"><strong>Consider Seasonal Demand </strong> </span></h4>
<p><span style="font-weight: 400;">Analyze the popular days and low booking ratio indicators on your calendar to identify trends in seasonal demand. Adjust your pricing and availability accordingly to capitalize on peak seasons and attract more guests during slower periods.</span></p>
<h4><span style="font-weight: 400;"><strong>Communicate with Guests </strong> </span></h4>
<p><span style="font-weight: 400;">Use the exceptional chat system on Usecheckin.com to stay in touch with guests, discuss potential modifications, and address any inquiries or concerns. Prompt and clear communication can enhance guest satisfaction and increase the likelihood of positive reviews.</span></p>
<h4><b>Conclusion </b></h4>
<p><span style="font-weight: 400;">Managing your calendar effectively on Usecheckin.com is vital for optimizing your vacation rental's performance. By understanding the various indicators and using the available features to block, unblock, and modify dates, you can ensure that your property is always accurately reflected on the platform. </span></p>
<p><span style="font-weight: 400;">Regularly updating your calendar and adapting to seasonal demand will help you attract more guests and enhance your hosting success. Remember, clear communication with guests is key to providing a positive guest experience. Happy hosting!</span></p>
`,
    url: "mastering-calendar-management-on-usecheckin",
  },
  {
    id: 20,
    category: 1,
    section: 3,
    title: "Making a reservation",
    description:
      "The Ultimate Guide to Making Reservations on Usecheckin.com: Book Accommodations, Cars, and Adventures for Your Dream Vacation",
    content: `<div>
<h2><strong>The Ultimate Guide to Making Reservations on Usecheckin.com

</strong></h2>
</div>
<h3><strong>Introduction:</strong></h3>
<p><span style="font-weight: 400;">Planning a vacation can be an exciting but often overwhelming experience. With Usecheckin.com, your journey to the perfect getaway becomes seamless and convenient. In this comprehensive blog post, we will walk you through the process of making reservations on Usecheckin.com, whether you're booking accommodations, cars, or adventures, all from the same host or from different hosts. Let's dive in!</span></p>
<h3><b>Booking Accommodations, Cars, and Adventures from the Same Host:</b></h3>
<h4><strong>Search for Listings</strong></h4>
<p><span style="font-weight: 400;">Begin by visiting Usecheckin.com and entering your desired destination, travel dates, and number of guests. Browse through the available listings, and filter your search based on your preferences, such as property type, amenities, and price range.</span></p>
<h4><span style="font-weight: 400;"><strong>Select Your Accommodation</strong></span></h4>
<p><span style="font-weight: 400;">Once you find the perfect accommodation, click on the listing to view more details, including photos, descriptions, and guest reviews. Ensure that the accommodation meets your requirements and aligns with your travel needs.</span></p>
<h4><span style="font-weight: 400;"><strong>Reserve Accommodation</strong></span></h4>
<p><span style="font-weight: 400;">Click on the "Book" or "Reserve" button on the listing page. Review the booking details, including dates, pricing, and any additional fees or requirements. Provide the necessary information, such as the number of guests, and proceed to confirm your reservation.</span></p>
<h4><span style="font-weight: 400;"><strong>Add Cars and Adventures</strong></span></h4>
<p><span style="font-weight: 400;">Some hosts on Usecheckin.com offer additional services, such as car rentals and adventure experiences. If available, explore these options on the host's listing page. Follow the same process as with accommodations to reserve cars and adventures.</span></p>
<h3><b>Booking Accommodations, Cars, and Adventures from Different Hosts:</b></h3>
<h4><span style="font-weight: 400;"><strong>Multiple Reservations</strong></span></h4>
<p><span style="font-weight: 400;">If you prefer to book accommodations, cars, and adventures from different hosts, you can do so by repeating the reservation process for each component of your trip.</span></p>
<h4><strong>Open Multiple Listings</strong></h4>
<p><span style="font-weight: 400;">Search for each desired listing separately, ensuring you select accommodations, cars, and adventures that suit your preferences. Open each listing in different tabs or windows to easily switch between them during the reservation process.</span></p>
<h4><strong>Reserve Separately</strong></h4>
<p><span style="font-weight: 400;">Start with one listing, follow the steps mentioned earlier to reserve accommodations, cars, and adventures from that particular host. Once the reservation is confirmed, move on to the next listing and repeat the process with the other host.</span></p>
<h3><b>Tips for a Smooth Reservation Experience</b></h3>
<h4><strong>Communication with Hosts</strong></h4>
<p><span style="font-weight: 400;">Utilize the exceptional chat system provided by Usecheckin.com to communicate with hosts. Clarify any queries or special requirements you may have before making your reservation. This helps ensure a pleasant and tailored experience.</span></p>
<h4><strong>Review Policies and Terms</strong></h4>
<p><span style="font-weight: 400;">Familiarize yourself with the cancellation policies, house rules, and any specific terms and conditions set by each host. Understanding these details will help you make informed decisions and avoid any surprises later on.</span></p>
<h4><strong>Payment and Security</strong></h4>
<p><span style="font-weight: 400;">Usecheckin.com provides secure payment processing to protect your financial information. Be sure to provide accurate payment details and review the platform's policies regarding refunds and dispute resolution.</span></p>
<h4><b>Conclusion</b></h4>
<p><span style="font-weight: 400;">Making reservations on Usecheckin.com opens up a world of possibilities for your dream vacation. Whether you choose to book accommodations, cars, and adventures from the same host or from different hosts, the platform offers a seamless and efficient process. Remember to communicate with hosts, review policies, and enjoy the peace of mind that comes with secure transactions. Start planning your next adventure on Usecheckin.com and create unforgettable memories.</span></p>
`,
    url: "making-a-reservation",
  },
];

export const SUGGESTED_ARTICLES: SuggestedArticleType[] = [
  {
    id: 1,
    title: "About Checkin",
    articles: SUPPORT_ARTICLES.filter((article) => article.category === 2),
  },
  {
    id: 2,
    title: "Your account",
    articles: SUPPORT_ARTICLES.filter(
      (article) => article.category === 1
    ).slice(0, 5),
  },
  {
    id: 3,
    title: "Safety",
    articles: SUPPORT_ARTICLES.filter((article) => article.category === 4),
  },
  {
    id: 4,
    title: "Claims and damages",
    articles: SUPPORT_ARTICLES.filter((article) => article.category === 2),
  },
];

export const SAMPLE_ARTICLE = `

    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
      <p class="lead">Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
       <figure>
        <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" />
        <figcaption>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</figcaption>
      </figure>
      <p>By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.</p>
      <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
      <blockquote>
        <p>Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?</p>
      </blockquote>
      <p>We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.</p>
      <p>The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles.</p>
      <p>It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
      <pre><code class="language-html">&lt;article class="prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
&lt;/article&gt;
</code></pre>
      <p>For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md">read the documentation</a>.</p>
      <hr />
      <h2>What to expect from here on out</h2>
      <p>What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
        <li>We want everything to look good out of the box.</li>
        <li>Really just the first reason, that's the whole point of the plugin.</li>
        <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3>Typography should be easy</h3>
      <p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote>
      <p>It's probably important that images look okay here by default as well:</p>
     
      <p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
      <ul>
        <li>So here is the first item in this list.</li>
        <li>In this example we're keeping the items short.</li>
        <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2>What if we stack headings?</h2>
      <h3>We should make sure that looks good, too.</h3>
      <p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
      <h3>When a heading comes after a paragraph …</h3>
      <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
      <ul>
        <li>
          <p><strong>I often do this thing where list items have headings.</strong></p>
          <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
          <p>I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way.</p>
        </li>
        <li>
          <p><strong>Since this is a list, I need at least two items.</strong></p>
          <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles.</p>
        </li>
        <li>
          <p><strong>It's not a bad idea to add a third item either.</strong></p>
          <p>I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it.</p>
        </li>
      </ul>
      <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
      <h2>Code should look okay by default.</h2>
      <p>I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax highlighting.</p>
      <p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
      <pre><code class="language-js">module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
</code></pre>
      <p>Hopefully that looks good enough to you.</p>
      <h3>What about nested lists?</h3>
      <p>Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work.</p>
      <ol>
        <li>
          <strong>Nested lists are rarely a good idea.</strong>
          <ul>
            <li>You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
          </ul>
        </li>
        <li>
          <strong>Since we need to have more items, here's another one.</strong>
          <ul>
            <li>I'm not sure if we'll bother styling more than two levels deep.</li>
            <li>Two is already too much, three is guaranteed to be a bad idea.</li>
            <li>If you nest four levels deep you belong in prison.</li>
          </ul>
        </li>
        <li>
          <strong>Two items isn't really a list, three is good though.</strong>
          <ul>
            <li>Again please don't nest lists if you want people to actually read your content.</li>
            <li>Nobody wants to look at this.</li>
            <li>I'm upset that we even have to bother styling this.</li>
          </ul>
        </li>
      </ol>
      <p>The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too.</p>
      <ul>
        <li>
          <p><strong>For example, here's another nested list.</strong></p>
          <p>But this time with a second paragraph.</p>
          <ul>
            <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
            <li>Because they are only one line each</li>
          </ul>
        </li>
        <li>
          <p><strong>But in this second top-level list item, they will.</strong></p>
          <p>This is especially annoying because of the spacing on this paragraph.</p>
          <ul>
            <li>
              <p>As you can see here, because I've added a second line, this list item now has a <code>&lt;p&gt;</code> tag.</p>
              <p>This is the second line I'm talking about by the way.</p>
            </li>
            <li><p>Finally here's another list item so it's more like a list.</p></li>
          </ul>
        </li>
        <li><p>A closing list item, but with no nested list, because why not?</p></li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2>There are other elements we need to style</h2>
      <p>I almost forgot to mention links, like <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.</p>
      <p>We even included table styles, check it out:</p>
      <table>
        <thead>
          <tr>
            <th>Wrestler</th>
            <th>Origin</th>
            <th>Finisher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bret "The Hitman" Hart</td>
            <td>Calgary, AB</td>
            <td>Sharpshooter</td>
          </tr>
          <tr>
            <td>Stone Cold Steve Austin</td>
            <td>Austin, TX</td>
            <td>Stone Cold Stunner</td>
          </tr>
          <tr>
            <td>Randy Savage</td>
            <td>Sarasota, FL</td>
            <td>Elbow Drop</td>
          </tr>
          <tr>
            <td>Vader</td>
            <td>Boulder, CO</td>
            <td>Vader Bomb</td>
          </tr>
          <tr>
            <td>Razor Ramon</td>
            <td>Chuluota, FL</td>
            <td>Razor's Edge</td>
          </tr>
        </tbody>
      </table>
      <p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
      <h3>Sometimes I even use <code>code</code> in headings</h3>
      <p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.</p>
      <p>
        Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it.
      </p>
      <h4>We haven't used an <code>h4</code> yet</h4>
      <p>But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or <code>h6</code>.</p>
      <p>We don't style them at all out of the box because <code>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.</p>
      <h3>We still need to think about stacked headings though.</h3>
      <h4>Let's make sure we don't screw that up with <code>h4</code> elements, either.</h4>
      <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
      <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
      <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
    </div>


`;

export const VIDEO_ARTICLES: VideoArticle[] = [
  {
    id: 1,
    section: 1,
    title: "Creating a New Account",
    description: "Step by step guide on creating a new account",
    url: "creating-a-new-account",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Creating a New Account",
    cover: articleCoverImage,
  },
  {
    id: 2,
    section: 1,
    title: "Updating Account Information",
    description: "How to update your account information",
    url: "updating-account-information",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Updating Account Information",
    cover: articleCoverImage,
  },
  {
    id: 3,
    section: 2,
    title: "Removing an Account",
    description: "Guide to deleting your account",
    url: "removing-an-account",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Removing an Account",
    cover: articleCoverImage,
  },
  {
    id: 4,
    section: 1,
    title: "Selling Your Account",
    description: "How to sell your account safely",
    url: "selling-your-account",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Selling Your Account",
    cover: articleCoverImage,
  },
  {
    id: 5,
    section: 2,
    title: "Understanding Billing",
    description: "Overview of the billing process",
    url: "understanding-billing",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Understanding Billing",
    cover: articleCoverImage,
  },
  {
    id: 6,
    section: 3,
    title: "Billing Details",
    description: "How to access and review your billing details",
    url: "billing-details",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Billing Details",
    cover: articleCoverImage,
  },
  {
    id: 7,
    section: 4,
    title: "Billing Troubleshooting",
    description: "Solving common billing issues",
    url: "billing-troubleshooting",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Billing Troubleshooting",
    cover: articleCoverImage,
  },
  {
    id: 8,
    section: 5,
    title: "Advanced Billing Features",
    description: "Exploring advanced billing options and features",
    url: "advanced-billing-features",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Advanced Billing Features",
    cover: articleCoverImage,
  },
  {
    id: 9,
    section: 6,
    title: "Contacting Billing Support",
    description: "How to get help with billing-related questions",
    url: "contacting-billing-support",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Contacting Billing Support",
    cover: articleCoverImage,
  },
  {
    id: 10,
    section: 7,
    title: "Billing FAQ",
    description: "Frequently asked questions about billing",
    url: "billing-faq",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Billing FAQ",
    cover: articleCoverImage,
  },
  {
    id: 11,
    section: 8,
    title: "Managing Payment Methods",
    description: "Adding, updating, and removing payment methods",
    url: "managing-payment-methods",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Managing Payment Methods",
    cover: articleCoverImage,
  },
  {
    id: 12,
    section: 9,
    title: "Understanding Invoices",
    description: "How to read and interpret your invoices",
    url: "understanding-invoices",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Understanding Invoices",
    cover: articleCoverImage,
  },
  {
    id: 13,
    section: 10,
    title: "Requesting Billing Adjustments",
    description: "How to request adjustments to your billing",
    url: "requesting-billing-adjustments",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Requesting Billing Adjustments",
    cover: articleCoverImage,
  },
  {
    id: 14,
    section: 11,
    title: "Resolving Billing Disputes",
    description: "Steps to take when you have a billing dispute",
    url: "resolving-billing-disputes",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Resolving Billing Disputes",
    cover: articleCoverImage,
  },
  {
    id: 15,
    section: 14,
    title: "Billing Security",
    description: "Keeping your billing information safe",
    url: "billing-security",
    videoUrl: "https://www.youtube.com/watch?v=7e90gBu4pas",
    content: "Billing Security",
    cover: articleCoverImage,
  },
];

export const QUALITY_UPDATES: QualityUpdate[] = [
  {
    id: 1,
    title: "Improvement to adventure API",
    description:
      "Use a password manager to store the unique and complex passwords that are hard to remember.",
    url: "improvement-to-adventure-api",
    content: "Improvement to adventure API",
    createdAt: "January 14th, 2022",
  },
];
