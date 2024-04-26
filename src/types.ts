export interface Reply {
  uuid: string;
  reply_to_activity_uuid: string;
  handle: string;
  message: string;
  likes_count: number;
  replies_count: number;
  reposts_count: number;
  created_at: string;
}

export interface ActivityType {
  uuid: string;
  handle: string;
  name: string;
  message: string;
  created_at: string;
  expires_at: string;
  likes_count: number;
  replies_count: number;
  repost_count: number;
  replies: Reply[];
}
