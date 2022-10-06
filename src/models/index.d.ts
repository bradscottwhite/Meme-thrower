import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum ContentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimelineItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly body?: string | null;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentUserId?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly profilePic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Content {
  readonly id: string;
  readonly source?: string | null;
  readonly type?: ContentType | keyof typeof ContentType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Content, ContentMetaData>);
  static copyOf(source: Content, mutator: (draft: MutableModel<Content, ContentMetaData>) => MutableModel<Content, ContentMetaData> | void): Content;
}

export declare class TimelineItem {
  readonly id: string;
  readonly description?: string | null;
  readonly postTime?: string | null;
  readonly author?: User | null;
  readonly content?: Content | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly timelineItemAuthorId?: string | null;
  readonly timelineItemContentId?: string | null;
  constructor(init: ModelInit<TimelineItem, TimelineItemMetaData>);
  static copyOf(source: TimelineItem, mutator: (draft: MutableModel<TimelineItem, TimelineItemMetaData>) => MutableModel<TimelineItem, TimelineItemMetaData> | void): TimelineItem;
}