export const articlesData = [
  {
    id: "art-1",
    title: "Why Do Big Tech Companies Love Microservices?",
    subtitle: "From small restaurants to massive digital platforms: Understanding when to build monoliths and when to scale with microservices.",
    excerpt: "Imagine owning a small restaurant. One person handles everything. But when thousands of customers arrive, responsibilities must be divided. Here is how microservices scale complex software systems.",
    category: "System Architecture",
    date: "Sep 18, 2025",
    readTime: "5 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "CEO Hosen Soft & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    tags: ["SoftwareArchitecture", "Microservices", "SystemDesign", "WebDevelopment", "BackendDevelopment", "SoftwareEngineering", "Tech"],
    content: [
      {
        type: "paragraph",
        text: "Imagine you own a small restaurant. In the beginning, one person can manage almost everything—taking orders, preparing food, serving customers, and handling payments. When the restaurant is small, this works perfectly. This is similar to a Monolithic Application. Everything is built and managed inside one large system."
      },
      {
        type: "paragraph",
        text: "But one day, the restaurant becomes incredibly popular. Thousands of customers start coming every day. Now imagine one person still trying to handle everything. Orders start getting delayed. Payments become slower. And one small mistake can affect the entire operation."
      },
      {
        type: "heading",
        text: "Dividing Responsibilities: The Microservice Shift"
      },
      {
        type: "paragraph",
        text: "So, what happens next? You divide the responsibilities:"
      },
      {
        type: "list",
        items: [
          "One team focuses on cooking.",
          "Another team handles payments.",
          "Another manages delivery.",
          "And another takes care of customer support."
        ]
      },
      {
        type: "paragraph",
        text: "Everyone has a specific responsibility. They work independently, but together they keep the entire restaurant running smoothly. This is the basic idea behind Microservice Architecture. Instead of building one massive application, the system is divided into multiple smaller, independent services."
      },
      {
        type: "heading",
        text: "Independent Services & Targeted Scaling"
      },
      {
        type: "paragraph",
        text: "For example: User Service, Payment Service, Course Service, Notification Service, Analytics Service. Each service focuses on doing one specific job. It can be developed, updated, deployed, and scaled independently without necessarily affecting the entire system."
      },
      {
        type: "paragraph",
        text: "Imagine a large course platform launching a popular new course. Suddenly, thousands of students are trying to make payments at the same time. With a monolithic system, increased traffic might put pressure on the entire application. With Microservices, you can scale only the Payment Service to handle the increased demand, without scaling everything else. This flexibility is one of the main reasons why Microservices are often used in large-scale products."
      },
      {
        type: "quote",
        text: "Good software architecture is not about choosing the most complicated solution. It is about choosing the solution that makes sense for your product today, while giving it room to grow tomorrow."
      },
      {
        type: "heading",
        text: "When Microservices Are NOT the Right Choice"
      },
      {
        type: "paragraph",
        text: "However, there is one important thing to remember. Microservices are not always the right choice. For a small application, they can introduce unnecessary complexity. More services mean more infrastructure, more communication between systems, more deployments, more monitoring, and more things that can potentially go wrong."
      },
      {
        type: "paragraph",
        text: "Sometimes, starting with a clean and well-structured Monolithic Architecture is the smarter decision. As the product grows, the number of users increases, and the team becomes larger, you can gradually move certain parts of the system into independent services."
      },
      {
        type: "takeaway",
        text: "The best architecture is not the most advanced one. It's the one that solves the right problems at the right time."
      }
    ]
  },
  {
    id: "art-2",
    title: "৫০ কোটি Follower-এর Notification সমস্যা: Distributed System ও Kafka-এর কারসাজি",
    subtitle: "রোনালদোর ১টি পোস্টে ৫০ কোটি মানুষের কাছে notification যায় কীভাবে? Single server vs Distributed fan-out pattern.",
    excerpt: "রোনালদো পোস্ট দেওয়ার কয়েক সেকেন্ডের মধ্যে ৫০ কোটি মানুষের ফোনে নোটিফিকেশন কীভাবে পৌঁছায়? কীভাবে massive scale-এ Kafka ও worker servers ব্যবহার করে কাজ ভাগ করে দেওয়া হয়—তার গল্প।",
    category: "System Architecture",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "CEO Hosen Soft & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&auto=format&fit=crop&q=80",
    tags: ["HosenAcademy", "HosenSoft", "SystemDesign", "Kafka", "DistributedSystems", "BackendDevelopment"],
    content: [
      {
        type: "paragraph",
        text: "একবার একটু অন্যভাবে চিন্তা করুন। রোনালদো একটা পোস্ট দিলেন। পোস্ট করার কয়েক সেকেন্ডের মধ্যেই পৃথিবীর কোটি কোটি মানুষের ফোনে notification—“Cristiano Ronaldo posted something new.”"
      },
      {
        type: "paragraph",
        text: "আমরা সাধারণ developer হলে হয়তো প্রথমেই ভাবতাম—“আচ্ছা, followers-এর একটা list নেবো, তারপর একটা একটা করে notification পাঠিয়ে দেবো।” শুনতে সহজ। কিন্তু সমস্যা হলো, follower যদি ১০০ জন না হয়ে ৫০ কোটি হয়?"
      },
      {
        type: "paragraph",
        text: "ধরুন, প্রতিটা notification পাঠাতে এবং response পেতে মাত্র ১০ মিলিসেকেন্ড লাগে। একজনের পর একজন করে পাঠাতে গেলে পুরো কাজ শেষ করতেই প্রায় ৫৮ দিন লেগে যাবে। মানে Ronaldo আজ পোস্ট করলেন, আর notification আসলো দুই মাস পর! 😄"
      },
      {
        type: "heading",
        text: "ম্যাসিভ স্কেলে কাজ ভাগ করার টেকনিক"
      },
      {
        type: "paragraph",
        text: "এখানেই আসলে বড় সিস্টেম আর ছোট অ্যাপ্লিকেশনের মধ্যে পার্থক্যটা বোঝা যায়। এত বড় scale-এ তারা কখনোই বলে না—“চলো, সবাইকে একে একে পাঠাই।” বরং কাজটাকেই এমনভাবে ভেঙে ফেলা হয়, যাতে হাজার হাজার machine একই সময়ে কাজ করতে পারে।"
      },
      {
        type: "paragraph",
        text: "ধরুন ৫০ কোটি follower-কে একসাথে ধরার পরিবর্তে system তাদের ছোট ছোট batch-এ ভাগ করে ফেলল। তারপর সেই কাজগুলো সরাসরি notification server-এ না পাঠিয়ে Kafka-এর মতো message broker-এর কাছে দিয়ে দিল।"
      },
      {
        type: "heading",
        text: "Parallel Execution ও Worker Systems"
      },
      {
        type: "paragraph",
        text: "এখন আসল মজাটা শুরু। একটা server বসে ৫০ কোটি notification পাঠাচ্ছে না। বরং হাজার হাজার worker server একই সময়ে queue থেকে কাজ নিচ্ছে। একজন ১০ হাজার user নিয়ে কাজ করছে, আরেকজন আরেকটা batch নিয়ে, অন্যরা নিজেদের অংশ নিয়ে ব্যস্ত।"
      },
      {
        type: "quote",
        text: "একটা বিশাল কাজ → হাজার হাজার ছোট কাজ → হাজার হাজার server → parallel execution."
      },
      {
        type: "paragraph",
        text: "এই simple-looking idea-টাই massive scale system-এর পেছনে অনেক বড় একটা concept। আর এর পেছনে আরও অনেক interesting জিনিস থাকে:"
      },
      {
        type: "list",
        items: [
          "কোন user কাকে follow করে, সেটা দ্রুত খুঁজে বের করার জন্য data structure এবং storage architecture আলাদা হতে পারে।",
          "কোন server কোন কাজ নেবে, সেটা efficiently distribute করতে hashing-এর মতো technique ব্যবহার করা হয়।",
          "আর Kafka-এর মতো system বিপুল পরিমাণ event খুব দ্রুত handle করার জন্য append-only log-এর মতো architecture ব্যবহার করে।"
        ]
      },
      {
        type: "heading",
        text: "System Thinking-এর আসল সৌন্দর্য"
      },
      {
        type: "paragraph",
        text: "তখন বুঝতে পারি—আমরা যখন একটা ছোট application বানাই, তখন একটা server-কে বলি: “এই কাজটা করে দাও।” কিন্তু Facebook, Instagram-এর মতো massive platform-এ approach অনেকটা এমন: “কাজটাকে ভেঙে দাও। তারপর হাজারটা machine-কে একসাথে কাজ করতে দাও।”"
      },
      {
        type: "paragraph",
        text: "আমার কাছে distributed system-এর সবচেয়ে interesting ব্যাপার এটাই। বড় সমস্যার সমাধান সবসময় আরও powerful একটা server দিয়ে হয় না। অনেক সময় সমাধানটা হলো—সমস্যাটাকে ছোট ছোট অংশে ভেঙে দেওয়া। আর তারপর সবাইকে একসাথে কাজ করানো।"
      },
      {
        type: "takeaway",
        text: "এই জায়গাটাতেই backend development ধীরে ধীরে শুধু coding না থেকে system thinking-এর ব্যাপার হয়ে যায়। আপনি যদি backend বা system architecture নিয়ে কাজ করেন, আপনার কাছে কোন conceptটা সবচেয়ে interesting লাগে—Kafka, Redis, Pub/Sub, Queue নাকি Distributed System?"
      }
    ]
  },
  {
    id: "art-3",
    title: "RAG নিয়ে কাজ করতে গিয়ে একটা ভুল ধারণা ভাঙল আমার",
    subtitle: "Vector Database আর LLM ছাড়াও একটি reliable production RAG system বানাতে কী কী লাগে?",
    excerpt: "Document → Embedding → Vector Search → LLM → Answer। শুনতে সহজ হলেও আসল চ্যালেঞ্জ চারপাশের অবকাঠামোতে: BullMQ background processing, state tracking, caching, hybrid retrieval এবং source citation.",
    category: "AI & Backend",
    date: "Sep 10, 2025",
    readTime: "7 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "CEO Hosen Soft & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1200&auto=format&fit=crop&q=80",
    tags: ["RAG", "AIEngineering", "LLM", "GenerativeAI", "PostgreSQL", "pgvector", "Redis", "BullMQ", "BackendDevelopment"],
    content: [
      {
        type: "paragraph",
        text: "কিছুদিন ধরে RAG নিয়ে ঘাঁটাঘাঁটি করছি। শুরুতে আমার কাছে ব্যাপারটা অনেকটা এমনই ছিল— Document → Embedding → Vector Search → LLM → Answer। ব্যাপারটা যতটা straightforward মনে হয়েছিল, হাতে-কলমে বানাতে গিয়ে বুঝলাম আসল গল্পটা এখানে না। একটা proper RAG system বানাতে গেলে সবচেয়ে বেশি সময় হয়তো LLM-এর পেছনে যায় না, যায় “system কীভাবে ভুল করবে না”—এই চিন্তার পেছনে।"
      },
      {
        type: "heading",
        text: "Chunk-Level State Tracking & Fault Tolerance"
      },
      {
        type: "paragraph",
        text: "ধরুন, একটা PDF upload করলাম। PDF থেকে text বের করতে হবে, তারপর সেটাকে meaningful chunk-এ ভাগ করতে হবে, প্রতিটা chunk-এর embedding তৈরি করতে হবে, database-এ রাখতে হবে। এখন ধরুন 200টা chunk-এর মধ্যে 86 নম্বর chunk process করার সময় worker মারা গেল। আগের মতো simple implementation হলে আবার 1 থেকে 200 পর্যন্ত শুরু করতে হবে। কিন্তু সেটা তো practical না।"
      },
      {
        type: "paragraph",
        text: "তাই এখন আমার ingestion flow-এ প্রতিটা chunk-এর processing state track করছি। কোনটা complete, কোনটা pending, কোনটা failed—system সেটা জানে। ফলে worker fail করলেও পুরো কাজটা আবার শুরু করতে হয় না। যেখান থেকে থেমেছে, সেখান থেকেই আবার শুরু করতে পারে।"
      },
      {
        type: "quote",
        text: "AI system-এ শুধু ভালো output দরকার না, failure হলেও system-কে smart হতে হয়।"
      },
      {
        type: "heading",
        text: "Background Ingestion & Hybrid Retrieval Pipeline"
      },
      {
        type: "paragraph",
        text: "এই জন্য document processing-টা synchronous না রেখে BullMQ + Redis দিয়ে background processing করছি। User PDF upload করবে, request আটকে থাকবে না। Backend নিজের মতো করে ingestion process চালিয়ে যাবে।"
      },
      {
        type: "paragraph",
        text: "Retrieval-এর ক্ষেত্রেও শুধু “সবচেয়ে কাছের vector খুঁজে আনো”—এতটুকুতে থামিনি। বর্তমানে flowটা অনেকটা এমন:"
      },
      {
        type: "list",
        items: [
          "Document Ingestion & Text Extraction",
          "Chunking & State Tracking",
          "Embedding Generation",
          "PostgreSQL + pgvector Storage",
          "Hybrid Retrieval (Dense + Sparse/Keyword)",
          "Reranking Context Precision",
          "Relevant Context Injection",
          "LLM Generation + Source Citation"
        ]
      },
      {
        type: "heading",
        text: "Caching & Source Citation"
      },
      {
        type: "paragraph",
        text: "আরেকটা বিষয় নিয়ে কাজ করছি—caching। কারণ একই ধরনের প্রশ্নের জন্য যদি প্রতিবার database search, reranking এবং LLM call করতে হয়, তাহলে system unnecessarily expensive হয়ে যাবে। তাই frequently repeated query/result cache করার চেষ্টা করছি। আর source citation রাখার ফলে একটা গুরুত্বপূর্ণ সুবিধা পাচ্ছি—LLM একটা answer দিলেই শেষ না। প্রয়োজনে আমি পিছনে গিয়ে দেখতে পারছি, এই answer-এর context document-এর কোথা থেকে এসেছে।"
      },
      {
        type: "paragraph",
        text: "সব মিলিয়ে আমার বর্তমান RAG setup-এ যেসব জিনিস নিয়ে বেশি কাজ করছি: PostgreSQL + pgvector, Hybrid Search, Reranking, BullMQ + Redis, Retry & Idempotency, Chunk-level processing, Caching, Source Citation."
      },
      {
        type: "takeaway",
        text: "RAG আসলে শুধু vector database আর LLM-এর গল্প না। LLM হয়তো পুরো system-এর সবচেয়ে visible অংশ। কিন্তু reliable RAG বানানোর আসল কাজটা হচ্ছে তার চারপাশের infrastructure তৈরি করা। AI application বানানো মানে শুধু AI model ব্যবহার করা না; AI-কে reliable software-এর মধ্যে properly বসানোই আসল challenge।"
      }
    ]
  },
  {
    id: "art-4",
    title: "What If We Build Our Own Browser?",
    subtitle: "Deconstructing Chromium architecture, MVP requirements, tech stack, and building a browser that gives users a reason to switch.",
    excerpt: "Could a small team build a modern web browser? By leveraging Chromium as an engine and focusing on AI, privacy, and UX differentiators, the impossible becomes achievable.",
    category: "System Architecture",
    date: "Sep 05, 2025",
    readTime: "6 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "CEO Hosen Soft & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
    tags: ["Browser", "Chromium", "OpenSource", "Startup", "Technology", "AI", "SaaS", "ProductDevelopment"],
    content: [
      {
        type: "paragraph",
        text: "A few days ago, I was thinking about something that sounds crazy: “What if we build our own web browser?” Something like Chrome, Firefox, or Brave. Then I started thinking about what actually goes on behind a browser. We type a website address, press Enter, and the page appears in seconds. It feels simple. But behind that simple experience, there are rendering engines, JavaScript engines, networking, security, sandboxing, GPU processing, storage, extensions, and much more." },
      {
        type: "heading",
        text: "Standing on the Shoulders of Chromium"
      },
      {
        type: "paragraph",
        text: "So if we tried to build everything from scratch, it would be a massive project. For a small team, it simply wouldn't make much sense. But here's the interesting part: We don't need to build everything ourselves. We can start with an open-source project like Chromium and build our own browser on top of it. That changes the whole picture. Instead of spending years rebuilding the foundation, we can focus on what users actually notice:"
      },
      {
        type: "list",
        items: [
          "A useful AI assistant natively embedded into the interface",
          "Smarter tab management and context-aware workspace grouping",
          "Enhanced privacy and aggressive tracking protection",
          "Productivity tools & streamlined research experience",
          "Developer-friendly inspection tools and cleaner, faster UI"
        ]
      },
      {
        type: "heading",
        text: "Team, Hardware, and Budget Realities"
      },
      {
        type: "paragraph",
        text: "What would we need? We'd need engineers who understand C/C++, browser architecture, JavaScript, rendering, networking and security. For a small MVP, a 3–5 person team could be a reasonable starting point. A focused Chromium-based MVP might take around 3–6 months, depending on the features and team's experience." },
      {
        type: "paragraph",
        text: "The development machine would also need to be powerful because building Chromium isn't like running a normal web project. Something around 32GB RAM, a modern multi-core CPU and a fast 1TB SSD would be a comfortable starting point." },
        {
          type: "paragraph",
          text: "And the budget? There isn't one fixed number. A small MVP could potentially be built with a few thousand to tens of thousands of dollars, depending on the team and scope. But building a polished, secure, multi-platform browser is a completely different level. That's where the real cost begins."
        },
      {
        type: "heading",
        text: "The 7-Step Roadmap"
      },
      {
        type: "list",
        items: [
          "Step 1: Understand Chromium core modules & architecture.",
          "Step 2: Build Chromium locally.",
          "Step 3: Change branding and basic UI controls.",
          "Step 4: Implement tabs, bookmarks, history, and downloads.",
          "Step 5: Add something genuinely different (AI assistant, smart workspace).",
          "Step 6: Test with real power users.",
          "Step 7: Improve based on feedback and scale."
        ]
      },
      {
        type: "quote",
        text: "The goal shouldn't be: 'Let's make another Chrome.' The better question is: 'What problem can our browser solve better than the browsers people already use?'"
      },
      {
        type: "takeaway",
        text: "Because copying technology isn't enough. People don't switch products just because another product exists. They switch when they find a reason. And maybe that's the real opportunity—building one that gives people a reason to switch."
      }
    ]
  },
  {
    id: "art-5",
    title: "Is AI Causing 'Code Blindness' in Modern Developers?",
    subtitle: "Why AI coding speed shouldn't replace architectural thinking, debugging, and root-cause comprehension.",
    excerpt: "AI generates features in minutes, but are we losing the ability to debug and understand system design? How to balance AI productivity with deep programming skills.",
    category: "AI & Engineering",
    date: "Aug 30, 2025",
    readTime: "5 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "CEO Hosen Soft & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    tags: ["AIEngineering", "SoftwareEngineering", "DeveloperProductivity", "SystemDesign", "Tech", "Coding"],
    content: [
      {
        type: "paragraph",
        text: "A few years ago, a feature that might have taken an entire day can now be built within hours. With tools like Cursor, Copilot, and other AI assistants, a simple prompt can generate a frontend component, API, database logic, or even an entire feature within minutes. As a developer, that's honestly amazing."
      },
      {
        type: "paragraph",
        text: "But lately, one thing has been on my mind: Are we becoming so good at writing code quickly that we're slowly forgetting how to understand code deeply?"
      },
      {
        type: "heading",
        text: "The Danger of 'Code Blindness'"
      },
      {
        type: "paragraph",
        text: "Imagine this: AI generates a 200-line backend API for you. The code is clean, well-structured, and looks almost perfect. You review it briefly and merge it into production. Two days later, a critical bug appears. You open the code and suddenly feel stuck. So you ask AI again: 'Find the bug and fix it.' A few seconds later, the solution is ready. Problem solved. But one question remains: Did you actually understand the bug? Or did you simply rely on AI again?"
      },
      {
        type: "paragraph",
        text: "This is where I think AI has an interesting side effect. I call it 'Code Blindness.' AI has dramatically increased our coding speed. But if we stop thinking about architecture, data flow, logic, and debugging ourselves, there may come a point where we're writing code—but our brain isn't processing the logic behind it."
      },
      {
        type: "quote",
        text: "The most important skill of a developer isn't typing code faster. It's understanding problems, building logic, and finding the root cause when something breaks."
      },
      {
        type: "heading",
        text: "How I Keep the Balance (3 Workflow Rules)"
      },
      {
        type: "list",
        items: [
          "1. Understand the problem before asking AI to code: Before writing a prompt, I think about data flow, validation, APIs, services, and failure points. The architectural decision should come from me; AI can turn that logic into code faster.",
          "2. Treat AI-generated code like a junior developer's PR: Just because AI generated it doesn't mean it's correct. I review it: Why this function? Why this query? What happens in this edge case? If I don't understand it, I don't merge it.",
          "3. Don't call AI immediately for every bug: Sometimes I intentionally use console.log, a debugger, or my own brain to find the root cause first. Because debugging isn't just fixing bugs—it's a thinking muscle."
        ]
      },
      {
        type: "takeaway",
        text: "To me, AI is a Co-pilot, not an autopilot. Let AI increase our coding speed, but let's not let it reduce our thinking and problem-solving ability."
      }
    ]
  },
  {
    id: "art-6",
    title: "3 Mistakes Most Developers Make While Building Production-Ready Web Applications",
    subtitle: "Real-world lessons on maintainability, edge cases, and post-deployment realities.",
    excerpt: "Writing code is often the easy part. The real challenge begins in production. Here are 3 critical mistakes I made and what they taught me about building software.",
    category: "Web Dev",
    date: "Aug 20, 2025",
    readTime: "6 min read",
    author: "Abdullah Al Zubaer",
    authorRole: "CEO Hosen Soft & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&auto=format&fit=crop&q=80",
    tags: ["BackendDevelopment", "SoftwareEngineering", "Production", "WebDevelopment", "SystemDesign"],
    content: [
      {
        type: "paragraph",
        text: "When I first started building real-world applications, I thought the hardest part would be writing the code. I was wrong. Writing the code was often the easy part. The difficult part started when the application had to actually work in the real world."
      },
      {
        type: "heading",
        text: "1. Focusing Too Much on Feature Completion, Not Maintainability"
      },
      {
        type: "paragraph",
        text: "At first, my mindset was simple: 'If the feature works, it's done.' So I would build a feature, test it once, see that it works, and move on. But later, when requirements changed, a small change in one place broke something somewhere else. That's when I started understanding the importance of clean architecture, reusable components, proper API structure, database relationships, validation, and error handling."
      },
      {
        type: "heading",
        text: "2. Underestimating Edge Cases"
      },
      {
        type: "paragraph",
        text: "Everything worked perfectly during development until real users started using the app. Suddenly, questions emerged:"
      },
      {
        type: "list",
        items: [
          "What happens if the user submits the form twice in rapid succession?",
          "What if the database request fails or times out?",
          "What if two admins update the same data concurrently?",
          "What if the user refreshes the page mid-transaction?",
          "What if an API returns null instead of the expected array?",
          "What if an email fails to send or permissions are missing?"
        ]
      },
      {
        type: "paragraph",
        text: "Users don't use applications the way developers expect them to. Now, whenever I build a feature, I don't only ask: 'Does it work?'. I also ask: 'What happens if everything goes wrong?'"
      },
      {
        type: "heading",
        text: "3. Treating Deployment as the Final Step"
      },
      {
        type: "paragraph",
        text: "Build -> test -> deploy -> done. That was a big mistake. Production taught me that deployment involves environment variables, database security, SSL, domain configuration, Nginx, process management, logs, backups, API security, CORS, and monitoring. Something that works on localhost can behave completely differently in production."
      },
      {
        type: "quote",
        text: "Debugging a production issue at night teaches you things that no tutorial ever can."
      },
      {
        type: "takeaway",
        text: "I slowly stopped asking: 'How do I make this feature work?' and started asking: 'How do I build this so it doesn't become a problem later?' That's the biggest difference between building a practice project and shipping software for real users."
      }
    ]
  }
];
