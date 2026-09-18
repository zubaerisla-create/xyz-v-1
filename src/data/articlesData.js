export const articlesData = [
  {
    id: "building-scalable-web-apps-nextjs",
    title: "My Battle-Tested Architecture for Building Fast, SEO-Optimized Next.js Applications",
    subtitle: "Real-world lessons from scaling Next.js apps with hybrid rendering, smart caching, and Core Web Vitals optimizations.",
    excerpt: "Learn best practices for server-side rendering, hybrid static generation, and caching strategies to handle high traffic seamlessly.",
    category: "Web Dev",
    date: "Sep 12, 2025",
    readTime: "6 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    tags: ["Next.js", "React", "SEO", "Performance", "Web Development"],
    content: [
      {
        type: "paragraph",
        text: "When I first started building enterprise web platforms like Transwestern and Doing-Stand, one realization became crystal clear: users don't wait for slow websites, and search engines penalize them. In modern web engineering, performance and SEO aren't features you add at the end—they must be baked into your core architecture from day one."
      },
      {
        type: "quote",
        text: "Performance isn't just about loading pixels quickly; it's about respecting your user's time and attention."
      },
      {
        type: "heading",
        text: "1. The Rendering Paradox: SSR, SSG, or ISR?"
      },
      {
        type: "paragraph",
        text: "One of Next.js's greatest strengths is its hybrid rendering capability. But choosing the wrong strategy for a page can introduce server lag or stale content issues. Here is my rule of thumb after shipping dozens of production routes:"
      },
      {
        type: "list",
        items: [
          "Static Site Generation (SSG): Perfect for landing pages, documentation, and blog posts where content rarely changes. These load instantaneously from CDN edges.",
          "Incremental Static Revalidation (ISR): My favorite pattern for dynamic catalogs. It serves cached static HTML to visitors while re-generating the page in the background every N seconds.",
          "Server-Side Rendering (SSR): Best reserved for personalized user dashboards or real-time search pages where data must be 100% up-to-the-second fresh."
        ]
      },
      {
        type: "heading",
        text: "2. Caching Without Stale Data Nightmares"
      },
      {
        type: "paragraph",
        text: "Caching is a double-edged sword. If you cache too aggressively, users see outdated info; if you don't cache, your database CPU spikes under load spikes. By combining React Query/SWR on the client with Stale-While-Revalidate headers on Next.js API endpoints, we achieved zero-lag navigation while maintaining 99.9% cache hit ratios."
      },
      {
        type: "code",
        language: "javascript",
        code: `// Express / Next API Route Cache Control
export async function GET(request) {
  const data = await fetchLatestInsights();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}`
      },
      {
        type: "heading",
        text: "3. Crushing Core Web Vitals (LCP & CLS)"
      },
      {
        type: "paragraph",
        text: "Images are usually the primary culprit behind poor Largest Contentful Paint (LCP). By using Next.js <Image /> with explicit aspect ratios, WebP/AVIF auto-conversions, and lazy loading for below-the-fold assets, we slashed LCP times down to 0.8 seconds and eliminated Cumulative Layout Shifts (CLS) entirely."
      },
      {
        type: "takeaway",
        text: "Key Takeaways: Always lazy-load non-critical components, enforce strict font preloading, and test every build on throttled 3G mobile devices before deploying to production."
      }
    ]
  },
  {
    id: "real-time-mobile-apps-flutter-firebase",
    title: "How I Handled Millions of Live Updates in Mobile Apps Without Draining Battery",
    subtitle: "Behind the scenes of ScoreLivePro and FastChat: Managing WebSocket lifecycles, FCM pushes, and local SQLite sync.",
    excerpt: "A deep dive into architecture patterns for real-time websocket messaging and Firebase Cloud Messaging in production mobile apps.",
    category: "Mobile Dev",
    date: "Aug 28, 2025",
    readTime: "8 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "Full Stack & Mobile Engineer",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    tags: ["Flutter", "React Native", "Firebase", "WebSockets", "Mobile"],
    content: [
      {
        type: "paragraph",
        text: "Building mobile apps for live sports scores (ScoreLivePro) and instant messaging (FastChat) presented a unique engineering challenge: users expect instant, sub-second updates, but mobile operating systems aggressively kill background connections to save battery power."
      },
      {
        type: "quote",
        text: "In mobile development, network connectivity is an unreliable luxury. Your app must thrive off offline-first architectures."
      },
      {
        type: "heading",
        text: "1. Managing WebSocket Lifecycles Across Wi-Fi and Cellular"
      },
      {
        type: "paragraph",
        text: "When a user walks into an elevator or switches from Wi-Fi to 5G, WebSocket connections silently drop. If not handled gracefully, users miss crucial match goals or chat messages. Here is the connection manager pattern I implemented:"
      },
      {
        type: "list",
        items: [
          "Exponential Backoff Reconnection: Prevents hammering servers when the device is completely offline.",
          "Heartbeat Ping/Pong: Sends lightweight 4-byte ping packets every 30 seconds to prevent mobile carriers from closing idle sockets.",
          "Local SQLite Storage: All incoming websocket frames write directly to local storage first, ensuring offline availability even if the connection drops."
        ]
      },
      {
        type: "heading",
        text: "2. Push Notifications That Actually Deliver (FCM Integration)"
      },
      {
        type: "paragraph",
        text: "When the app is in the background or killed, WebSockets cannot run. That's where Firebase Cloud Messaging (FCM) takes over. By sending high-priority data payloads rather than plain notification popups, the app silently processes incoming data and formats a rich local notification."
      },
      {
        type: "code",
        language: "dart",
        code: `// Flutter background FCM Handler
@pragma('vm:entry-point')
Future<void> firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  await LocalDatabase.saveMessage(message.data);
  await NotificationService.showNotification(message);
}`
      },
      {
        type: "takeaway",
        text: "Key Takeaways: Offload heavy JSON parsing off the UI thread using Isolate/Web Workers, use local databases for instant UI rendering, and always implement idempotency keys to prevent duplicate push alerts."
      }
    ]
  },
  {
    id: "system-architecture-microservices-rest",
    title: "Designing Node.js & Express Backends That Don't Break at 2 AM",
    subtitle: "Practical patterns for clean controller-service-repository division, Prisma ORM queries, and Redis caching.",
    excerpt: "How to structure Node.js & Express API servers with middleware layers, Prisma ORM, and Redis caching for high availability.",
    category: "System Architecture",
    date: "Jul 15, 2025",
    readTime: "7 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Backend"],
    content: [
      {
        type: "paragraph",
        text: "There is nothing worse for a software engineer than waking up at 2 AM to a crashing server because of an unhandled promise rejection or database connection exhaustion. Over the past few years, I’ve refined a Node.js & Express architecture that stays solid under heavy traffic spikes."
      },
      {
        type: "quote",
        text: "Clean code is not about writing fewer lines of code; it's about making future debugging effortless."
      },
      {
        type: "heading",
        text: "1. The Strict 3-Tier Layered Pattern"
      },
      {
        type: "paragraph",
        text: "A common mistake in Express projects is putting database queries inside route handlers. To keep code modular and testable, every feature follows three strict layers:"
      },
      {
        type: "list",
        items: [
          "Controllers: Only validate request payloads (using Zod) and send HTTP responses.",
          "Services: Contain all pure business logic, calculations, and permission checks.",
          "Repositories / Prisma ORM: Handle all database queries and transactions."
        ]
      },
      {
        type: "heading",
        text: "2. Redis as a Shield for PostgreSQL"
      },
      {
        type: "paragraph",
        text: "Repeated database queries for static or semi-static data (like user profiles, settings, or project lists) waste database CPU cycles. By implementing a Redis read-through cache layer, database load drops by up to 80%."
      },
      {
        type: "code",
        language: "typescript",
        code: `// Redis Read-Through Cache Utility
async function getCachedData<T>(key: string, fetcher: () => Promise<T>, ttl = 3600): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);
  
  const freshData = await fetcher();
  await redis.set(key, JSON.stringify(freshData), 'EX', ttl);
  return freshData;
}`
      },
      {
        type: "takeaway",
        text: "Key Takeaways: Enforce global error-handling middleware, configure connection pooling limits for PostgreSQL, and never commit API keys into source control."
      }
    ]
  },
  {
    id: "robotics-and-embedded-iot-systems",
    title: "From Code to Circuit: What Robotics Taught Me About Software Engineering",
    subtitle: "How working with microcontrollers, C++ interrupts, and sensor noise changed how I write web code.",
    excerpt: "My journey with C/C++ microcontrollers, sensor telemetry, and motor control integration during Robodemy robotics practice.",
    category: "Robotics",
    date: "May 20, 2025",
    readTime: "5 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "Full Stack & Hardware Enthusiast",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80",
    tags: ["Robotics", "Embedded C++", "IoT", "Sensors", "Hardware"],
    content: [
      {
        type: "paragraph",
        text: "In web development, if a variable is null, you get a console error. In robotics, if your code delays for 50 milliseconds too long, your physical rover crashes into a wall! Working on hardware circuits and microcontroller programming during my time at Robodemy gave me a fundamental appreciation for execution efficiency."
      },
      {
        type: "quote",
        text: "Hardware teaches you that resources are finite. That mindset transforms how you optimize software."
      },
      {
        type: "heading",
        text: "1. Filtering Real-World Noise"
      },
      {
        type: "paragraph",
        text: "Unlike clean digital APIs, physical sensors (ultrasonic distance sensors, gyroscopes, IR sensors) constantly emit noisy data due to electrical interference. Implementing mathematical Moving Average and Kalman filters taught me data sanitization techniques that I now apply to web data streams."
      },
      {
        type: "heading",
        text: "2. Non-Blocking Execution with Hardware Interrupts"
      },
      {
        type: "paragraph",
        text: "Using delay() in microcontrollers freezes the CPU. Using Interrupt Service Routines (ISRs) allows the processor to respond instantly when an obstacle sensor triggers, while keeping main loops free for telemetry logging."
      },
      {
        type: "takeaway",
        text: "Key Takeaways: Always isolate motor power supplies from microcontroller logic power, design for failure recovery, and respect hardware memory constraints."
      }
    ]
  },
  {
    id: "mastering-modern-ui-ux-design-systems",
    title: "Crafting Premium Glassmorphic UIs That Wow Users at First Glance",
    subtitle: "Designing dark mode interfaces with Tailwind CSS, micro-interactions, and accessibility in mind.",
    excerpt: "Designing modern web interfaces using vibrant colors, glassmorphism, fluid typography, and subtle micro-animations.",
    category: "Web Dev",
    date: "Oct 04, 2025",
    readTime: "6 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "Full Stack Engineer & UI Designer",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80",
    tags: ["UI/UX", "Tailwind CSS", "Framer Motion", "Design System"],
    content: [
      {
        type: "paragraph",
        text: "Users judge your web application within the first 3 seconds of landing on the page. A plain, generic interface creates a perception of an incomplete product, while a sleek, modern UI with polished micro-interactions instantly builds trust and engagement."
      },
      {
        type: "quote",
        text: "Great design is invisible. It guides the user effortlessly without drawing unnecessary attention to itself."
      },
      {
        type: "heading",
        text: "1. Curated Color Palettes Over Raw Defaults"
      },
      {
        type: "paragraph",
        text: "Avoid standard browser blue or harsh pure blacks (#000000). Instead, use deep slate tones (#0f172a) paired with vibrant gradient accents (sky blue to indigo) and subtle backdrop blurs (backdrop-blur-md) for modern glassmorphism."
      },
      {
        type: "heading",
        text: "2. The Power of Subtle Micro-Animations"
      },
      {
        type: "paragraph",
        text: "Adding hover scale effects (hover:scale-105), smooth button tap feedback, and fluid section transitions gives the web application a living, breathing feel without slowing down rendering performance."
      },
      {
        type: "takeaway",
        text: "Key Takeaways: Maintain high contrast ratios for readability, use Google Fonts like Inter or Outfit, and ensure responsive layouts adapt gracefully across mobile, tablet, and desktop viewports."
      }
    ]
  }
];
