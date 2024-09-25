export const navLinks = [
  {
    id: 1,
    name: "ホーム",
    href: "#home",
  },
  {
    id: 2,
    name: "アバウト",
    href: "#about",
  },
  {
    id: 3,
    name: "作品",
    href: "#work",
  },
  {
    id: 4,
    name: "お問い合わせ",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "エミリー・ジョンソン",
    position: "グリーンリーフのマーケティングディレクター",
    img: "assets/review1.png",
    review:
      "エイドリアンとの仕事は素晴らしい経験でした。彼は私たちの古いウェブサイトを現代的でユーザーフレンドリーなプラットフォームに変えました。彼の細部への注意と品質へのコミットメントは比類がありません。ウェブ開発プロジェクトには彼を強くお勧めします。",
  },
  {
    id: 2,
    name: "マーク・ロジャース",
    position: "テックギアショップの創業者",
    img: "assets/review2.png",
    review:
      "エイドリアンのウェブ開発の専門知識は本当に印象的です。彼は私たちのeコマースサイトのために堅牢でスケーラブルなソリューションを提供し、私たちのオンライン売上はローンチ以来大幅に増加しました。彼は真のプロフェッショナルです！素晴らしい仕事です。",
  },
  {
    id: 3,
    name: "ジョン・ドーサス",
    position: "アーバンテックのプロジェクトマネージャー",
    img: "assets/review3.png",
    review:
      "エイドリアンについて良いことを言い尽くすことはできません。彼は私たちの複雑なプロジェクト要件を取り入れ、シームレスで機能的なウェブサイトに変えることができました。彼の問題解決能力は素晴らしいです。",
  },
  {
    id: 4,
    name: "イーサー・スミス",
    position: "ブライトスターエンタープライズのCEO",
    img: "assets/review4.png",
    review:
      "エイドリアンとの仕事は楽しかったです。彼は私たちの要件を完璧に理解し、期待を超えるウェブサイトを提供しました。彼のフロントエンドとバックエンドの開発スキルはトップクラスです。",
  },
];

export const myProjects = [
  {
    title: "ポッドキャスト - AIポッドキャストプラットフォーム",
    desc: "ポッドキャストは、ポッドキャストの作成方法を変革する革命的なソフトウェア・アズ・ア・サービスプラットフォームです。テキストから複数の声を生成する機能などの高度なAI機能を備え、クリエイターは単一のテキスト入力から多様な音声を生成できます。",
    subdesc:
      "Next.js 14、Tailwind CSS、TypeScript、Framer Motion、Convexを使用して構築されたユニークなソフトウェア・アズ・ア・サービスアプリで、ポッドキャストは最適なパフォーマンスとスケーラビリティを考慮して設計されています。",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "ライブドキュメント - リアルタイムGoogleドキュメントクローン",
    desc: "ライブドキュメントは、リアルタイムの文書編集機能を強化した強力なコラボレーションアプリです。Googleドキュメントの強化版として、数百万のコラボレーターを同時にサポートし、すべての変更が瞬時に正確にキャプチャされます。",
    subdesc:
      "ライブドキュメントを使用すると、複数の貢献者がリアルタイムで一緒に作業できる未来のコラボレーションを体験できます。Next.jsとLiveblocksの最新機能を使用しています。",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "ケアパルス - 健康管理システム",
    desc: "革新的な医療プラットフォームで、重要な医療プロセスを簡素化します。患者登録、予約スケジューリング、医療記録管理を簡素化し、医療提供者と患者の両方にシームレスな体験を提供します。",
    subdesc:
      "効率性に重点を置いたケアパルスは、Next.js、Appwrite、Twillio、Sentryを使用して、複雑なフォームとSMS通知を統合し、運用ワークフローを向上させます。",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "ホライズン - オンラインバンキングプラットフォーム",
    desc: "ホライズンは、ユーザーに集中管理された財務管理ダッシュボードを提供する包括的なオンラインバンキングプラットフォームです。ユーザーは複数の銀行口座を接続し、リアルタイムの取引を監視し、他のユーザーにお金をシームレスに送金できます。",
    subdesc:
      "Next.js 14、Appwrite、Dwolla、Plaidを使用して構築され、ホライズンは現代の消費者のニーズに合わせたスムーズで安全なバンキング体験を提供します。",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "イマジニファイ - AI写真加工アプリ",
    desc: "イマジニファイは、ユーザーがAI技術を使用して素晴らしい写真加工を作成できる革新的なソフトウェア・アズ・ア・サービスアプリケーションです。AI駆動の画像編集、支払いシステム、クレジットベースのモデルなどの機能を備えています。",
    subdesc:
      "Next.js 14、Cloudinary AI、Clerk、Stripeを使用して構築され、イマジニファイは最先端の技術とユーザー中心のアプローチを組み合わせています。副収入や本格的なビジネスに変えることができます。",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "フレーマー",
    pos: "リードウェブ開発者",
    duration: "2022 - 現在",
    title:
      "フレーマーは、インタラクティブなプロトタイプを作成するための私の主要なツールです。私はそれを使用してデザインを具現化し、ステークホルダーが開発前にユーザーフローやインタラクションを体験できるようにしています。",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "フィグマ",
    pos: "ウェブ開発者",
    duration: "2020 - 2022",
    title:
      "フィグマは私の選ぶコラボレーティブデザインプラットフォームです。私はそれを使用してチームメンバーやクライアントとシームレスに作業し、リアルタイムのフィードバックやデザインの反復を促進します。クラウドベースです。",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "ノーション",
    pos: "ジュニアウェブ開発者",
    duration: "2019 - 2020",
    title:
      "ノーションは私のプロジェクトを整理するのに役立ちます。私はそれをプロジェクト管理、タスク追跡、ドキュメントの中央ハブとして使用し、デザインノートからすべてを確保します。",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
