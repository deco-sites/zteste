import PreactMarkdown from "preact-markdown";
import remarkGfm from "remark-gfm";

import Text from "../components/ui/Text.tsx";

export default function ExemploTeste() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.
  
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `;
  return (
    <Text variant="body">
      <PreactMarkdown># Hello, *world*!</PreactMarkdown>
      <PreactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </Text>
  );
}
