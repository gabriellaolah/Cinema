import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'movie',
  title: 'Movies & Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date & Time',
      type: 'datetime',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
    }),
    defineField({
      name: 'ticketLink',
      title: 'Ticket Link',
      type: 'url',
    }),
  ],
});
