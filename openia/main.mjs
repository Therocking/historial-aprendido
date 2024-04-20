import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  // const completion = await openai.chat.completions.create({
  //   messages: [{ role: "user", content: "You are a helpful assistant." }],
  //   model: "gpt-3.5-turbo",
  // });

  const resp = await openai.models.list()

  console.dir({resp}, {depth: Infinity});
}

main();
