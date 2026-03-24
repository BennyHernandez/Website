declare module "*.md" {
  const value: {
    attributes?: {
      [key: string]: unknown;
      gallery?: Array<{
        name?: string;
        link?: string;
        image?: string;
      }>;
    };
    html?: string;
    body?: string;
    react?: unknown;
  };

  export default value;
}
