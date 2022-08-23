import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const FaqData = defineDocumentType(() => ({
  name: 'Faq',
  filePathPattern: 'faq-data/*.mdx',

  contentType: 'mdx',
  fields: {
    category: { type: 'string', required: true },
    question: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [FaqData],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
