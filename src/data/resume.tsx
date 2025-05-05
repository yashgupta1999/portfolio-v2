import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Gupta",
  initials: "YG",
  url: "https://www.yashcodes.dev",
  location: "Calgary, Canada",
  locationLink: "https://www.google.com/maps/place/calgary",
  description:
    "AI Engineer! The more I learn, the less I know—so I just keep learning and building.",
  summary:
    `
I'm **Yash Gupta**, an **AI Engineer** who loves **building, breaking, and occasionally understanding complex systems**.I work with **LLMs, automation, and AI-driven applications**, from **predictive modeling** to **RAG-based systems** and **multi-agent workflows**.  
When I'm not working, I'm probably **geeking out over watches**.

**Let's build something cool! 🚀**
`,
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "Scala",
    "Java",
    "C++",
    "TypeScript",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "TensorFlow",
    "MLOps",
    "GCP",
    "LLM",
    "Langchain",
    "OpenAI API",
    "Open Source LLM",
    "Docker",
    "React",
    "Next.js",
    "FastAPI"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "guptayash.connect@gmail.com",
    tel: "+18073564074",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yashgupta1999",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yash-gupta-1a20871a6/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:guptayash.connect@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Aurora Constellations",
      href: "https://www.aurorac.ca",
      badges: [],
      location: "Thunder Bay, ON",
      title: "AI Engineer",
      logoUrl: "/aurora.jpeg",
      start: "May 2023",
      end: "September 2024",
      description:
        [          
            "**Cancer Care Pathways Framework** : Pathways based on care plans, incorporating auto-highlighting and interactive UI elements in collaboration with the Director of Clinical Pathways.",
            "**MIMIC Dataset Analytics** : Conducted data analysis on **MIMIC-III and MIMIC-IV datasets**, mapped data onto a custom ontology, and applied **heterogeneous graphical neural networks (GNN)** to predict patient stay duration and mortality.",
            "**Clinical Research Tool Development** : Developed a **Retrieval-Augmented Generation (RAG)** based tool using **LangChain**, **OpenAI API**, and **Pinecone** for clinical research.",
            "**FHIR Integration** : Integrated **OAuth 2.0** **FHIR server** with **OpenEpic** and mapped **FHIR resources** to Aurora Grammar using **Python** and **FastAPI**."
          
        ] as string[]
    },
    {
      company: "Aurora Constellations",
      href: "https://www.aurorac.ca",
      badges: [],
      location: "Thunder Bay, ON",
      title: "Software Engineer",
      logoUrl: "/aurora.jpeg",
      start: "May 2021",
      end: "May 2023",
      description:
        [

          "**Syntax Integration** : Merged dual syntax grammar trees, optimizing language processing.",
          "**Speech Recognition & NLU** : Developed command recognition using **Google Speech-to-Text**, **PicoVoice NLU**, and custom NLU solutions.",
          "**DevOps** for **Scala** **Play Server** : Implemented **containerization**, **authentication mechanisms**, **CI/CD pipelines**, and **monitoring systems** using **Docker** and **GitHub Actions**.",
          "**Custom DSL Development** : Created a domain-specific language with **XText** for automating medical scoring and enforcing hospital policies.",
          "Server Optimization & Compliance: Enhanced **SQL** query performance and ensured **HIPAA compliance** through **role-based access control (RBAC)**, **data masking**, and **encryption.**",
        ] as string[]
    },
    {
      company: "Lakehead University & Lockheed Martin",
      href: "https://www.lakeheadu.ca",
      badges: [],
      location: "Thunder Bay, ON",
      title: "Assistant Researcher",
      logoUrl: ["/lakehead.png", "/lockheed.jpg"],
      start: "July 2021",
      end: "July 2022",
      description: [
        "Developed a **remote data logging system** using **Raspberry Pi** and **Firebase**, reducing **on-site data collection by 95%** and enabling **real-time monitoring**.",
        "Debugged and optimized **legacy code** in the **dynamic fan control system**, overcoming **documentation gaps** and ensuring smooth functionality.",
        "Implemented and tested a **dynamic fan system**, using **Arduino, Raspberry Pi, C++, and Python** to enhance **energy efficiency** and **moisture control**.",
        "Resolved **critical communication issues** between **Arduino and Raspberry Pi**, ensuring **seamless project execution**."
      ] as string[]
      
    },
    {
      company: "Lakehead University & Synergy North",
      href: "https://www.lakeheadu.ca",
      badges: [],
      location: "Thunder Bay, ON",
      title: "Assistant Researcher",
      logoUrl: ["/lakehead.png", "/synergy.jpg"],
      start: "June 2020",
      end: "August 2020",
      description:
      [
        "Developed an **LSTM-based power consumption forecasting system**.",
  "Conducted **time-series analysis** and applied **deep learning techniques** to predict future power loads.",
  "Self-learned **Python, TensorFlow, and pandas** to preprocess and analyze energy datasets.",
  "Improved forecasting accuracy through **neural network optimization** and **feature engineering**."
      ] as string[]
    },
  ],
  education: [
    {
      school: "Lakehead University",
      href: "https://www.lakeheadu.ca",
      degree: "Master of Science in Artificial Intelligence",
      logoUrl: "/lakehead.png",
    },
    {
      school: "Lakehead University",
      href: "https://www.lakeheadu.ca",
      degree: "Bachelor's of Software Engineering",
      logoUrl: "/lakehead.png",
    },
  ],
  projects: [

    {
      title: "Federated Learning Framework via Distributed Mutual Learning",
      href: "https://arxiv.org/abs/2503.05803",
      dates: "December 2022",
      active: true,
      description: "Developed a privacy-preserving federated learning framework that replaces weight-sharing with loss-based mutual learning, reducing bandwidth usage and model inversion attack risks. By leveraging knowledge distillation and deep mutual learning, clients share insights without exposing sensitive data, improving model generalization. The framework was evaluated on a face mask detection case study, demonstrating superior performance compared to traditional synchronous and asynchronous federated learning methods. ",
      technologies: [
        "Federated Learning",
        "Deep Learning",
        "Knowledge Distillation",
        "Mutual Learning",
        "Privacy-Preserving Machine Learning",
        "Computer Vision",
        "Convolutional Neural Networks (CNN)",
        "KL Divergence Optimization",
        "Python",
        "TensorFlow",
     ],
      links: [
        {
          type: "Arxiv",
          href: "https://arxiv.org/abs/2503.05803",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/yashgupta1999/Federated_Learning_Framework_via_Distributed_Mutual_Learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/federated.webp",
      video:
        "",
    },


    {
      title: "Image Compression Using Fast Fourier Transform and JPEG Compression",
      href: "https://www.researchgate.net/publication/340375328_Image_Compression_Using_Fourier_Series#fullTextFileContent",
      dates: "April 2020",
      active: true,
      description: "Developed an image compression tool in MATLAB using DFT, FFT, and DCT, implementing algorithms from scratch. The project optimized Fourier-based compression, benchmarked it against JPEG, and integrated a GUI for real-time visualization. Key concepts include Fourier Transform for frequency-domain compression, matrix transformations and quantization for data reduction, benchmarking compression efficiency across techniques, and a graphical user interface for user-controlled compression.",
      technologies: [
        "MATLAB",
        "Signal Processing",
        "Matrix Algebra & Linear Algebra",
        "Fast Fourier Transform (FFT)",
        "Discrete Cosine Transform (DCT)",
        "Quantization & Data Reduction",
        "Benchmarking & Performance Analysis",
        "Graphical User Interface (GUI)"
     ],
      links: [
        {
          type: "Project Report",
          href: "https://www.researchgate.net/publication/340375328_Image_Compression_Using_Fourier_Series#fullTextFileContent",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fft.webp",
      video:
        "",
    },
  ],
  research: [
    {
      title: "Toward Asynchronously Weight Updating Federated Learning for AI-on-Edge IoT Systems ",
      abstract: "Designed an asynchronously weight updating federated learning algorithm for AI-on-Edge IoT systems, enhancing data privacy by eliminating the need for centralized data sharing. Applied the approach to face mask detection, traditionally a centralized computer vision task, by distributing learning tasks across users. Investigated performance trade-offs between synchronous and asynchronous weight updates, introducing a penalization mechanism to optimize model aggregation. Experimental results demonstrated comparable accuracy to centralized training while significantly reducing transmission time overhead.",
      authors: ["Yash Gupta", "Zubair Md Fadlullah", "Mostafa M. Fouda"],
      publishedDate: "November 2022",
      journal: "2022 IEEE International Conference on Internet of Things and Intelligence Systems (IoTaIS)",
      doi: "10.1109/IoTaIS56727.2022.9975908",
    },
    {
      title: "Intelligent Real-Time Face-Mask Detection System with Hardware Acceleration for COVID-19 Mitigation ",
      abstract: "Developed and implemented a hardware-accelerated real-time face-mask detection system using deep learning (DL), optimized for embedded platforms including Raspberry Pi 4B (Google Coral TPU, Intel NCS2 VPU) and NVIDIA Jetson Nano. Designed a custom face-mask detection model (MaskDetect), independently quantized and optimized for each hardware platform. Conducted an ablation study comparing MaskDetect to transfer-learning models (VGG16, ResNet-50V2, InceptionV3), achieving 94%+ accuracy on most platforms. Results demonstrated that Jetson Nano offers the best trade-off in accuracy (94.2%), inference speed, and cost, making it ideal for real-time deployment.",
      authors: ["Peter Sertic","Ayman Alahmar","Thangarajah Akilan", "Yash Gupta", "Marko Javorac"],
      publishedDate: "May 2022",
      journal: "Healthcare 2022",
      doi: "10.3390/healthcare10050873",
    },
    {
      title: "HELIUS: A Blockchain Based Renewable Energy Trading System",
      abstract: "Developed a peer-to-peer (P2P) sustainable energy exchange system using Blockchain and Deep Learning to optimize energy trading during peak demand. Designed a novel framework for power system operations, enabling users to trade energy efficiently while simulating sustainable energy production based on location, time, and weather. Integrated a blind bidding mechanism and a web application to demonstrate real-world feasibility.",
      authors: ["Yash Gupta", "Marko Javorac","Shaun Cyr","Abdulsalam Yassine"],
      publishedDate: "December 2021",
      journal: " 2021 4th International Seminar on Research of Information Technology and Intelligent Systems (ISRITI)",
      doi: "10.1109/ISRITI54043.2021.9702767",
    },
  ],
} as const;
