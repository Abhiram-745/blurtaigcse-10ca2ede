import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
        table: ({ children }) => (
          <div className="my-6 overflow-x-auto rounded-lg border border-border shadow-sm">
            <table className="w-full border-collapse bg-card">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-muted/50">
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-border">
            {children}
          </tbody>
        ),
        tr: ({ children }) => (
          <tr className="transition-colors hover:bg-muted/30">
            {children}
          </tr>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3 text-left font-heading font-semibold text-foreground">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-foreground">
            {children}
          </td>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-foreground">
            {children}
          </strong>
        ),
        p: ({ children }) => (
          <p className="mb-4 leading-relaxed last:mb-0">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="mb-4 ml-6 list-disc space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 ml-6 list-decimal space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">
            {children}
          </li>
        ),
        h1: ({ children }) => (
          <h1 className="mb-4 font-heading text-3xl font-bold">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-3 font-heading text-2xl font-bold">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-3 font-heading text-xl font-semibold">
            {children}
          </h3>
        ),
      }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
