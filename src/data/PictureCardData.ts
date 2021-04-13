import chilling1 from '../assets/chilling1.jpg';
import sunbathing1 from '../assets/sunbathing1.jpg';

export interface PictureCardData {
  pictureId: number;
  // For now, the picture will be stored as a file.
  // Later, this can be changed to be stored as a byte array for example.
  pictureLocation: string;
  pictureDescription: string;
  pictureAuthor: string;
  created: Date;
  comments: CommentData[];
}

export interface CommentData {
  commentId: number;
  content: string;
  commentAuthor: string;
  created: Date;
}

const pictureCards: PictureCardData[] = [
  {
    pictureId: 1,
    pictureLocation: chilling1,
    pictureDescription: 'Chilling on the sofa #chill #nofilter',
    pictureAuthor: 'Mia',
    created: new Date(),
    comments: [
      {
        commentId: 1,
        content: 'Nice!',
        commentAuthor: 'Martin',
        created: new Date(),
      },
      {
        commentId: 2,
        content: 'Very nice!',
        commentAuthor: 'Feri',
        created: new Date(),
      },
    ],
  },
  {
    pictureId: 2,
    pictureLocation: sunbathing1,
    pictureDescription: 'Bathing in the sun #chill #nofilter #panellife',
    pictureAuthor: 'Mia',
    created: new Date(),
    comments: [
      {
        commentId: 1,
        content: 'You go Girl!',
        commentAuthor: 'Martin',
        created: new Date(),
      },
    ],
  },
];

export const getPictureCards = (): PictureCardData[] => {
  return pictureCards;
};