import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import rehypeAddClasses from 'rehype-add-classes';

export async function processMarkdown(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype) // Add this line
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeAddClasses, {
      h1: 'text-4xl font-bold mt-8 mb-4',
      h2: 'text-3xl font-semibold mt-6 mb-3',
      h3: 'text-2xl font-medium mt-4 mb-2',
      h4: 'text-xl font-medium mt-3 mb-2',
      code: 'bg-gray-100 text-red-500 rounded-md px-2 py-1',
      pre: 'bg-gray-900 text-white p-4 rounded-md overflow-auto'
    })
    .use(rehypeStringify)
    .process(markdown);
  return file.toString();
}
