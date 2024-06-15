import React from 'react';
import { processMarkdown } from './processMarkdown';

interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  const [htmlContent, setHtmlContent] = React.useState('');

  React.useEffect(() => {
    const processContent = async () => {
      const processedContent = await processMarkdown(content);
      setHtmlContent(processedContent);
    };

    processContent();
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Markdown;
