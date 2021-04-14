import chilling1 from '../assets/chilling1.jpg';
import sunbathing1 from '../assets/sunbathing1.jpg';
import work1 from '../assets/work1.jpg';
import { PictureCard } from '../components/PictureCard';

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
    pictureLocation: work1,
    pictureDescription: 'Having fun at work #workinghard #nofilter #bestlife',
    pictureAuthor: 'Martin',
    created: new Date(),
    comments: [
      {
        commentId: 1,
        content: 'When will you feed me?',
        commentAuthor: 'Mia',
        created: new Date(),
      },
    ],
  },
  {
    pictureId: 3,
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

export const getSpecificPictureCard = (pictureId: number) => {
  return pictureCards.filter((card) => card.pictureId === pictureId);
};

export const getUserPictures = (pictureAuthor: string) => {
  return pictureCards.filter((card) => card.pictureAuthor === pictureAuthor);
};

export const searchPictures = (searchCritera: string) => {
  console.log(`Criteria: ${searchCritera}`);
  const toReturn = pictureCards.filter(
    (card) => card.pictureDescription.toLowerCase().includes(searchCritera.toLowerCase()),
    // || card.pictureAuthor.toLowerCase().indexOf(searchCritera.toLowerCase()),
  );
  console.log(toReturn);
  return toReturn;
};
