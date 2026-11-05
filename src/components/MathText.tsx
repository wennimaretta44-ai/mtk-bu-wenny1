import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4';
}

/**
 * Parses a string containing LaTeX equations:
 * $$ equation $$ for block math
 * $ equation $ for inline math
 * and renders formatted KaTeX HTML safely.
 */
export const MathText: React.FC<MathTextProps> = ({
  content,
  className = '',
  as: Component = 'div',
}) => {
  if (!content) return null;

  // Split by $$ first for block equations, then $ for inline
  const renderMathContent = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="block my-2 overflow-x-auto text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <code key={index} className="block my-2 text-red-600 bg-red-50 p-2 rounded">
              {math}
            </code>
          );
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: false,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="inline-block px-0.5 align-middle"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <code key={index} className="text-red-600 bg-red-50 px-1 rounded">
              {math}
            </code>
          );
        }
      } else {
        // Plain text with line breaks and basic formatting
        return <span key={index}>{part}</span>;
      }
    });
  };

  return <Component className={className}>{renderMathContent(content)}</Component>;
};
