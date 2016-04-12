orion.pages.addTemplate({
  template: 'MdPages',
  name: 'Markdown Pages',
  description: 'Site Pages in Markdown Format'
}, {
  content: orion.attribute('epic', {
    label: 'Content'
  }),
  lockedBy: {
    type: String,
    autoform: {
      type: 'hidden'
    },
    optional: true
  }
});
