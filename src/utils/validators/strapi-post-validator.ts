import z from "zod";

export const strapiPostValidator = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    published_at: z.string(),
    slug: z.string(),
    featuredImage: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string().url(),
          alternativeText: z.string(),
        }),
      }),
    }),
    categories: z.object({
      data: z
        .array(
          z.object({
            id: z.number(),
            attributes: z.object({
              name: z.string(),
            }),
          })
        )
        .nonempty(),
    }),
  }),
});

export const strapiPostMetaValidator = z.object({
  pagination: z.object({
    page: z.number(),
    pageSize: z.number(),
    pageCount: z.number(),
    total: z.number(),
  }),
});

export const strapiPostWithMetaValidator = z.object({
  data: z.array(strapiPostValidator).nonempty(),
  meta: strapiPostMetaValidator,
});

export type StrapiPostWithMeta = z.infer<typeof strapiPostWithMetaValidator>;
export type StrapiPost = z.infer<typeof strapiPostValidator>;
