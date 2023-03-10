export const data = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Grammar Check",
    id: "grammarCorrection",
    description: "Correct sentences into standard English",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Summarize",
    id: "summary",
    description: "Translate difficult text into simpler concepts",
    option: {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Translate",
    id: "translate",
    description: "Translate English text into French, Spanish and Japanese",
    option: {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  // {
  //   name: "Movie to Emoji",
  //   id: "movieToEmoji",
  //   description: "Convert movie titles into emoji",
  //   option: {
  //     model: "text-davinci-003",
  //     temperature: 0,
  //     max_tokens: 100,
  //     top_p: 1,
  //     frequency_penalty: 0.0,
  //     presence_penalty: 0.0,
  //   },
  // },
  {
    name: "Explain code",
    id: "explainCode",
    description: "Explain a complicated piece of code",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "JS to Python",
    id: "jstopy",
    description: "Convert simple JavaScript expressions into Python",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
];
