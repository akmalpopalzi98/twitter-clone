import { ActivityType } from "../types";

export const formatCreatedAtDate = (createdTime: string) => {
  const created_date = new Date(createdTime);
  const current_date = new Date();

  // Calculate time differences
  const createdAttimeDiffUnix = current_date.getTime() - created_date.getTime();
  const createdAtTimeDiffMinutes = createdAttimeDiffUnix / (1000 * 60);
  const createdAtTimeDiffHours = createdAtTimeDiffMinutes / 60;
  const createdAtTimeDiffDays = createdAtTimeDiffHours / 24;

  let createdAt;
  if (createdAtTimeDiffDays >= 1) {
    createdAt = `${Math.round(createdAtTimeDiffDays)} ${
      createdAtTimeDiffDays == 1 ? "day ago" : "days ago"
    }`;
  } else if (createdAtTimeDiffHours >= 1) {
    createdAt = `${Math.round(createdAtTimeDiffHours)} ${
      createdAtTimeDiffHours == 1 ? "hour ago" : "hours ago"
    }`;
  } else if (createdAtTimeDiffMinutes >= 1) {
    createdAt = `${Math.round(createdAtTimeDiffMinutes)} ${
      createdAtTimeDiffMinutes == 1 ? "min ago" : "mins ago"
    }`;
  } else {
    createdAt = `just now`;
  }
  return createdAt;
};

export const formatExpiresAtDate = (activity: ActivityType) => {
  const expire_date = new Date(activity.expires_at);
  const current_date = new Date();

  const expiresAtTimeDiffUnix = expire_date.getTime() - current_date.getTime();
  const expiresAtTimeDiffMinutes = expiresAtTimeDiffUnix / (1000 * 60);
  const expiresAtTimeDiffHours = expiresAtTimeDiffMinutes / 60;
  const expiresAtTimeDiffDays = expiresAtTimeDiffHours / 24;

  let expiresAt;
  if (expiresAtTimeDiffDays >= 1) {
    expiresAt = `Expires in ${Math.round(expiresAtTimeDiffDays)} ${
      expiresAtTimeDiffDays == 1 ? "day" : "days"
    }`;
  } else if (expiresAtTimeDiffHours >= 1) {
    expiresAt = `Expires in ${Math.round(expiresAtTimeDiffHours)} ${
      expiresAtTimeDiffHours == 1 ? "hour" : "hours"
    }`;
  } else if (expiresAtTimeDiffMinutes >= 1) {
    expiresAt = `Expires in ${Math.round(expiresAtTimeDiffMinutes)} ${
      expiresAtTimeDiffMinutes == 1 ? "min" : "mins"
    }`;
  } else {
    expiresAt = `Expires soon`;
  }
  return expiresAt;
};
