export interface TweetBody {
  text: string
  username: string
  profileImg: string
  image?: string
}

export interface Tweet extends Tweetbody {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'tweet'
  blockTweet: boolean
  text: string
  username: string
  profileImg: string
  image?: string
}



export interface CommentBody {
  comment: string;
  tweetId: string;
  username: string;
  profileImg: string;
}

export interface Comment extends CommentBody {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'comment',
  tweet: {
    _ref: string
    _type: 'reference'
  }
}
