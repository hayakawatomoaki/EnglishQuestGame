export const stageThemes = {
  restaurant: {
    accent: "#2f9e44",
    background: "linear-gradient(135deg, #eef8e8 0%, #f8f1dc 100%)",
  },
  conversation: {
    accent: "#1971c2",
    background: "linear-gradient(135deg, #e7f5ff 0%, #f8f0fc 100%)",
  },
  grammar: {
    accent: "#9c36b5",
    background: "linear-gradient(135deg, #f3f0ff 0%, #fff4e6 100%)",
  },
  ielts: {
    accent: "#e67700",
    background: "linear-gradient(135deg, #fff9db 0%, #e6fcf5 100%)",
  },
  structures: {
    accent: "#c2255c",
    background: "linear-gradient(135deg, #fff0f6 0%, #edf2ff 100%)",
  },
};

export const stages = [
  {
    id: "restaurant",
    name: "Restaurant Forest",
    jpName: "レストランの森",
    topic: "レストラン英語",
    description: "注文、予約、会計で使う英語を練習します。",
    recommendedLevel: 1,
  },
  {
    id: "conversation",
    name: "Conversation Village",
    jpName: "会話の村",
    topic: "日常会話",
    description: "あいさつ、予定、気持ちを自然に伝える表現を学びます。",
    recommendedLevel: 1,
  },
  {
    id: "grammar",
    name: "Grammar Cave",
    jpName: "文法の洞窟",
    topic: "文法問題",
    description: "時制、助動詞、比較などの基礎文法を確認します。",
    recommendedLevel: 2,
  },
  {
    id: "ielts",
    name: "IELTS Tower",
    jpName: "IELTSの塔",
    topic: "IELTS Speaking Part 1-3",
    description: "Speakingで使いやすい表現と答え方を鍛えます。",
    recommendedLevel: 3,
  },
  {
    id: "structures",
    name: "Pattern Castle",
    jpName: "重要構文の城",
    topic: "初級重要構文30選",
    description: "英語がペラペラになるための基本構文を反復練習します。",
    recommendedLevel: 1,
  },
];
