export let Jokes = [
  {
    content: 'CAN’T COME TO CLASS',
    category: 'Miscellaneous',
    type: 'Two Part',
    delivery: 'My daughter received this e-mail from a prospective student prior to the start of the semester: “Dear Professor, I won’t be able to come to any of your classes or meet for any of the tests. Is this a problem?” —Carol Harper',
    flags: ['NSFW']
  },
  {
    content: 'IN A NUTSHELL',
    category: 'Pun',
    type: 'Two Part',
    delivery: 'I can give you the cause of anaphylactic shock in a nutshell. —Gary Delaney, comedian',
    flags: ['NSFW', 'Dark']
  },
  {
    content: 'The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)',
    category: 'Programming',
    type: 'Single',
    delivery: '',
    flags: ['NSFW', 'Racist']
  },
  {
    content: 'Before software can be reusable it first has to be usable. (Ralph Johnson)',
    category: 'Programming',
    type: 'Single',
    delivery: '',
    flags: ['NSFW', 'Racist']
  },
  {
    content: 'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. (Mosher’s Law of Software Engineering)',
    category: 'Programming',
    type: 'Single',
    delivery: '',
    flags: ['NSFW', 'Racist']
  }
];

export const JOKE_CATEGORIES = [
  {label: 'Miscellaneous', value: 'Miscellaneous'},
  {label: 'Pun', value: 'Pun'},
  {label: 'Programming', value: 'Programming'},
  {label: 'Dark', value: 'Dark'},
];
export const JOKE_FLAGS = ['NSFW', 'Religious', 'Political', 'Racist'];

export const JOKE_TYPES = [
  {label: 'Single', value: 'Single'},
  {label: 'Two Part', value: 'Two Part'}];

