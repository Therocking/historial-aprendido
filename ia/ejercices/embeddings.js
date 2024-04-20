import OpenAI from "openai";

const openai = new OpenAI()

async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "A text to embedd",
    encoding_format: "float"
  })

  console.log(embedding)
}

main()
