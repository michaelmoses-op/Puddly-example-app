export const Book = resource("book", {
  fields: {
    id: field.id(),
    title: field.text({ max: 200, sortable: true }),
    author: field.text({ max: 200, filterable: true }),
    status: field.text({ max: 32, default: "want", filterable: true }),
    notes: field.text({ max: 2000, optional: true }),
    owner: field.ref("user"),
    createdAt: field.timestamp({ auto: true, sortable: true }),
  },
  access: {
    list: rule.owner("owner"),
    create: rule.authenticated(),
    update: rule.owner("owner"),
    delete: rule.owner("owner"),
  },
})
