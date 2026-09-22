import ncgos_blog1 from '../assets/ann1.png';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "celebrating-our-31st-anniversary-and-graduation-ceremony",
    title: "Celebrating Our 31st Anniversary and Graduation Ceremony",
    date: "July 15, 2026",
    author: "Admin",
    category: "Events & Celebrations",
    excerpt: "What a milestone! New Creation Group of Schools recently celebrated our 31st Anniversary alongside an unforgettable Graduation Ceremony. Join us as we reflect on over three decades of educational excellence and bid farewell to our outstanding graduating class of 2026.",
    content: `
      <p>What a spectacular milestone! New Creation Group of Schools recently celebrated our grand 31st Anniversary alongside an emotional and unforgettable Graduation Ceremony. It was a day filled with joy, reflection, and immense pride as we looked back on over three decades of unwavering commitment to educational excellence.</p>
      
      <h2>31 Years of Impact</h2>
      <p>Since our founding, New Creation has been dedicated to nurturing young minds and shaping the leaders of tomorrow. Over the past 31 years, we have grown from a small learning center into a premier educational institution, complete with state-of-the-art facilities and a vibrant community. This anniversary is not just a celebration of time, but a celebration of the countless students, teachers, and parents who have walked through our doors and contributed to our legacy.</p>
      
      <p>The anniversary festivities featured incredible performances by our student choir and drama club, showcasing the rich, holistic talent that we cultivate beyond standard academics. Alumni from various graduating classes returned to share inspiring stories of how their time at New Creation laid the foundation for their successful careers.</p>
      
      <h2>Honoring the Graduating Class of 2026</h2>
      <p>The highlight of the event was undoubtedly the Graduation Ceremony. Watching our seniors cross the stage in their caps and gowns was a profoundly moving experience. This graduating class has shown remarkable resilience, academic brilliance, and outstanding character.</p>
      
      <p>To the Class of 2026: As you step out into the world, remember the core values instilled in you here. You are equipped not just with academic knowledge, but with the moral compass and emotional strength needed to make a real difference in the world. Congratulations to all our graduates, and happy 31st Anniversary to the entire New Creation family!</p>
    `,
    image: ncgos_blog1,
    featured: true
  }
];
